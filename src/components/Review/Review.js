import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  async function getReviews() {
    try {
      const response = await axios.get(
        "https://still-shore-53183.herokuapp.com/all-review"
      );
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getReviews();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-24">
      <h2 className="lg:text-4xl text-2xl font-bold text-center mb-5">
        Our Customer Reviews
      </h2>
      <hr className="lg:w-1/3 w-2/3 mx-auto" />
      <div className="mb-5"></div>
      <Slider {...settings}>
        {reviews.map((review, key) => (
          <div key={key} className="w-full p-4 md:w-1/2">
            <div className="h-full rounded bg-gray-100 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="mb-4 block h-5 w-5 text-gray-400"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <small className="font-light text-xs">{review.date}</small>
              <p className="mb-6 leading-relaxed">{review.review}</p>
              <div className="flex items-center justify-between">
                <a className="inline-flex items-center" href="/">
                  <img
                    alt="testimonial"
                    src={review.photo}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-2">
                    <span className="title-font font-medium text-gray-900">
                      {review.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {review.designation}
                    </span>
                  </span>
                </a>
                <span>{review.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
