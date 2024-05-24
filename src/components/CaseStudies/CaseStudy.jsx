import React from "react";
import img from "../../assets/img.svg";
import img1 from "../../assets/img1.svg";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import arrow from "../../assets/arrow.png";
import Modal from "@mui/material/Modal";
import Lan from "../../assets/Lan.png";

const caseStudies = [
  {
    id: 22,
    logo: logo,
    title: "Development Central",
    description: "development central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    images: [img1, img],
    bgColor: "#0F8AAC",
     know:"Case"
  },
  {
    id: 23,
    logo: logo1,
    title: "Cheapskate",
    description: "development central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    images: [img1, img],
    bgColor: "#76BCFF",
    know:"Case"
  },
  {
    id: 24,
    logo: logo,
    title: "Development Central",
    description: "development central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    images: [img1, img],
    bgColor: "#0F8AAC",
    know:"Case"
  },
  {
    id: 25,
    logo: logo1,
    title: "Cheapskate",
    description: "development central platform offers a seamless booking system, empowering users to schedule educational sessions for their children while also providing opportunities for personal development with professional coaches.",
    images: [img1, img],
    bgColor: "#76BCFF",
    know:"Case"
  }
];

const CaseStudy = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-[80%] mx-auto pb-12">
      {caseStudies.map((study, index) => (
        <div
          key={index}
          className="px-6 rounded-[2rem] flex items-center justify-between mt-24"
          style={{ backgroundColor: study.bgColor }}
        >
          <div className="w-1/2">
            <img src={study.logo} alt={study.title} />
            <h1 className="text-[33px] font-bold text-white mt-4">{study.title}</h1>
            <p className="text-white">Mobile App</p>
            <p className="text-white mt-6">{study.description}</p>
            <button
              onClick={handleOpen}
              className="border-[#fff] text-white py-3 px-6 rounded-full border-[2px] flex items-center gap-2 mt-6"
            >
              <img src={arrow} alt="arrow" />
              view case study
            </button>
          </div>
          <div className="flex gap-5 w-[50%]">
            {study.images.map((image, idx) => (
              <img key={idx} src={image} alt={`img-${idx}`} />
            ))}
          </div>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[80%] mx-auto mt-16" style={{ overflowY: 'auto', height: '500px' }}>
          <img src={Lan} alt="Lan" />
        </div>
      </Modal>
    </div>
  );
};

export default CaseStudy;
