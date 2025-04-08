import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";

export default function About() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div
        className="relative h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/abt_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white Abt_head_text text-center">
            About Smyle Ice-cream
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-around gap-10 px-6 py-10 about_chris">
        <img className="chris  shadow-md" src="/ije.jpeg" alt="Chris" />

        <div className="max-w-xl">
          <p className="ceo text-xl font-bold mb-10">MEET CHRIS</p>
          <div className="chris_div">
            <p className="chris_bio ">
              One scoop is never enough-- Every scoop is a sweet little escape
              from the ordinary—because life’s better with a spoonful of fun.
              One scoop is never enough-- Every scoop is a sweet little escape
              from the ordinary—because life’s better with a spoonful of fun.
              One scoop is never enough-- Every scoop is a sweet little escape
              from the ordinary—because life’s better with a spoonful of fun.
            </p>
          </div>
        </div>
      </div>
      {/* Vimeo Embed */}
      <div className="flex justify-center py-10">
        <div
          className="aspect-video"
          style={{ position: "relative", width: "900px", height: "600px" }}
        >
          <iframe
            src="https://player.vimeo.com/video/1073518633?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            title="intro"
          ></iframe>
        </div>
      </div>

      <div>
        {/* Staff Section */}
        <div className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-20">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 justify-items-center">
            {[
              { name: "Chris", title: "Founder & CEO", img: "/st1.jpeg" },
              { name: "Amaka", title: "Head of Marketing", img: "/st2.jpeg" },
              { name: "Tunde", title: "Production Lead", img: "/st3.jpeg" },
              { name: "Zainab", title: "Customer Service", img: "/st4.jpeg" },
              { name: "John", title: "Logistics Manager", img: "/st5.jpeg" },
            ].map((staff, index) => (
              <div key={index} className="text-center">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="staff_img object-cover rounded-full mx-auto mb-4 border-4 border-pink-200"
                />
                <h3 className="text-xl font-semibold">{staff.name}</h3>
                <p className="text-gray-500">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="Lab_text Abt_head_text text-center">
          Every Scoop is made with love
        </h1>
        <div
          className="relative h-screen bg-center bg-cover bg-no-repeat mt-20"
          style={{ backgroundImage: "url('/l6.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <img src="./lab.jpeg" />
          </div>
        </div>
      </div>
      <div className="flex history justify-around">
        <img className="ice_wh" src="./icecream.jpeg" />
        <div>
        <p className="ceo text-xl font-bold mb-10">History</p>
        <div className="chris_div">
            <p className="">
              FCI Smyle International Limited was born from a bold vision: to
              craft world-class ice cream for Nigeria and beyond. By blending
              the finest locally sourced and imported ingredients, we've built a
              brand that ice cream lovers can’t resist. In 2010, we didn’t just
              enter the scene — we dominated it. Smyle Ice Cream swept the taste
              sampling contests at a major NAFDAC exhibition, beating top
              competitors and capturing hearts.<br/>
               By 2018, our commitment to
              quality earned us official certification from SON/MANCAP. Backed
              by a team of expert food technologists and marketing pros, we’ve
              built a distribution network that spans nearly 200 outlets
              nationwide — and growing. Wherever you are in Nigeria, there’s a
              good chance Smyle is right around the corner. Today, with a
              dedicated crew of 50 passionate employees and headquarters in
              Lagos, we’re on a mission to make Smyle Ice Cream a household name
              and the #1 choice in Nigeria’s dessert scene. We don’t just serve
              ice cream — we serve joy, one scoop at a time.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
