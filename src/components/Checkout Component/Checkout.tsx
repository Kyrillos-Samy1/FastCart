import { useFormik } from "formik";
import Button from "../ui/Button";
import * as yup from "yup";
import { scrollToTop, toastSuccess, toastWarning } from "../ui/utils";
import { useState } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import NotFound from "../NotFound Component/NotFound";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  ElementsConsumer
} from "@stripe/react-stripe-js";
import { addShippingAddress } from "../../Redux/checkoutSlice";
import { Stripe, StripeElements } from "@stripe/stripe-js";
import {
  clearCart,
  clearProductsCartLength
} from "../../Redux/productDetailsSlice";
import { jsPDF } from "jspdf";

const inputs: string[] = [
  "First Name",
  "Last Name",
  "Email",
  "Phone Number",
  "Address",
  "ZIP / Postal Code"
];

interface shippingAddressFormProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  Email: string;
  Address: string;
  ZIP_PostalCode: string;
  cartId: number;
}

interface productsCartProps {
  id: number;
  idImg: number;
  sizeID?: number;
  indexImageNumber: number;
  indexSize?: number;
  photo: string;
  name: string;
  categoryName: string;
  subCategory?: string;
  color: string;
  colorHexa: string;
  size?: string;
  quantity: number;
  price: string;
  width?: number;
  height?: number;
}

interface currentUserProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zip_PostalCode: string;
}

const fieldNameMapper: { [key: string]: keyof shippingAddressFormProps } = {
  "First Name": "firstName",
  "Last Name": "lastName",
  Email: "Email",
  "Phone Number": "phoneNumber",
  Address: "Address",
  "ZIP / Postal Code": "ZIP_PostalCode"
};

