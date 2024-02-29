"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import arroRightIcon from "../../../public/images/blog/arrow-right.svg";

const blogPostData = [
  {
    id: "1",
    image: "/images/projects/sofa1.png",
    title:
      "Comfy Sofa",
    category: "Interior",
    categoryLink: "/categories",
    date: "",
    link: "/single-blog/",
  },
  {
    id: "2",
    image: "/images/projects/cafetable.jpg",
    title:
      "Teak Decor",
    category: "Interior",
    categoryLink: "/categories",
    date: "",
    link: "/single-blog/",
  },
  {
    id: "3",
    image: "/images/projects/sofa2.jpg",
    title:
      "Cushions",
    category: "Interior",
    categoryLink: "/categories",
    date: "",
    link: "/single-blog/",
  },
  {
    id: "4",
    image: "/images/projects/table.jpg",
    title:
      "Side Tables",
    category: "Interior",
    categoryLink: "/categories",
    date: "",
    link: "/single-blog/",
  },
];

const BlogPost: React.FC = () => {
  return (
    <>
      <div className="blog-area">
        <div className="container">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h2>
              <span className=" text-black">Recent Collection</span>
            </h2>
            <Link href="/blog">Visit Product Page</Link>
          </div>

          {blogPostData && (
            <div className="blog-inner-slide pb-75">
              <Swiper
                spaceBetween={25}
                loop={false}
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
                }}
                modules={[Autoplay, Pagination]}
                className="blog-slider"
              >
                {blogPostData &&
                  blogPostData.slice(0, 5).map((value, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="blog-card"
                        style={{
                          backgroundImage: `url(${value.image})`,
                        }}
                      >
                        <ul className="meta">
                          <li>
                            <Link href={value.categoryLink}>
                              {value.category}
                            </Link>
                          </li> 
                          <li>{value.date}</li>
                        </ul>

                        <div className="content">
                          <h3>
                            <Link href={value.link}><h1 className=" text-white ">{value.title}</h1></Link>
                          </h3>

                          <Link href={value.link} className="arrow-btn">
                            <Image src={arroRightIcon} alt="arrow-right" width={24} height={24} />
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          )}

          
        </div>
      </div>
    </>
  );
};

export default BlogPost;
