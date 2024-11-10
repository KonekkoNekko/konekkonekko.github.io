import { motion } from "framer-motion";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap, FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiExpo, SiJetpackcompose, SiLeaflet } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const FrameworksLibraries = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Frameworks & Libraries
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJetpackcompose className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandReactNative className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpo className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoTailwindCss className="text-7xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaLaravel className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLeaflet className="text-7xl text-green-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FrameworksLibraries;
