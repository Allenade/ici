import { useState } from "react";
import Footer from "./Footer";
import Media from "./Media";
import Navbar from "./Navbar";
import Photo from "./Photo";
import { Helmet } from "react-helmet";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MainHome() {
  const youtubeVideo = {
    video:
      "https://www.youtube.com/embed/wm0TYebjyHQ?enablejsapi=1&origin=https%3A%2F%2Fwww.icrc.org",
  };
  const [Modal, setModal] = useState(false);
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <section className="relative flex flex-col w-full overflow-hidden">
        <div className="relative flex-shrink-0 w-full">
          <img
            src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/home_carousel_slide/image/ilot_surgery_2.jpg?itok=VCxLfO6-"
            alt="pic"
            className="object-cover w-full"
          />
        </div>
        <div className="fixed top-0 left-0 z-50 w-full">
          <Navbar />
        </div>
        <Link to="/Donate">
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-3">
            <div className="flex items-center w-full h-20 mt-20 bg-black bg-opacity-75 md:mt-0justify-center md:w-6/12 md:mt-56 md:h-44">
              <h1 className="font-bold text-center text-white sm:text-2xl md:text-3xl lg:text-3xl drop-shadow-xl">
                Israel and the involved domains: RCIC groups start multi-day
                activity to rejoin prisoners and prisoners with their families,
                convey help
              </h1>
            </div>
          </div>
        </Link>
      </section>

      {/* for both photo and media .................................................................... */}
      <section className="bg-[#000] w-full mx-auto py-16 pt-16">
        <Photo />
        {/* media ............................................................................... */}
        <div>
          <div className="flex items-center justify-center w-full h-full pb-10 text-white">
            Media
          </div>

          <Media />
        </div>
      </section>
      <section className="relative w-full text-white ">
        <div className="relative flex-shrink-0 w-full ">
          <img
            src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/homepage_files/icrc-car-syria_1.jpg?itok=sydI4NeT"
            alt="pic"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="relative mb-10 overflow-hidden text-white bg-no-repeat h-96">
            {/* ... your existing code ... */}
          </section>
          <div
            className="flex items-center justify-center"
            onClick={() => setModal(true)}
          >
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-3 cursor-pointer">
              <FaRegCirclePlay size={70} />
              <p>
                On the ground in over 90 countries - neutral, impartial, and
                independent - we are the International Committee of the Red
                Cross
              </p>
            </div>
          </div>
          {Modal && (
            <div
              className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70"
              onClick={() => setModal(false)} // Close modal on background click
            >
              <div className="w-full max-w-screen-md p-8 bg-white rounded-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={youtubeVideo.video}
                  title="Embedded Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* work..................................................learn about us............................................ */}
      <section className="w-full bg-white " id="Who">
        <div className="flex flex-col w-11/12 p-10 mx-auto space-y-6 md:flex-row md:space-y-0 md:space-x-10">
          <div className="w-full">
            <h1
              style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
              className="text-2xl font-semibold leading-6 text-black hover:text-[#ce171e] cursor-pointer"
            >
              Learn about us
            </h1>
            <div className="h-2 my-2 w-10 bg-[#ce171e]"></div>

            <p
              style={{ fontfamily: "Work Sans, sans-serif" }}
              className="py-2 text-sm "
            >
              We work around the world helping people affected by conflict and
              armed violence, and promoting the rules of war.
            </p>
          </div>
          <div className="w-full">
            <h1
              style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
              className="text-2xl font-semibold leading-6 text-black hover:text-[#ce171e] cursor-pointer"
            >
              Work with us
            </h1>
            <div className="h-2 my-2 w-10 bg-[#ce171e]"></div>

            <p
              style={{ fontfamily: "Work Sans, sans-serif" }}
              className="py-2 text-sm"
            >
              Do you have a strong humanitarian motivation? Learn more about how
              to join the ICRC.
            </p>
          </div>
          <div className="w-full">
            <h1
              style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
              className="text-2xl font-semibold leading-6 text-black hover:text-[#ce171e] cursor-pointer"
            >
              Support us
            </h1>
            <div className="h-2 my-2 w-10 bg-[#ce171e]"></div>
            <p
              style={{ fontfamily: "Work Sans, sans-serif" }}
              className="py-2 text-sm"
            >
              Help families and communities affected by armed conflict in
              conflict regions all over the world.
            </p>
          </div>
        </div>
      </section>
      {/* word- map ............................................................................................. */}
      {/* <section></section> */}

      {/* Earthquake deeping a humanitarina............................................................................................... */}
      <section className="relative flex overflow-hidden bg-red-700 m w-flex ull">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-3">
          <h1 className="font-bold text-center text-white sm:text-2xl md:text-3xl lg:text-3xl drop-shadow-xl">
            Earthquake deepening a humanitarian emergency
          </h1>
          <Link to="/Donate">
            <button className="text-white bg-[#1f1e1d] text-xs md:text-md p-[1px] md:p-2 uppercase mt-6 md:mt-10">
              DONATE TO OUR RESPONSE IN AFGHANISTAN
            </button>
          </Link>
        </div>
        <div className="relative flex-shrink-0 w-full md:w-1/2 ">
          <img
            src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/donation_form/image/afghanistan_earthquake.jpg?itok=D7YWKXRT"
            alt="pic"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="flex-shrink-0 p-5 h-80 bg-red-700 w-full md:w-[50%] transform skew-x-[-10deg] -translate-x-1/2 md:-translate-x-[5%]"></div>
      </section>
      {/* .......................................................................................   ...................................................... */}

      {/* stack boxes.............................................................................................................................................. */}
      <section className="p-6  md:p-8 bg-[#D3D3D3]">
        <div className="flex flex-col md:flex-row">
          {/* Left side (image) */}
          <div className="w-full md:w-1/2">
            <img
              src="https://www.icrc.org/sites/default/files/styles/home_custom_block/public/home_custom_block/image/icrc_car_in_the-field.jpeg?itok=0JxxEvq0"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side (text) */}
          <div className="w-full p-8 md:w-1/2 bg-[#FFFFFF]">
            <h1 className="mb-4 text-xs font-bold md:text-2xl lg:text-4xl">
              Leave a legacy for life beyond armed conflict
            </h1>
            <p className="text-sm md:text-base">
              Remembering the ICRC in your will is really easy to do and is one
              of the most wonderful ways you can help people caught up in armed
              conflict. You can give back a future to people who can see no hope
              of one right now.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:flex-row ">
          <div className="w-full p-8 md:w-1/2  bg-[#FFFFFF]">
            <h1 className="text-xl font-bold ">
              Blog - Humanitarian Law & Policy
            </h1>
            <p className="mt-4 ">
              A unique space for timely analysis, debate and commentary on
              international humanitarian law issues, the policies that shape
              humanitarian action, and the interplay between these areas.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://www.icrc.org/sites/default/files/styles/home_custom_block/public/home_custom_block/image/internal_displacement.jpg?itok=_5dU-yQFhttps://www.icrc.org/sites/default/files/styles/home_custom_block/public/home_custom_block/image/icrc_car_in_the-field.jpeg?itok=0JxxEvq0https://www.icrc.org/sites/default/files/styles/home_custom_block/public/home_custom_block/image/screen1.jpg?itok=HFbTuC-8https://www.icrc.org/sites/default/files/styles/special_page_image/public/donation_form/image/afghanistan_earthquake.jpg?itok=D7YWKXRT"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* .................................................................................................. */}

        <div className="flex flex-col mt-10 md:flex-row ">
          <div className="w-full md:w-1/2 ">
            <img
              src="https://www.icrc.org/sites/default/files/styles/home_custom_block/public/home_custom_block/image/icrc_car_in_the-field.jpeg?itok=0JxxEvq0https://www.icrc.org/sites/default/files/styles/home_custom_block/public/home_custom_block/image/screen1.jpg?itok=HFbTuC-8https://www.icrc.org/sites/default/files/styles/special_page_image/public/donation_form/image/afghanistan_earthquake.jpg?itok=D7YWKXRT"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full p-8 md:w-1/2  bg-[#FFFFFF]">
            <h1 className="text-xl font-bold ">From our eShop</h1>
            <p className="mt-4 ">
              At the end of 2016 there were more than 40 million internally
              displaced people worldwide. This brochure explores the issue, and
              details how the ICRC works to help people avoid displacement and
              to address the specific needs of those displaced and their host
              communities.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default MainHome;

//  <section className="relative mb-10 overflow-hidden text-white bg-no-repeat h-96">
//    <div
//      className="absolute flex items-center justify-center w-4/5 h-full bottom-20 right-96 // "
//      style={{
//        backgroundImage: `url('https://www.icrc.org/sites/default/files/styles/special_page_image/public/donation_form/image/afghanistan_earthquake.jpg?itok=D7YWKXRT')`,
//      }}
//    ></div>
//    <div className="w-full h-full ">
//      <h1 className="text-white">hello word</h1>
//    </div>
//    <div className="bg-red-600 absolute  left-[800px] skew-x-[-20deg] w-1/2 inset-0 h-[304px]"></div>
//  </section>;

//  <div className="flex justify-center" onClick={() => setModal(true)}>
//    <p className="cursor-pointer">▶ Play</p>
//  </div>;
//  {
//    Modal && (
//      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
//        <div
//          className="w-full max-w-screen-md p-8 bg-white rounded-lg"
//          onClick={() => setModal(false)}
//        >
//          <iframe
//            width="100%"
//            height="100%"
//            src={youtubeVideo.video}
//            title="Embedded Video"
//            frameBorder="0"
//            allowFullScreen
//          ></iframe>
//        </div>
//      </div>
//    );
//  }
