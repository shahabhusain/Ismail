import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const FadeInUpAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };
  return (
  <div>
     <motion.div
      initial={{
        opacity: 0,
        y: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
        },
      }}
      className=" flex items-center flex-col justify-center gap-4 mt-24 relative"
    >
      <h1 className=" text-[64px] font-bold">Hi, I am ismail nisar</h1>
      <h2 className=" text-[32px] font-medium">
        P <span /> r <span /> o <span /> d <span /> u <span /> c <span /> t{" "}
        <span /> D <span /> e <span /> s <span /> i <span /> g <span /> n{" "}
        <span /> e <span /> r <span />
      </h2>
      <p className=" text-[#828386] text-[14px] font-normal max-w-[555px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{" "}
      </p>
      <div className=" flex items-center gap-4">
        <button className=" py-3 px-12 rounded-full border-[#EF3C59] border-[2px]">
          About Me
        </button>
        <button className=" py-3 px-12 rounded-full bg-[#EF3C59] text-white">
          My Work
        </button>
      </div>
      <motion.div
        initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
        className=" w-[35px] h-[35px] bg-[#82838641] rounded-lg absolute top-0 left-[12rem]"
      ></motion.div>
      <motion.div
        initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
        className=" w-[30px] h-[30px] bg-[#82838695] rounded-lg absolute top-0 right-[12rem]"
      ></motion.div>
      <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 100,
            transition: {
              duration: 1,
            },
          }}
        className=" w-[15px] h-[15px] bg-[#82838694] rounded-md absolute top-[12rem] left-[17rem]"
      ></motion.div>
      <motion.div
        initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            x: -100,
            transition: {
              duration: 1,
            },
          }}
        className=" w-[25px] h-[25px] bg-[#82838625] rounded-lg absolute top-[12rem] right-[17rem]"
      ></motion.div>
      <motion.div
        initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 50,
            transition: {
              duration: 2,
            },
          }}
        className=" w-[25px] h-[25px] bg-[#82838697] rounded-lg absolute top-[20rem] left-[25rem]"
      ></motion.div>
      <motion.div
        initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 50,
            transition: {
              duration: 2,
            },
          }}
        className=" w-[25px] h-[25px] bg-[#82838654] rounded-lg absolute top-[20rem] right-[25rem]"
      ></motion.div>
      <motion.div
        initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 50,
            transition: {
              duration: 1,
            },
          }}
        className=" w-[25px] h-[25px] bg-[#828386] rounded-lg absolute top-[25rem]"
      ></motion.div>
      
    </motion.div>
        <div className=" w-full h-[2px] bg-[#EF3C59] mt-[15rem]"></div>
  </div> 
  );
};

export default Hero;
