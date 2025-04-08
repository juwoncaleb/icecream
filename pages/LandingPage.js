import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./component/footer";
import Header from "./component/header";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 100); // triggers fade-in again
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Header/>
      {/* HERO PAGE */}
      <div className="flex h-screen">
        {/* Left Side with Header */}
        <div className="w-2/5 bg-white hero_div_text flex items-center justify-center p-8">
          <div>
            <h1 className="hero_head_text font-bold leading-tight">
              WHERE YOUR SWEET DREAMS COME TRUE{" "}
            </h1>
            <p className="hero_sub_tex">
              Where Happiness Lingers in Every Scoop<br></br> of Our Ice Cream"{" "}
            </p>
            <button className="scoop_btn">Get your Scoop</button>
          </div>
        </div>

        {/* Right Side with Image Crossfade */}
        <div className="w-3/5 relative overflow-hidden flex items-center justify-center">
          {/* Previous image fades out */}
          {prevIndex !== null && (
            <Image
              src={images[prevIndex]}
              alt="Previous"
              width={1000}
              height={1000}
              className="absolute transition-opacity duration-1000 opacity-0"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          )}

          {/* Current image fades in */}
          <Image
            src={images[currentIndex]}
            alt="Current"
            width={1000}
            height={1000}
            className={`absolute transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* CHOOSE YOUR FLAVOR */}

      <div className="flavor_div">
        <div className="flex justify-between ">
          <div className="flex">
            <p className="popular">POPULAR FLAVORS</p>
            <img className="stic" src="./stick.png" />
          </div>
          <button className="btn_pink">See All</button>
        </div>
        <div className="grid grid-cols-4 gap-4 flavor_mix">
          <div className="ice_cube transition-transform duration-300 transform hover:scale-105">
            <img className="ice" src="./p1.jpeg" />
          </div>
          <div className="ice_cube transition-transform duration-300 transform hover:scale-105">
            <img className="ice" src="./p2.jpeg" />
          </div>
          <div className="ice_cube transition-transform duration-300 transform hover:scale-105">
            <img className="ice" src="./p4.jpeg" />
          </div>
          <div className="ice_cube transition-transform duration-300 transform hover:scale-105">
            <img className="ice" src="./p4.jpeg" />
          </div>
        </div>

        <div className="reviews flex justify-between">
          <div className="flav_text">
            <p className="raw_flavor">Type of Raw flavor</p>
          </div>
          <div className="fl_txt">
            <div className="text_div">
              <p>
                {" "}
                One scoop is never enough-- Every scoop is a sweet little escape
                from the ordinary—because life’s better with a spoonful of fun
              </p>
            </div>
          </div>{" "}
          <div className="fl_txt_2  justify-center">
            <div className="flex">
              <img className=" rev_img" src="./m1.webp" />
              <img className=" rev_img rev_img2" src="./m1.webp" />
              <img className=" rev_img rev_img2" src="./m1.webp" />
            </div>

            <div>
              <p className="rev_text">1800 REVIEWS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around peller_tab">
        <img className="peller_img" src="./peller.jpg" />
        <div>
          <p className="peller_text">Peller's Favourite</p>
          <div className="eler_dv">
            <p className="peller_tet">
              FCI Smyle International Limited was established with a clear
              mission—to provide high-quality ice cream products for both the
              Nigerian and international markets. To achieve this, we combine
              the finest imported and locally sourced ice cream mixes, creating
              a brand that has become a favorite among ice cream lovers in
              Nigeria. In January 2010, Smyle Ice Cream emerged as the top
              choice in all taste sampling contests conducted alongside major
              competitors. This
            </p>
            <button className="scoop_btn">Get your Scoop</button>
          </div>
        </div>
      </div>
      <div className="packages">
        <div className="flex justify-between ">
          <div className="flex">
            <p className="popular">Different Sizes </p>
            <img className="stic" src="./pac.png" />
          </div>
          <button className="btn_pink">See All</button>
        </div>
        <div className="flex mt-20 justify-center">
          <div>
            <img className="package" src="./p1.jpeg"/>
          </div>
          <div>
            <img className="package" src="./hero5.jpg"/>
          </div>
          <div>
            <img className="package" src="./p1.jpeg"/>
          </div>
          <div>
            <img className="package" src="./hero5.jpg"/>
          </div>
         

        </div>
      </div>
      <div>
        <p className="patnership">
          WE SELL IN WHOLESALES - OPEN TO PARTNERSHIP
        </p>
        <div className="flex justify-center mt-14 mb-20 gap-10">
          <img className="whl" src="./whl.jpeg" />
          <div className="">
            <div className="pat_text">
              <p className="peller_tet">
                FCI Smyle International Limited was established with a clear
                mission—to provide high-quality ice cream products for both the
                Nigerian and international markets. To achieve this, we combine
                the finest imported and locally sourced ice cream mixes,
                creating a brand that has become a favorite among ice cream
                lovers in Nigeria. creating a brand that has become a favorite
                among ice cream lovers in Nigeria.
              </p>
              <button className="scoop_btn">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
