import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { SliderProducts } from "../../data/products";

const SliderComponent = () => {
  return (
    <div className="container slider-container">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        breakpoints={{
          1440:{
            slidesPerView:3

          },
          856:{
            slidesPerView:2
          },
          640:{
            slidesPerView:2
          },0:{
            slidesPerView:1
          },
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Keyboard, Pagination,]}
        className="mySwiper"
        // loopFillGroupWithBlank={true}
        // navigation={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div className="shop-now">shop now</div>
            </div>
            <img src={slide.img} alt="product" className="image-product" />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
