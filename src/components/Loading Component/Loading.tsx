import { useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { motion, easeInOut } from "framer-motion";

export default function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="h-dvh flex justify-center items-center relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-700/55 to-emerald-700/40 -bottom-20 left-0"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -10, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
        />
        <motion.div
          className="pointer-events-none absolute blur-sm w-80 h-80 rounded-full bg-gradient-to-br from-emerald-700/55 to-emerald-700/40 -top-5 bottom-26 -right-28"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
        />
        <motion.div
          className="pointer-events-none absolute blur-sm w-52 h-52 rounded-full bg-gradient-to-tl from-emerald-700/55 to-emerald-700/40 bottom-10 right-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            y: [0, 15, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
        />
        <SyncLoader color="var(--primary-color)" />
      </div>
    </>
  );
}
