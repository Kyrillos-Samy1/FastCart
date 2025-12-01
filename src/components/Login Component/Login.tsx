import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { motion, easeInOut } from "framer-motion";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toastError, toastSuccess, toastWarning } from "../ui/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reduxStore";

export default function Signup() {
  const [isEyeOff, setIsEyeOff] = useState(true);

  const navigate = useNavigate();

  const location = useLocation();

  const userCredentials = useSelector(
    (state: RootState) => state.signupSlice.user
  );

  const loginFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      terms: false
    },
    onSubmit: (values) => {
      const userExists = userCredentials.some(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (!userExists) {
        toastError("Wrong email or password.");
        loginFormik.resetForm();
        setIsEyeOff(true);
        return;
      }

      navigate("/");
      sessionStorage.setItem("token", JSON.stringify("token12345"));
      toastSuccess("Login successful.");
      loginFormik.resetForm();
      setIsEyeOff(true);
    },
    validationSchema: yup.object({
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
    const token = sessionStorage.getItem("token");
    if (!token && location.pathname === "/login") {
      toastWarning("Please login to continue.");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (loginFormik.errors.email && loginFormik.touched.email) {
      toastError(loginFormik.errors.email);
    } else if (loginFormik.errors.password && loginFormik.touched.password) {
      toastError(loginFormik.errors.password);
    } else if (loginFormik.errors.terms && loginFormik.touched.terms) {
      toastError(loginFormik.errors.terms);
    }
  }, [
    loginFormik.errors.email,
    loginFormik.touched.email,
    loginFormik.errors.password,
    loginFormik.touched.password,
    loginFormik.errors.terms,
    loginFormik.touched.terms
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
              Hello Again!
            </motion.h2>

            <motion.p
              className="text-start lg:w-[63%] xs:w-[90%] text-gray-600"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}>
              Log in to continue your journey with{" "}
              <span className="font-semibold text-[var(--primary-color)]">
                FastCart
              </span>
              !
            </motion.p>

            <div className="lg:w-[90%] xs:w-full flex flex-col items-center md:justify-around xs:justify-evenly h-screen">
              {/* Signup Form. */}
              <form
                className="lg:w-[70%] xs:w-[90%]"
                onSubmit={loginFormik.handleSubmit}>
                {/* Email Field. */}
                <motion.div
                  className="mb-4 relative backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}>
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    value={loginFormik.values.email}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    required
                    className={`w-full p-3 ring-1 ring-gray-200 bg-gray-50 rounded-md peer focus:outline-none outline-none transition-all duration-200
                    ${
                      loginFormik.touched.email && loginFormik.errors.email
                        ? "ring-red-500"
                        : "focus:ring-[var(--primary-color)]"
                    }
                    ${
                      loginFormik.touched.email && !loginFormik.errors.email
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
                      loginFormik.values.email ||
                      (loginFormik.touched.email && loginFormik.errors.email)
                        ? "top-[-10px] text-sm"
                        : ""
                    }
                    ${
                      loginFormik.errors.email && loginFormik.touched.email
                        ? "text-red-500 peer-focus:border-x peer-focus:border-red-500 border-x border-red-500 peer-placeholder-shown:border-0"
                        : loginFormik.values.email
                        ? "text-[var(--primary-color)] border-x border-[var(--primary-color)]"
                        : "peer-focus:text-[var(--primary-color)] peer-focus:border-x peer-focus:border-[var(--primary-color)]"
                    }
                  `}>
                    Email
                  </label>
                </motion.div>

                {/* Password Field. */}
                <motion.div
                  className="mb-4 relative backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}>
                  <input
                    type={isEyeOff ? "password" : "text"}
                    id="password"
                    placeholder=" "
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    required
                    className={`w-full p-3 ring-1 ring-gray-200 bg-gray-50 rounded-md peer focus:outline-none outline-none transition-all duration-200
                    ${
                      loginFormik.errors.password &&
                      loginFormik.touched.password
                        ? "ring-red-500"
                        : "focus:ring-[var(--primary-color)]"
                    }
                    ${
                      loginFormik.errors.password &&
                      loginFormik.touched.password
                        ? "ring-red-500"
                        : loginFormik.values.password
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
                      loginFormik.values.password ||
                      (loginFormik.touched.password &&
                        loginFormik.errors.password)
                        ? "top-[-10px] text-sm"
                        : ""
                    }
                    ${
                      loginFormik.errors.password &&
                      loginFormik.touched.password
                        ? "text-red-500 peer-focus:border-x peer-focus:border-red-500 border-x border-red-500 peer-placeholder-shown:border-0"
                        : loginFormik.values.password
                        ? "text-[var(--primary-color)] border-x border-[var(--primary-color)]"
                        : "peer-focus:text-[var(--primary-color)] peer-focus:border-x peer-focus:border-[var(--primary-color)]"
                    }
                  `}>
                    Password
                  </label>
                </motion.div>

                {/* Login Button Part. */}
                <div className="flex justify-between items-center">
                  {/* Submit Button. */}
                  <motion.button
                    type="submit"
                    title="Login"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}>
                    <Button
                      title="Login"
                      type="submit"
                      titleHovering="Login"
                      className="xs:text-sm md:text-base"
                      classNameArrows="xs:pt-[2.5px] md:pt-0 pl-[1px]"
                    />
                  </motion.button>

                  <div className="flex flex-col items-end">
                    {/* Terms & Privacy. */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}>
                      <label className="flex items-center space-x-2 ">
                        <input
                          type="checkbox"
                          name="terms"
                          id="terms"
                          className="accent-[var(--primary-color)] w-4 h-4 cursor-pointer"
                          onChange={loginFormik.handleChange}
                          onBlur={loginFormik.handleBlur}
                          checked={loginFormik.values.terms}
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

                    {/* Forget Password? */}
                    <motion.p
                      className="text-gray-700 cursor-pointer hover:underline md:text-base xs:text-xs"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}>
                      Forget Password?
                    </motion.p>
                  </div>
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
                  transition={{ duration: 1, delay: 0.6 }}>
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-[var(--primary-color)] hover:underline">
                    Sign up
                  </Link>
                </motion.p>

                <div className="lg:w-[100%] xs:w-[100%] flex items-center justify-between my-5">
                  <motion.span
                    className="block w-[40%] h-[1.5px] bg-[var(--primary-color)] rounded-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />

                  <motion.p
                    className="text-gray-500 text-center mx-3 whitespace-nowrap"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}>
                    Or continue with
                  </motion.p>

                  <motion.span
                    className="block w-[40%] h-[1.5px] bg-[var(--primary-color)] rounded-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
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
                    className="backdrop-blur-sm flex items-center justify-center w-20 h-12 rounded-full bg-gray-50 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    variants={itemSocialMedial}
                    transition={{
                      duration: 3,
                      y: { repeat: Infinity }
                    }}>
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
