import React, { useEffect, useRef } from "react";
import InfiniteCarousel from "./component/InfiniteCarousel";

export default function Review() {
  const calendlyRef = useRef(null);

  const handleScroll = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="">
      <div className="review_land flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="testimonila_header rev_head text-white">
            Every successful Agent, we worked with started just like <br />
            <span className="salescall">YOU</span>
          </p>
          <div className="relative pt-[45.3%]">
            <iframe
              src="https://player.vimeo.com/video/1070872120?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              className="absolute top-0 left-0 w-full h-full"
              title="Richard"
              style={{
                border: "none", // Remove the iframe border
                maxWidth: "100%", // Ensure responsiveness
                height: "100%", // Make sure the video takes full height
              }}
            ></iframe>
          </div>
          <button onClick={handleScroll} className="next_btn mt-4">
            Book a Call
          </button>{" "}
        </div>
      </div>
      <div className="rest_review">
        <center>
          <button className="bord">Who is this for</button>
        </center>
        <center>
          <div className="broker_ext mt-6 ">
            <p className="text-center">
              Real estate broker & Brokerage owner, stuck between $100K-$200K in
              revenue . Looking to close at least 3 Deals monthly
            </p>
          </div>
        </center>
        <div
          ref={calendlyRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/calebomojuwon/quick-call"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        <center>
          <p className="retainer text-center">
            No Monthly <span className="importance">PAYMENT</span> - We install this System
            <br /> Once{" "}
          </p>
          <button onClick={handleScroll} className="next_btn mt-10 mb-14">
            Book a Call
          </button>{" "}

        </center>
        <InfiniteCarousel />
        <div className="caution flex justify-center gap-20">
          <img className="book" src="./right.png" />
          <div className="cautpn">
            <p className="secre mb-6">Right to Reservation</p>
            <p className="rese">
              We take on 5 new clients every 3 months so we can you our full attention and do amazing work.- We{" "}
              <span className="chase_bold">CHASE</span> perfection and
              excellence.
            </p>
            <button onClick={handleScroll} className="next_btn mt-10 mb-14">
            Book a Call
          </button>{" "}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 process">
          <div>
            <div className="flex flex-col items-center gap-2">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FA5252/ophthalmology.png"
                alt="ophthalmology"
              />
              <p className="steps_head text-center">Discovery</p>
            </div>
            <p className="card_txt text-center">
              You are currently learning how we help realtors. We want you to
              binge-watch our content and grasp our process to see if it is the
              right fit for you.
            </p>
          </div>

          <div>
            <div className="flex flex-col items-center gap-2">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FA5252/phone-disconnected.png"
                alt="phone-disconnected"
              />
              <p className="steps_head text-center">Schedule Call</p>
            </div>
            <p className="card_txt text-center">
              We have a 30-45 minute call where we ask questions to understand
              your goals and see if we are a good fit
            </p>
          </div>

          <div>
            <div className="flex flex-col items-center gap-2">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FA5252/groups.png"
                alt="groups"
              />
              <p className="steps_head text-center">Onboarding</p>
            </div>
            <p className="card_txt text-center">
              You meet the team, and we walk you through the different phases we
              would take to help you achieve your goals.
            </p>
          </div>
        </div>

        <div className="w-[70%] h-[400px] bg-[#0C0C0C] flex items-center justify-center mx-auto deal">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-[40px] text-center font-semibold">
              You never have to worry where your next deal is coming from?
            </h1>
            <p className="time">
              Time is money . Let us help you spend it on closing deals!
            </p>
            <button onClick={handleScroll} className="next_btn mt-10 mb-14">
            Book a Call
          </button>{" "}          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'

export default function Book() {
  return (
    <div>
      
    </div>
  )
}
