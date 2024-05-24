import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import main from "../../assets/main.png";
import ReactStars from "react-stars";
const Clients = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className=" mt-32 overflow-x-hidden pb-24">
      <div
        className="md:mx-24 mx-4"
      >
        <h1 className=" text-[40px] text-center  font-bold pt-12">
          What Our Clients Say
        </h1>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img
                className=" 2xl:w-[1455px] md:w-[333px] w-[100%]"
                src={main}
                alt=""
              />
              <div className="">
                <div className=" bg-white dark:bg-[#3c3b3b] 2xl:py-12 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[26px] text-[16px] font-semibold text-[#828386]">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[20px] md:text-[20px] text-[12px] font-bold mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#b3b3b5] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img
                className=" 2xl:w-[1455px] md:w-[333px] w-[100%]"
                src={main}
                alt=""
              />
              <div className="">
                <div className=" bg-white dark:bg-[#3c3b3b] 2xl:py-12 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[26px] text-[16px] font-semibold text-[#828386]">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[20px] md:text-[20px] text-[12px] font-bold mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#b3b3b5] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img
                className=" 2xl:w-[1455px] md:w-[333px] w-[100%]"
                src={main}
                alt=""
              />
              <div className="">
                <div className=" bg-white dark:bg-[#3c3b3b] 2xl:py-12 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[26px] text-[16px] font-semibold text-[#828386]">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[20px] md:text-[20px] text-[12px] font-bold mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#b3b3b5] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img
                className=" 2xl:w-[1455px] md:w-[333px] w-[100%]"
                src={main}
                alt=""
              />
              <div className="">
                <div className=" bg-white dark:bg-[#3c3b3b] 2xl:py-12 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[26px] text-[16px] font-semibold text-[#828386]">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[20px] md:text-[20px] text-[12px] font-bold mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#b3b3b5] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
