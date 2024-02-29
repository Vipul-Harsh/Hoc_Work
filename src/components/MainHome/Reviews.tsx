"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import quoteIcon from "../../../public/images/client/quote.svg";

const clientsFeedbackData = [
  {
    id: "1",
    feedbackText:
      "I recently purchased a dining set from HOC Premium Furniture, and I must say, I'm impressed! The craftsmanship is top-notch, and the teak wood finish adds an elegant touch to my dining room. The customer service was exceptional too. Highly recommended!",
    image: "/images/client/user1.png",
    name: "Jonathon Ronan",
    designation: "CEO of HiBootstrap",
  },
  {
    id: "2",
    feedbackText:
      "I couldn't be happier with my experience at HOC Premium Furniture. I purchased a beautiful teak wood bed frame, and it exceeded my expectations in every way. The attention to detail and quality of construction are evident. It's a stunning bedroom!",
    image: "/images/client/user2.png",
    name: "Angela Carter",
    designation: "CEO of EnvyTheme",
  },
  {
    id: "3",
    feedbackText:
      "HOC Premium Furniture sets the bar high for luxury living. I recently furnished my living room with their teak wood sofa set, and it's nothing short of magnificent. The comfort, style, and durability are unmatched. Thank you, HOC, for elevating my home!",
    image: "/images/client/user3.png",
    name: "Skyler White",
    designation: "CEO of HiboTheme",
  },
  {
    id: "4",
    feedbackText:
      "I'm absolutely thrilled with my purchase from HOC Premium Furniture. The teak wood coffee table I bought is a true work of art. It's not only beautiful but also incredibly sturdy. The delivery was prompt, and the entire buying process was seamless. ",
    image: "/images/client/user4.png",
    name: "Angela Carter",
    designation: "CEO of Abc",
  },
];

const ClientsFeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="client-wrap-area pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span style={{color:"black"}}>REVIEWS</span>
            <h2>Our Clients Talk About Us & Believe In Our Work</h2>
          </div>
        </div>

        {clientsFeedbackData && (
          <div className="container-fluid">
            <Swiper
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="client-swiper"
            >
              {clientsFeedbackData &&
                clientsFeedbackData.map((value, i) => (
                  <SwiperSlide key={i} style={{ paddingBottom: "30px" }}>
                    <div className="client-wrap-card">
                      <div className="icon">
                        <Image
                          src={quoteIcon}
                          alt="quote"
                          width={56}
                          height={56}
                        />
                      </div>

                      <p>{value.feedbackText}</p>

                      <div className="info d-flex align-items-center">
                        <div className="image">
                          <Image
                            src={value.image}
                            alt="image"
                            width={70}
                            height={70}
                          />
                        </div>
                        <div className="title">
                          <h3>{value.name}</h3>
                          <span style={{color:"black"}}>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default ClientsFeedbackSlider;