export default function Checkout() {
  const [activeProcessing, setActiveProcessing] = useState<number>(0);

  const [showSecondForm, setShowSecondForm] = useState<boolean>(false);

  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);

  const [isCardComplete, setIsCardComplete] = useState<boolean>(false);

  const [isPaid, setIsPaid] = useState<boolean>(false);

  const { cartId } = useParams<{ cartId: string }>();

  const dispatch = useDispatch<AppDispatch>();

  const total_Price = useSelector(
    (state: RootState) => state.productsCartSlice?.totalPrice
  );

  const productsCart: productsCartProps[] = useSelector(
    (state: RootState) => state.productsCartSlice?.productsCart
  );

  const currentUser: currentUserProps = useSelector(
    (state: RootState) => state.checkoutSlice.shippingAddress
  );

  const totalPrice = productsCart.reduce((acc, product) => {
    const price = parseFloat(product.price.replace("$", ""));
    return acc + price * product.quantity;
  }, 0);

  function shippingAddressForm(user: shippingAddressFormProps) {
    console.log("Shipping Address Data is", user);
    toastSuccess("Shipping Address Submitted!");
    dispatch(
      addShippingAddress({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.Email,
        phoneNumber: user.phoneNumber,
        address: user.Address,
        zip_PostalCode: user.ZIP_PostalCode
      })
    );
    setActiveProcessing(1);
    setShowSecondForm(true);
    shippingAddressFormik.resetForm();
  }

  const shippingAddressFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Email: "",
      phoneNumber: "",
      Address: "",
      ZIP_PostalCode: "",
      cartId: Number(cartId)
    },

    onSubmit: shippingAddressForm,

    validationSchema: yup.object().shape({
      firstName: yup.string().required("First Name is Required!"),
      lastName: yup.string().required("Last Name is Required!"),
      phoneNumber: yup.string().required("Phone Nuumber is Required!"),
      Email: yup.string().email("Invalid email").required("Email is Required!"),
      Address: yup.string().required("Address is Required!"),
      ZIP_PostalCode: yup.string().required("ZIP / Postal Code is Required!")
    })
  });

  const stripePromise = loadStripe(
    "pk_test_51RRI0C4PwXfdxZqq4PuhxLNlJmb8Rd78Ew3MO5BfGmJRIT94iOOxrJqJPBGoEvkkDAqZb5v8rizkqn8EwIb1P5QM00cP3YL1yA"
  );

  type stripeType = Stripe | null;
  type stripeElementsType = StripeElements | null;

  const handleMakePayment = async (
    event: React.FormEvent<HTMLFormElement>,
    elements: stripeElementsType,
    stripe: stripeType
  ): Promise<void> => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!isCardComplete) {
      toastWarning("Please complete your card details.");
      return;
    }

    if (isPaid) return;

    setIsButtonLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: productsCart,
        customer: {
          name: `${currentUser.firstName} ${currentUser.lastName}`,
          email: currentUser.email,
          phone: currentUser.phoneNumber,
          address: {
            line1: currentUser.address,
            postal_code: currentUser.zip_PostalCode
          }
        },
        payment_method: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id
          }
        }
      };

      dispatch(clearProductsCartLength());
      dispatch(clearCart());
      console.log("Order Data", orderData);
      setActiveProcessing(2);
      setIsButtonLoading(false);
      setIsConfirmation(true);
      toastSuccess("Payment Successful!");
    }
  };

  interface CardChangeEvent {
    complete: boolean;
  }

  const handleCardChange = (event: CardChangeEvent): void => {
    setIsCardComplete(event.complete);
  };

  //! Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    const now = new Date();
    const dateTime = now.toLocaleString(); //! ex: 5/24/2025, 10:45:30 AM

    doc.setFontSize(18);
    doc.text("Payment Receipt", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Name: ${currentUser.firstName} ${currentUser.lastName}`, 20, 40);
    doc.text(`Email: ${currentUser.email}`, 20, 50);
    doc.text(`Total Paid: $${total_Price.toFixed(2)}`, 20, 60);
    doc.text(`Card Info: Visa (**** **** **** 4242)`, 20, 70);
    doc.text(`Transaction Date: ${dateTime}`, 20, 80);

    doc.setFontSize(10);
    doc.text("Thank you for your payment!", 105, 100, { align: "center" });

    doc.save("payment_receipt.pdf");
  };

  return (
    <>
      {/* // Confirmation message. */}
      {isConfirmation ? (
        <section className="h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden pt-20">
          {/* Glowing gradient balls. */}
          <motion.div
            className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/25 to-emerald-400/15 -bottom-20 left-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/25 to-emerald-400/15 -top-5 bottom-26 -right-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              y: [0, 20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/25 to-emerald-400/15 bottom-10 right-10"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* Animated Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-2xl rounded-3xl p-10 w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckCircle className="text-[var(--primary-color)] w-8 h-8" />
              <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
                Payment Successful
              </h2>
            </div>

            {/* Message */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
              Thank you,{" "}
              <span className="font-semibold">{`${currentUser.firstName} ${currentUser.lastName}`}</span>
              .<br />
              Your payment has been processed successfully.
            </p>

            {/* Details */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 text-sm text-gray-700 space-y-2">
              <p>
                <strong>Total:</strong> ${total_Price.toFixed(2)}
              </p>
              <p>
                <strong>Card:</strong> Visa (**** **** **** 4242)
              </p>
            </div>

            {/* Confirmation */}
            <p className="text-xs text-gray-500 text-center">
              A confirmation has been sent to{" "}
              <strong>{currentUser.email}</strong>
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 items-center">
              <Link to="/" onClick={scrollToTop}>
                <Button title="Back to Homepage" />
              </Link>

              <button
                type="button"
                title="Download Receipt"
                onClick={generatePDF}
                className="text-sm text-emerald-600 hover:underline">
                Download Receipt
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400 italic">
                ⚡ Built by{" "}
                <Link
                  to="https://www.linkedin.com/in/kyrillos-samy-38b110222"
                  target="_blank"
                  className="underline text-[var(--primary-color)] hover:text-emerald-700 transition-colors duration-300 ease-in-out">
                  Kyrillos Samy
                </Link>{" "}
                – Speed. Simplicity. Trust.
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Need help?{" "}
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  target="_blank"
                  className="underline text-[var(--primary-color)] hover:text-emerald-700 transition-colors duration-300 ease-in-out">
                  Contact Support
                </Link>
              </p>
            </div>
          </motion.div>
        </section>
      ) : cartId && productsCart.length !== 0 ? (
        <>
          {/* Shipping Address Form & Order Summary. */}
          <section className="h-full w-full flex justify-center sm:px-10 xs:px-5 pb-16 xs:pt-[105px] lg:pt-32 tracking-wide overflow-hidden">
            {/* Glowing gradient balls. */}
            <motion.div
              className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/25 to-emerald-400/15 md:bottom-5 xs:-bottom-44 left-0"
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.9, 1, 0.9],
                y: [0, -20, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/25 to-emerald-400/15 -top-5 bottom-26 -right-0"
              animate={{
                scale: [0.8, 0.9, 0.8],
                opacity: [0.8, 1, 0.8],
                y: [0, 20, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/25 to-emerald-400/15 bottom-10 right-40"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [1, 0.8, 1],
                y: [0, 15, 0]
              }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            {/* Checkout Section. */}
            <motion.div
              className="xs:w-[500px] md:w-[600px] h-fit shadow-md p-4 rounded-lg backdrop-blur-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}>
              <motion.h2
                className="text-center text-3xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}>
                Checkout
              </motion.h2>

              <div className="flex flex-col h-fit">
                <motion.div
                  className="w-full flex items-center justify-center mt-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[var(--primary-color)] text-white flex justify-center items-center rounded-full">
                      {activeProcessing === 1 || activeProcessing === 2 ? (
                        <CheckRoundedIcon fontSize="small" />
                      ) : (
                        1
                      )}
                    </div>

                    <h2 className="text-sm">Address</h2>
                  </div>

                  <div className="h-[1.6px] xs:w-[40%] md:w-[50%] bg-gray-400 mt-1 md:mx-4 xs:mx-2">
                    <div
                      className={` h-[1.6px] transition-all duration-500 ease-in-out ${
                        activeProcessing === 0
                          ? "w-[50%] bg-gray-400"
                          : activeProcessing === 1
                          ? "w-[50%] bg-[var(--primary-color)]"
                          : ":w-[100%] bg-[var(--primary-color)]"
                      } `}></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className={` ${
                        activeProcessing === 2 || activeProcessing === 1
                          ? "bg-[var(--primary-color)]"
                          : "bg-gray-400"
                      } w-7 h-7 text-white flex justify-center items-center rounded-full transition-all duration-500 ease-in-out`}>
                      {activeProcessing === 2 ? (
                        <CheckRoundedIcon fontSize="small" />
                      ) : (
                        2
                      )}
                    </div>

                    <h2 className="text-gray-700/90 text-sm">Payment</h2>
                  </div>
                </motion.div>

                <div
                  className={` mt-8 relative w-full md:h-[380px] xs:h-[590px] overflow-hidden `}>
                  {/* Shipping Address Form. */}
                  <div
                    className={`absolute px-10 top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                      showSecondForm ? "-translate-x-full" : "translate-x-0 "
                    }`}>
                    <motion.div
                      className="inline-block mb-5"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}>
                      <h2 className="text-2xl">Shipping Address</h2>
                      <div className="h-[3px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
                    </motion.div>

                    <motion.form
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full w-full"
                      onSubmit={shippingAddressFormik.handleSubmit}>
                      <div className="grid md:grid-cols-2 xs:grid-cols-1 mb-8">
                        {inputs.map((input, indexInput) => (
                          <div
                            key={indexInput}
                            className="w-[95%] h-full cursor-pointer relative">
                            <input
                              type={
                                input === "Phone Number" ||
                                input === "ZIP / Postal Code"
                                  ? "number"
                                  : input === "Email"
                                  ? "email"
                                  : "text"
                              }
                              name={fieldNameMapper[input]}
                              id={fieldNameMapper[input]}
                              value={
                                shippingAddressFormik.values[
                                  fieldNameMapper[input]
                                ]
                              }
                              onChange={shippingAddressFormik.handleChange}
                              onBlur={shippingAddressFormik.handleBlur}
                              className={`peer w-full mt-7 h-10 px-2 bg-gray-50 outline-none remove-number-arrows
                              ${
                                shippingAddressFormik.touched[
                                  fieldNameMapper[input]
                                ] &&
                                shippingAddressFormik.errors[
                                  fieldNameMapper[input]
                                ]
                                  ? "placeholder-red-500 placeholder-shown:text-sm"
                                  : "placeholder-gray-400"
                              }`}
                              placeholder={
                                shippingAddressFormik.touched[
                                  fieldNameMapper[input]
                                ] &&
                                shippingAddressFormik.errors[
                                  fieldNameMapper[input]
                                ]
                                  ? shippingAddressFormik.errors[
                                      fieldNameMapper[input]
                                    ]
                                  : " "
                              }
                            />

                            <h6
                              className={`pointer-events-none absolute left-2 text-sm transition-all duration-200
                            ${
                              shippingAddressFormik.values[
                                fieldNameMapper[input]
                              ] ||
                              (shippingAddressFormik.touched[
                                fieldNameMapper[input]
                              ] &&
                                shippingAddressFormik.errors[
                                  fieldNameMapper[input]
                                ])
                                ? "top-[10px] text-sm text-[var(--primary-color)]"
                                : "peer-placeholder-shown:top-[35px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                            }
                            peer-focus:top-[10px] peer-focus:text-sm peer-focus:text-[var(--primary-color)]`}>
                              {input} *
                            </h6>

                            <div
                              className={`${
                                input === "Last Name"
                                  ? "md:h-[0.5px] lg:h-[0.5px] xs:h-[0.5px]"
                                  : input === "Email" ||
                                    input === "Phone Number"
                                  ? "h-[0.5px]"
                                  : input === "Address"
                                  ? "md:h-[0.5px] lg:h-[0.5px] xs:h-[1.3px]"
                                  : "h-[0.5px]"
                              }  bg-gray-500`}
                            />
                          </div>
                        ))}
                      </div>

                      <motion.button
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        type="submit"
                        title="Next"
                        className="mt-5"
                        onClick={() => scrollToTop()}>
                        <Button type="submit" title="Next" />
                      </motion.button>
                    </motion.form>
                  </div>

                  {/* Order Summary Part. */}
                  <div
                    className={`absolute px-10 top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                      showSecondForm ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <div className="flex md:justify-between xs:flex-col md:flex-row xs:gap-2 md:gap-0 w-full">
                      <h2 className="text-2xl">Order Summary</h2>
                      <h5 className="text-xl xs:pb-5 md:pb-0">
                        Total Price:{" "}
                        <span className="font-mono">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </h5>
                    </div>
                    <div className="border-[1.5px] border-gray-300 md:mt-3 mb-3 bg-gray-300"></div>

                    <Elements stripe={stripePromise}>
                      <ElementsConsumer>
                        {({ elements, stripe }) => (
                          <form
                            onSubmit={(e) => {
                              handleMakePayment(e, elements, stripe);
                              if (isCardComplete) {
                                setIsPaid(true);
                              }
                            }}>
                            <div className="flex flex-col justify-between w-full">
                              <div
                                className={`flex flex-col overflow-y-auto pb-5 md:pr-5 gap-y-4 md:h-[180px] xs:h-[350px] w-full`}>
                                {productsCart?.map((pC, index) => (
                                  <div key={index}>
                                    <div className="flex justify-between md:items-center xs:items-start xs:gap-4 md:gap-0">
                                      <h2 className="text-lg">{pC.name}</h2>

                                      <h4 className="text-gray-600 text-lg font-mono">
                                        {pC.price}
                                      </h4>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-600">
                                      <h4 className="text-gray-600 text-base mt-1">
                                        Quantity: {pC.quantity}
                                      </h4>
                                      <h3 className="flex flex-wrap items-center gap-1 mt-1">
                                        Color:{" "}
                                        <div
                                          style={{
                                            backgroundColor: pC.colorHexa
                                          }}
                                          title={pC.color}
                                          aria-label={pC.color}
                                          className="w-5 h-5 rounded-full border"></div>
                                      </h3>{" "}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="border-[1.5px] border-gray-300 mb-5 mt-3 bg-gray-300"></div>
                              <CardElement
                                onChange={handleCardChange}
                                className="w-full"
                              />

                              <div
                                className={`flex justify-between items-center mt-8 w-full`}>
                                <button
                                  type="button"
                                  title="Back"
                                  onClick={() => {
                                    setActiveProcessing(0);
                                    if (isPaid) {
                                      setShowSecondForm(true);
                                    } else {
                                      setShowSecondForm(false);
                                    }
                                    scrollToTop();
                                  }}>
                                  <Button
                                    type="button"
                                    title="Back"
                                    classNameArrows="rotate-180"
                                    className={`${
                                      isPaid &&
                                      "cursor-not-allowed bg-[#2E8157]"
                                    } flex flex-row-reverse gap-2 pl-0`}
                                  />
                                </button>

                                <button
                                  type="submit"
                                  title="Pay"
                                  onClick={() => {
                                    scrollToTop();
                                  }}>
                                  <Button
                                    type="submit"
                                    title={`${
                                      isButtonLoading ? "load" : "Pay"
                                    }`}
                                    className={`${
                                      isPaid &&
                                      "cursor-not-allowed bg-[#2E8157]"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                          </form>
                        )}
                      </ElementsConsumer>
                    </Elements>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
