import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/nabielProfile.png";
import { motion } from "framer-motion";
import { GoStack } from "react-icons/go";
import { BsAndroid2 } from "react-icons/bs";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Muhammad Nabiel Setiawan
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <span className="flex items-center bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text my-2 text-3xl tracking-wide text-transparent">
                Full Stack Developer
                <GoStack className="ml-2 text-3xl text-fuchsia-500" />
              </span>
              <span
                className="flex items-center bg-gradient-to-r from-teal-400 to-yellow-200  bg-clip-text my-2 text-3xl tracking-wide text-transparent"
              >
                Android Developer
                <BsAndroid2 className="ml-2 text-3xl text-green-500" />
              </span>
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Kevin Rush"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
