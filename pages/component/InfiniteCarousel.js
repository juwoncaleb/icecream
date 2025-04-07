import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: false, // No dots under the carousel
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0, // Make autoplay continuous
    cssEase: "linear",
    arrows: false, // Disable left and right arrows
    pauseOnHover: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ] // Disable pause on hover
  };

  return (
    <div className="slider-container mt-" style={{ margin: "40px " }}>
      <Slider {...settings}>
        <div
                className="divimg"

          style={{
            width: "400px",
            height: "500px",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          <img className="pastclient" src="./con.avif" />
          <p className="clienthead">You Next</p>
          <p>Book a time to talk</p>{" "}        </div>
        <div
                className="divimg"

          style={{
            width: "400px",
            height: "500px",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          <img className="pastclient" src="./ty.avif" />
          <p className="clienthead">Tyler Burrow</p>
          <p>Website development & Marketing</p>{" "}
        </div>

        <div
        className="divimg"
          style={{

            width: "400px",
            height: "500px",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          <img className="pastclient ama" src="./ama.avif" />
          <p className="clienthead">Amarlux realty</p>
          <p>Website development</p>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
