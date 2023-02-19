import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slides() {
  return (
    <body>
    <div id = "collection">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require("./imgs/1.png")} alt="NFT #1"  /></SwiperSlide>
        <SwiperSlide><img src={require("./imgs/2.png")} alt="NFT #2" /></SwiperSlide>
        <SwiperSlide><img src={require("./imgs/3.png")} alt="NFT #3"/></SwiperSlide>
        <SwiperSlide><img src={require("./imgs/4.png")} alt="NFT #4" /></SwiperSlide>
        <SwiperSlide><img src={require("./imgs/5.png")} alt="NFT #5"/></SwiperSlide>
        <SwiperSlide><img src={require("./imgs/6.png")} alt="NFT #6" /></SwiperSlide>

      </Swiper>
    </div>
    </body>
  );
}