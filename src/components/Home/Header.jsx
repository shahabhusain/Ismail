import { Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
// import { Label } from 'recharts'

const Header = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleClick = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className=" flex items-center justify-between w-[80%] mx-auto py-4 ">
      <div className=" flex items-center bg-white dark:bg-slate-900 py-3 px-6 rounded-full gap-1 w-fit">
        <div className=" h-[32px] w-[32px] rounded-full bg-black dark:bg-white"></div>
        <h1 className=" text-[14px] font-semibold">Ismail Nisar</h1>
      </div>

      <div className=" flex items-center gap-12 bg-white dark:bg-slate-900 py-4 px-12 rounded-full">
        <li className=" cursor-pointer hover:bg-[#efefef] hover:dark:bg-[#383737] py-2 px-3 rounded-full list-none">
          Home
        </li>
        <li className=" cursor-pointer hover:bg-[#efefef] hover:dark:bg-[#383737] py-2 px-3 rounded-full list-none">
          About Us
        </li>
        <li className=" cursor-pointer hover:bg-[#efefef] hover:dark:bg-[#383737] py-2 px-3 rounded-full list-none">
          Packages
        </li>
        <li className=" cursor-pointer hover:bg-[#efefef] hover:dark:bg-[#383737] py-2 px-3 rounded-full list-none">
          Contact Us
        </li>
      </div>

      <button
        className="text-gray-400 bg-white p-2 flex items-center justify-center rounded-full dark:bg-slate-900"
        onClick={handleClick}
        aria-label={`Toggle ${isDarkMode ? "dark" : "light"} mode`}
      >
        <Switch {...label}  />
      </button>
    </div>
  );
};

export default Header;
