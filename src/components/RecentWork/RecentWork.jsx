import React, { useState } from "react";
import app from "../../assets/apps/1.png";
import app1 from "../../assets/apps/2.png";
import app2 from "../../assets/apps/3.png";
import app3 from "../../assets/apps/4.png";
import app4 from "../../assets/apps/5.png";
import app5 from "../../assets/apps/6.png";
import app6 from "../../assets/apps/7.png";
import app7 from "../../assets/apps/8.png";
import app9 from "../../assets/dashboards/1.png";
import app10 from "../../assets/dashboards/2.png";
import app11 from "../../assets/dashboards/3.png";
import app12 from "../../assets/dashboards/4.png";
import app13 from "../../assets/dashboards/5.png";
import app14 from "../../assets/landing/1.png";
import app15 from "../../assets/landing/2.jpg";
import app16 from "../../assets/landing/3.png";
import app17 from "../../assets/landing/4.png";
import app18 from "../../assets/landing/5.png";
import app19 from "../../assets/landing/6.png";
import app20 from "../../assets/landing/7.png";
import img from "../../assets/img.svg";
import img1 from "../../assets/img1.svg";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import arrow from "../../assets/arrow.png";

const RecentWork = () => {
  const [selectedFilter, setSelectedFilter] = useState("App");
  const [showMore, setShowMore] = useState(false);

  const RecentData = [
    { id: 1, img: app, title: "App" },
    { id: 2, img: app1, title: "App" },
    { id: 3, img: app2, title: "App" },
    { id: 4, img: app3, title: "App" },
    { id: 5, img: app4, title: "App" },
    { id: 6, img: app5, title: "App" },
    { id: 7, img: app6, title: "App" },
    { id: 8, img: app7, title: "App" },
    { id: 10, img: app9, title: "Dashboards" },
    { id: 11, img: app10, title: "Dashboards" },
    { id: 12, img: app11, title: "Dashboards" },
    { id: 13, img: app12, title: "Dashboards" },
    { id: 14, img: app13, title: "Dashboards" },
    { id: 15, img: app14, title: "Landing" },
    { id: 16, img: app15, title: "Landing" },
    { id: 17, img: app16, title: "Landing" },
    { id: 18, img: app17, title: "Landing" },
    { id: 19, img: app18, title: "Landing" },
    { id: 20, img: app19, title: "Landing" },
    { id: 21, img: app20, title: "Landing" },
    // {
    //   id: 22,
    //   logo: logo,
    //   title: "Development Central",
    //   description:
    //     "Development Central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    //   images: [img1, img],
    //   bgColor: "#0F8AAC",
    //   know: "Case",
    // },
    // {
    //   id: 23,
    //   logo: logo1,
    //   title: "Cheapskate",
    //   description:
    //     "Development Central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    //   images: [img1, img],
    //   bgColor: "#76BCFF",
    //   know: "Case",
    // },
    // {
    //   id: 24,
    //   logo: logo,
    //   title: "Development Central",
    //   description:
    //     "Development Central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    //   images: [img1, img],
    //   bgColor: "#0F8AAC",
    //   know: "Case",
    // },

  
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setShowMore(false); // Reset showMore when filter changes
  };

  const filteredData = selectedFilter === "All"
    ? RecentData
    : RecentData.filter((item) =>
        selectedFilter === "Case" ? item.know === "Case" : item.title.toLowerCase().includes(selectedFilter.toLowerCase())
      );

  const visibleData = showMore ? filteredData : filteredData.slice(0, 4);

  return (
    <div className="w-[80%] mx-auto py-12">
      <p className=" font-medium text-[#EF3C59] text-center text-[20px]">My Work</p>
      <h1 className=" text-[40px] font-bold text-center">Here is some of My Showcase work?</h1>
      <div className="flex items-center gap-4 list-none justify-center bg-white py-3 w-[30%] mx-auto rounded-full mt-6">
        <li
          onClick={() => handleFilterClick("App")}
          className={
            selectedFilter === "App"
              ? "active bg-[#F6F6F6] py-3 px-6 rounded-full text-[#979494] cursor-pointer"
              : "cursor-pointer"
          }
        >
          App
        </li>
        {/* <li
          onClick={() => handleFilterClick("Case")}
          className={
            selectedFilter === "Case"
              ? "active bg-[#F6F6F6] py-3 px-6 rounded-full text-[#979494] cursor-pointer"
              : "cursor-pointer"
          }
        >
          Case Study
        </li> */}
        <li
          onClick={() => handleFilterClick("Dashboards")}
          className={
            selectedFilter === "Dashboards"
              ? "active bg-[#F6F6F6] py-3 px-6 rounded-full text-[#979494] cursor-pointer"
              : "cursor-pointer"
          }
        >
          Dashboards
        </li>
        <li
          onClick={() => handleFilterClick("Landing")}
          className={
            selectedFilter === "Landing"
              ? "active bg-[#F6F6F6] py-3 px-6 rounded-full text-[#979494] cursor-pointer"
              : "cursor-pointer"
          }
        >
          Website
        </li>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-12 mx-auto">
        {visibleData.map((item) => (
          <div key={item.id}>
            <div className="overflow-hidden">
              <img
                className="w-full hover:scale-[1.1] transition-all ease-in-out duration-300 rounded-2xl"
                src={item.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col gap-12">
        {filteredData
          .filter((item) => item.know === "Case")
          .map((item) => (
            <div
              key={item.id}
              className="px-6 rounded-[2rem] flex items-center justify-between"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="w-1/2">
                <img src={item.logo} alt={item.title} />
                <h1 className="text-[33px] font-bold text-white mt-4">
                  {item.title}
                </h1>
                <p className="text-white">Mobile App</p>
                <p className="text-white mt-6">{item.description}</p>
                <button className="border-[#fff] text-white py-3 px-6 rounded-full border-[2px] flex items-center gap-2 mt-6">
                  <img src={arrow} alt="arrow" />
                  View Case Study
                </button>
              </div>
              <div className="flex gap-5 w-[50%]">
                {(item.images || []).map((image, idx) => (
                  <img key={idx} src={image} alt={`img-${idx}`} />
                ))}
              </div>
            </div>
          ))}
      </div>
      {filteredData.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentWork;
