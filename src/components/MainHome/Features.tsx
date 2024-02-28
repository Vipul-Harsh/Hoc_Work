"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogPostData = [
  {
    id: "1",
    image: "/images/blog/blog4.jpg",
    title: "We Select the Finest Teak",
    date: "Beauty",
    link: "/single-blog/",
  },
  {
    id: "2",
    image: "/images/blog/blog5.jpg",
    title: "Precision in cutting",
    date: "Design",
    link: "/single-blog/",
  },
  {
    id: "3",
    image: "/images/blog/blog6.jpg",
    title: "Drying and Seasoning Mastery",
    date: "Perfection",
    link: "/single-blog/",
  },
  {
    id: "4",
    image: "/images/blog/blog7.jpg",
    title: "Lifetime Durability",
    date: "Precision",
    link: "/single-blog/",
  },
];

const BlogPost: React.FC = () => {
  return (
    <>
      <div className="blog-area pb-75">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-between align-items-end">
            <div className="title">
              <span style={{color:"#ffd54d"}}>FEATURES</span>
              <h2>These features help us to gain 100% satisfaction</h2>
            </div>
            <div className="link-btn">
              <Link href="/blog" style={{color:"#ffd54d"}}>Lets See How</Link>
            </div>
          </div>

          {blogPostData && (
            <div className="row justify-content-center">
              {blogPostData &&
                blogPostData.slice(0, 4).map((value, i) => (
                  <div className="col-lg-6 col-md-12" key={i}>
                    <div className="blog-item">
                      <div className="image">
                        <Link href={value.link}>
                          <Image
                            src={value.image}
                            alt="image"
                            width={1230}
                            height={560}
                          />
                        </Link>
                      </div>
                      <div className="content wrap-color">
                        <span className="date">{value.date}</span>
                        <h3>
                          <a href={value.link}>{value.title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
