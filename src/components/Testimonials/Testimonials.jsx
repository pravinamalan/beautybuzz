import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero from "../../assets/testimonialHero.png";
import "./testimonial.css";
import { TestimonialsData } from "../../data/testimonials";
const Testimonials = () => {
  return (
    <div className="container testimonials">
      <div className="t-wrapper">
        <div className="text-container">
          <span>Top Rated</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, reiciendis?
          </span>
        </div>

        <img src={Hero} alt="testimonialhero" className="t-hero-img" />
        <div className="text-container">
          <span>100k</span>
          <span>Happy Customer with us</span>
        </div>
      </div>
      <div className="reviews mt-lg-4">Reviews</div>
      <div className="t-carousal mt-lg-2">
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
        //   loop={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="tst-caousal"
        >
          {TestimonialsData.map((testmonial, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-slider">
                <img src={testmonial.image} alt="testimonial-slider" />
                <span>{testmonial.comment}</span>
                <hr />
                <span>{testmonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
