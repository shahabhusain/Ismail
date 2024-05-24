import React from "react";
import img from "../../assets/img.svg";
import img1 from "../../assets/img1.svg";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-[80%] mx-auto mt-[15rem] flex flex-col items-center">
      <h1 className=" text-[33px] font-bold text-center">My Projects</h1>
      <p className=" text-center max-w-[655px] text-[#828386]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{" "}
      </p>

      <div className=" flex items-center gap-4 mt-6">
        <Link to="/recent" className=" py-3 px-12 rounded-full border-[#EF3C59] border-[2px]">
          Recent Work
        </Link>
        <Link to="case" className=" py-3 px-12 rounded-full bg-[#EF3C59] text-white">
          View More CaseStudies
        </Link>
      </div>

      <div className=" bg-[#0F8AAC] px-6 rounded-[2rem] flex items-center justify-between mt-24">
        <div className=" w-1/2">
          <img src={logo} alt="" />
          <h1 className=" text-[33px] font-bold text-white mt-4">
            Development Central
          </h1>
          <p className=" text-white">Mobile App</p>
          <p className=" text-white mt-6">
            development central platform offers a seamless booking system,
            empowering users to schedule educational sessions for their children
            while also providing opportunities for personal development with
            professional coaches.
          </p>
          <button className=" border-[#fff] text-white py-3 px-6 rounded-full border-[2px] flex items-center gap-2 mt-6">
            <img src={arrow} alt="" />
            view case study
          </button>
        </div>
        <div className=" flex gap-5 w-[50%]">
          <img src={img1} alt="" />
          <img src={img} alt="" />
        </div>
      </div>

      <div className=" bg-[#76BCFF] px-6 rounded-[2rem] flex items-center justify-between mt-24">
        <div className=" w-1/2">
          <img src={logo1} alt="" />
          <h1 className=" text-[33px] font-bold text-white mt-4">cheapskate</h1>
          <p className=" text-white">Mobile App</p>
          <p className=" text-white mt-6">
            development central platform offers a seamless booking system,
            empowering users to schedule educational sessions for their children
            while also providing opportunities for personal development with
            professional coaches.
          </p>
          <button className=" border-[#fff] text-white py-3 px-6 rounded-full border-[2px] flex items-center gap-2 mt-6">
            <img src={arrow} alt="" />
            view case study
          </button>
        </div>
        <div className=" flex gap-5 w-[50%]">
          <img src={img1} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
