import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { motion, easeInOut } from "framer-motion";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toastError, toastSuccess } from "../ui/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import { setUserCredentials } from "../../Redux/signupSlice";

export default function Signup() {
  const [isEyeOff, setIsEyeOff] = useState(true);

  const navigate = useNavigate();

  const userCredentials = useSelector(
    (state: RootState) => state.signupSlice.user
  );

  const dispatch = useDispatch<AppDispatch>();

  const signupFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: false
    },
    onSubmit: (values) => {
      if (userCredentials.some((user) => user.email === values.email)) {
        toastError("User already exists with this email!");
        signupFormik.resetForm();
        setIsEyeOff(true);
        console.log("User already exists with this email:", values.email);
        return;
      }

      dispatch(setUserCredentials(values));
      navigate("/");
      sessionStorage.setItem("token", JSON.stringify("token12345"));
      console.log("Form submitted with values:", values);
      toastSuccess("Account created successfully.");
      signupFormik.resetForm();
      setIsEyeOff(true);
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required."),
      email: yup
        .string()
        .email("Invalid email.")
        .required("Email is required."),
      password: yup
        .string()
        .min(10, "Password must be at least 10 chars.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/,
          "Use uppercase, lowercase, numbers & symbols (e.g., Example@123)."
        )
        .required("Password is required."),
      terms: yup.boolean().oneOf([true], "Accept the Terms Of Service.")
    })
  });

  useEffect(() => {
    if (signupFormik.errors.name && signupFormik.touched.name) {
      toastError(signupFormik.errors.name);
    } else if (signupFormik.errors.email && signupFormik.touched.email) {
      toastError(signupFormik.errors.email);
    } else if (signupFormik.errors.password && signupFormik.touched.password) {
      toastError(signupFormik.errors.password);
    } else if (signupFormik.errors.terms && signupFormik.touched.terms) {
      toastError(signupFormik.errors.terms);
    }
  }, [
    signupFormik.errors.name,
    signupFormik.touched.name,
    signupFormik.errors.email,
    signupFormik.touched.email,
    signupFormik.errors.password,
    signupFormik.touched.password,
    signupFormik.errors.terms,
    signupFormik.touched.terms
  ]);

  const containerSocialMedial = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemSocialMedial = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: [0, 5, 0]
    }
  };

  return (
    <>
      <section className="bg-gray-50 h-full w-full tracking-wide">
        <div className="flex items-center justify-between h-screen w-full lg:flex-row xs:flex-col overflow-hidden">
          {/* Glowing gradient balls */}
          <motion.div
            className="pointer-events-none fixed blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-800/30 to-emerald-800/30 -bottom-10 right-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          />
          <motion.div
            className="pointer-events-none fixed blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-800/30 to-emerald-800/30 -top-5 bottom-26 -left-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              x: [0, 20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
          />

          {/* Form Part. */}
          <div className="md:h-screen lg:w-[50%] xs:w-full flex flex-col items-center pt-16 backdrop-blur-md">
            <motion.h2
              className="sm:text-5xl xs:text-4xl md:mb-14 xs:mb-5 lg:w-[63%] xs:w-[90%] text-gray-700 font-bold text-start tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              Create Account
            </motion.h2>

            <motion.p
              className="text-start lg:w-[63%] xs:w-[90%] text-gray-600 "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}>
              Let's get you started with{" "}
              <span className="font-semibold text-[var(--primary-color)]">
                FastCart
              </span>
              !
            </motion.p>

            <div className="lg:w-[90%] xs:w-full flex flex-col items-center md:justify-around xs:justify-evenly h-screen">
              {/* Signup Form. */}
              <form
                className="lg:w-[70%] xs:w-[90%]"
                onSubmit={signupFormik.handleSubmit}>
                {/* Name Field */}
                <motion.div
                  className="mb-4 relative backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}>
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    value={signupFormik.values.name}
                    onChange={signupFormik.handleChange}
                    onBlur={signupFormik.handleBlur}
                    required
                    className={`w-full p-3 ring-1 ring-gray-200 bg-gray-50 rounded-md peer focus:outline-none outline-none transition-all duration-200
                    ${
                      signupFormik.errors.name && signupFormik.touched.name
                        ? "ring-red-500"
                        : "focus:ring-[var(--primary-color)]"
                    }
                    ${signupFormik.values.name ? "ring-[#2E8B57]" : ""}
                  `}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-3 bg-gray-50 px-1 transition-all duration-200 pointer-events-none rounded-full
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                    peer-focus:top-[-10px] peer-focus:text-sm
                    ${
                      signupFormik.values.name ||
                      (signupFormik.touched.name && signupFormik.errors.name)
                        ? "top-[-10px] text-sm"
                        : ""
                    }
                    ${
                      signupFormik.errors.name && signupFormik.touched.name
                        ? "text-red-500 peer-focus:border-x peer-focus:border-red-500"
                        : signupFormik.values.name
                        ? "text-[var(--primary-color)] border-x border-[var(--primary-color)]"
                        : "peer-focus:text-[var(--primary-color)] peer-focus:border-x peer-focus:border-[var(--primary-color)]"
                    }
                  `}>
                    Name
                  </label>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="mb-4 relative backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}>
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    value={signupFormik.values.email}
                    onChange={signupFormik.handleChange}
                    onBlur={signupFormik.handleBlur}
                    required
                    className={`w-full p-3 ring-1 ring-gray-200 bg-gray-50 rounded-md peer focus:outline-none outline-none transition-all duration-200
                    ${
                      signupFormik.touched.email && signupFormik.errors.email
                        ? "ring-red-500"
                        : "focus:ring-[var(--primary-color)]"
                    }
                    ${
                      signupFormik.touched.email && !signupFormik.errors.email
                        ? "ring-[#2E8B57]"
                        : ""
                    }
                  `}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-3 bg-gray-50 px-1 transition-all duration-200 pointer-events-none rounded-full
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                    peer-focus:top-[-10px] peer-focus:text-sm
                    ${
                      signupFormik.values.email ||
                      (signupFormik.touched.email && signupFormik.errors.email)
                        ? "top-[-10px] text-sm"
                        : ""
                    }
                    ${
                      signupFormik.errors.email && signupFormik.touched.email
                        ? "text-red-500 peer-focus:border-x peer-focus:border-red-500 border-x border-red-500 peer-placeholder-shown:border-0"
                        : signupFormik.values.email
                        ? "text-[var(--primary-color)] border-x border-[var(--primary-color)]"
                        : "peer-focus:text-[var(--primary-color)] peer-focus:border-x peer-focus:border-[var(--primary-color)]"
                    }
                  `}>
                    Email
                  </label>
                </motion.div>

                {/* Password Field */}
                <motion.div
                  className="mb-4 relative backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}>
                  <input
                    type={isEyeOff ? "password" : "text"}
                    id="password"
                    placeholder=" "
                    value={signupFormik.values.password}
                    onChange={signupFormik.handleChange}
                    onBlur={signupFormik.handleBlur}
                    required
                    className={`w-full p-3 ring-1 ring-gray-200 bg-gray-50 rounded-md peer focus:outline-none outline-none transition-all duration-200
                    ${
                      signupFormik.errors.password &&
                      signupFormik.touched.password
                        ? "ring-red-500"
                        : "focus:ring-[var(--primary-color)]"
                    }
                    ${
                      signupFormik.errors.password &&
                      signupFormik.touched.password
                        ? "ring-red-500"
                        : signupFormik.values.password
                        ? "ring-[#2E8B57]"
                        : ""
                    }
                  `}
                  />
                  <div className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                    {isEyeOff ? (
                      <IoIosEyeOff
                        className="w-6 h-6"
                        onClick={() => setIsEyeOff(false)}
                      />
                    ) : (
                      <IoMdEye
                        className="w-6 h-6"
                        onClick={() => setIsEyeOff(true)}
                      />
                    )}
                  </div>
                  <label
                    htmlFor="password"
                    className={`absolute left-3 bg-gray-50 px-1 transition-all duration-200 pointer-events-none rounded-full
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                    peer-focus:top-[-10px] peer-focus:text-sm
                    ${
                      signupFormik.values.password ||
                      (signupFormik.touched.password &&
                        signupFormik.errors.password)
                        ? "top-[-10px] text-sm"
                        : ""
                    }
                    ${
                      signupFormik.errors.password &&
                      signupFormik.touched.password
                        ? "text-red-500 peer-focus:border-x peer-focus:border-red-500 border-x border-red-500 peer-placeholder-shown:border-0"
                        : signupFormik.values.password
                        ? "text-[var(--primary-color)] border-x border-[var(--primary-color)]"
                        : "peer-focus:text-[var(--primary-color)] peer-focus:border-x peer-focus:border-[var(--primary-color)]"
                    }
                  `}>
                    Password
                  </label>
                </motion.div>

                <div className="flex items-center justify-between">
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    title="Sign Up"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}>
                    <Button
                      title="Sign Up"
                      type="submit"
                      titleHovering="Sign Up"
                      className="xs:text-sm md:text-base"
                      classNameArrows="xs:pt-[2.5px] md:pt-0 pl-[1px]"
                    />
                  </motion.button>

                  {/* Terms & Conditions. */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="accent-[var(--primary-color)] w-4 h-4 cursor-pointer"
                        onChange={signupFormik.handleChange}
                        onBlur={signupFormik.handleBlur}
                        checked={signupFormik.values.terms}
                        required
                      />
                      <span className="md:text-sm xs:text-xs text-gray-700">
                        Agree to the{" "}
                        <Link
                          to="/terms"
                          title="Terms Of Service"
                          rel="noopener noreferrer"
                          className="text-[var(--primary-color)] hover:underline hover:text-green-800">
                          Terms
                        </Link>{" "}
                        &{" "}
                        <Link
                          to="/privacy"
                          title="Privacy Policy"
                          rel="noopener noreferrer"
                          className="text-[var(--primary-color)] hover:underline hover:text-green-800">
                          Privacy
                        </Link>
                      </span>
                    </label>
                  </motion.div>
                </div>
              </form>
              {/* Register using other accounts. */}
              <div
                className={`lg:w-[70%] xs:w-[90%] md:pt-0
              `}>
                <motion.p
                  className="text-gray-500 lg:w-[100%] xs:w-[100%]"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[var(--primary-color)] hover:underline">
                    Login
                  </Link>
                </motion.p>

                <div className="lg:w-[100%] xs:w-[100%] flex items-center justify-between my-5">
                  <motion.span
                    className="block w-[40%] h-[1.5px] bg-[var(--primary-color)] rounded-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />

                  <motion.p
                    className="text-gray-500 text-center mx-3 whitespace-nowrap"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}>
                    Or sign up with
                  </motion.p>

                  <motion.span
                    className="block w-[40%] h-[1.5px] bg-[var(--primary-color)] rounded-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>

                {/* Social Media Icons. */}
                <motion.div
                  className="flex items-center justify-evenly lg:w-[100%] xs:w-[100%] mt-5 xs:pb-40 md:pb-0"
                  variants={containerSocialMedial}
                  initial="hidden"
                  animate="visible">
                  {/* Google Icon. */}
                  <motion.div
                    className="backdrop-blur-sm flex items-center justify-center w-20 h-12 rounded-full bg-gray-50 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    variants={itemSocialMedial}
                    transition={{
                      duration: 3,
                      y: { repeat: Infinity }
                    }}>
                    <img
                      src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678142/gpykyob4zm9wgzm40pae.png"
                      alt="Sign up with Google"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* Apple Icon. */}
                  <motion.div
                    className="backdrop-blur-sm flex items-center justify-center w-20 h-12 rounded-full bg-gray-50 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    variants={itemSocialMedial}
                    transition={{
                      duration: 3,
                      y: { repeat: Infinity }
                    }}>
                    <img
                      src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678134/i6rcrn8huyusvtwayxgg.png"
                      alt="Sign up with Apple"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* Facebook Icon. */}
                  <motion.div
                    variants={itemSocialMedial}
                    transition={{
                      duration: 3,
                      y: { repeat: Infinity }
                    }}
                    className="backdrop-blur-sm flex items-center justify-center w-20 h-12 rounded-full bg-gray-50 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <img
                      src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678139/dj9zkhhbwdsckhtxm1it.png"
                      alt="Sign up with Facebook"
                      className="w-8 h-8"
                    />{" "}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Image & Logo and FastCart Part. */}
          <div className="hidden h-screen w-[47%] lg:flex flex-col items-start justify-between backdrop-blur-md">
            <div className="pt-5 mx-auto flex items-center gap-3">
              {/* Logo Part. */}
              <motion.span
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                <img
                  src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678155/cvwydgjkv2r3xluc58kd.png"
                  alt="FastCart"
                  className="w-16 h-16 object-contain"
                />
              </motion.span>

              {/* FastCart Part. */}
              <motion.h2
                className="text-7xl font-mono text-emerald-700 tracking-wide"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}>
                FastCart
              </motion.h2>
            </div>

            {/* Image Part. */}
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678141/oahgfdcmriat1vkn71ha.png"
              alt="Signup Illustration"
              className="h-[80%] w-[95%] mb-8 backdrop-blur-md rounded-full bg-emerald-700 object-contain hidden lg:block shadow-md xs:mt-0 xs:ml-0 xs:mr-0 xs:p-0 lg:rounded-lg xs:rounded-none lg:border-none lg:shadow-lg xs:shadow-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* {window.innerWidth <= 360 && window.innerHeight >= 710
                ? "xs:pt-[120px]"
                : window.innerWidth <= 360 && window.innerHeight <= 780
                ? "xs:pt-[30px]"
                : window.innerWidth <= 375 && window.innerHeight <= 812
                ? "xs:pt-[50px]"
                : window.innerWidth <= 390
                ? "xs:pt-[88px]"
                : window.innerWidth <= 393 && window.innerHeight <= 851
                ? "xs:pt-[180px]"
                : window.innerWidth <= 375
                ? "xs:pt-[70px]"
                : window.innerWidth <= 414
                ? "xs:pt-[140px]"
                : window.innerWidth <= 428
                ? "xs:pt-[160px]"
                : ""} */
}
