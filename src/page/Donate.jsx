import { useState } from "react";
import { Link } from "react-router-dom";
import Progress from "../component/progress";
import Form from "../component/Form";
// import New from "./New";
// import WAValidator, {
//   isValidAddress,
// } from "multicoin-address-validator/dist/wallet-address-validator";

export default function Donate() {
  const [tab, setTab] = useState("single");

  const [network, setNetwork] = useState("");

  const changeNetwork = (e) => {
    setNetwork(e.target.value);
  };
  // const changeAddress = (e) => {
  //   let address = e.target.value;
  //   let isValiAddress = WAValidator.validate(address, network);
  //   setAddress(isValiAddress);
  //   setInvalidAddress(!isValidAddress);
  // };
  // const changeNetwork = (e) => {
  //   let network = e.target.value;
  //   let isValiAddress = WAValidator.validate(address, network);
  //   setInvalidAddress(!isValidAddress);

  //   setNetwork(network);
  // };
  return (
    <>
      <div className="relative">
        {/* Top Section with Background Image */}
        <div className="relative h-64 bg-center bg-cover sm:h-80 md:h-96">
          {/* Your content for the top section goes here */}
          <img
            src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/donation_form/image/thank_you_icrc_ilot_0.jpg?itok=0syc4G7M"
            alt="pic"
            className="object-cover w-full h-full"
          />

          {/* Overlay Div */}
          <div className="absolute left-0 z-10 w-full p-8 top-1/2">
            <Link to="/">
              <button className="text-white bg-[#1f1e1d] text-xs md:text-md p-[1px] md:p-2 uppercase ">
                Home
              </button>
            </Link>

            <div className="flex flex-col gap-3 md:pt-3 md:flex-row">
              {/* Left side (image) */}

              <div className="w-full pb-4 text-white bg-red-600 md:h-fit md:pb-4 md:w-1/2">
                <div className="pt-7">
                  <Progress />
                </div>
                <div className="flex items-center justify-center pt-3 ">
                  <h1>Give to the ICRC</h1>
                </div>
                <div className="flex items-center justify-center gap-10 pt-8 text-black">
                  <button
                    className={`uppercase ${
                      tab === "single"
                        ? "bg-white text-black"
                        : "bg-[#c45f6d] text-[#f4f4f2]"
                    } text-xs md:text-md p-2 md:py-2.5 md:pl-10 md:pr-10`}
                    onClick={() => setTab("single")}
                  >
                    Single
                  </button>

                  <button
                    className={`uppercase ${
                      tab === "monthly"
                        ? "bg-white text-black"
                        : "bg-[#c45f6d] text-[#f4f4f2]"
                    } text-xs md:text-md p-2 md:py-2.5 md:pl-10 md:pr-10`}
                    onClick={() => setTab("monthly")}
                  >
                    Monthly
                  </button>
                </div>

                {/* div for monthly and singlr */}
                <div className="flex items-center justify-center">
                  {tab === "single" && (
                    <div className="">
                      {/* Content for Single */}
                      <div className="flex flex-col mt-4 md:flex-row md:gap-x-10 gap-y-2 ">
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">$90</span>
                        </div>
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">$140</span>
                        </div>
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">$200</span>
                        </div>
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">
                            $Other
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Form network={network} changeNetwork={changeNetwork} />
                      </div>

                      {/* <New invalidAddress={invalidAddress} address={address} /> */}
                    </div>
                  )}
                  {tab === "monthly" && (
                    <div className="">
                      {/* <div className="flex items-center justify-center p-4 border border-black border-opacity-25 rounded-md md:w-1/2">
                        <h2 className="font-semibold text-white ">
                          A regular donation enables us to rapidly swing into
                          action in crisis situations and deliver aid where it
                          is needed most. Thank you!
                        </h2>
                      </div> */}
                      <div className="flex flex-col mt-4 md:flex-row md:gap-x-10 gap-y-2 ">
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">$15 </span>
                        </div>
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">$30</span>
                        </div>
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">$60</span>
                        </div>
                        <div className="w-full p-2 text-center text-white transition bg-[#c45f6d] rounded-md cursor-pointer md:w-20 hover:bg-white hover:text-black">
                          <span className="text-base font-semibold">
                            $Other
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Form network={network} changeNetwork={changeNetwork} />
                      </div>
                      {/* <New invalidAddress={invalidAddress} address={address} /> */}
                    </div>
                  )}
                </div>
              </div>

              {/* Right side (text) */}
              <div className="hidden w-full md:block md:w-1/2 ">
                <div className="w-64 p-2 text-white bg-red-600 h-fit">
                  <h1 className="text-4xl font-bold ">A gift of hope </h1>
                </div>
                <div className="mt-14">
                  <h3 className="p-4 text-sm font-bold text-white md:text-base">
                    We live in a war-torn world, where millions of people have
                    their lives destroyed by conflict.
                  </h3>
                  <h3 className="p-4 text-sm font-bold text-white md:text-base">
                    Amid the chaos and despair, the International Committee of
                    the Red Cross is a unique sign of hope to those whose lives
                    have been changed forever.
                  </h3>
                  <h3 className="p-4 text-sm font-bold text-white md:text-base">
                    The ICRC strives to bring humanity to the most challenging
                    and dangerous situations. We do so in close collaboration
                    with and in support of our partners in the Red Cross and Red
                    Crescent Movement.
                  </h3>
                  <h3 className="p-4 text-2xl font-bold text-white md:text-base">
                    But as the pressure on our resources continues to grow, we
                    need more funds to help the increasing number of men, women
                    and children around the world who find themselves caught in
                    the crossfire of conflict and other crises.
                  </h3>
                  <h3 className="p-4 text-sm font-bold text-white md:text-base">
                    YOUR DONATION GOES WHERE IT IS NEEDED MOST. 93.5% of your
                    donation will go to fund our operations for people in need.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the Page */}
        <section className="relative p-8 text-white h-[660px] bg-black md:h-[610px]">
          <div className="absolute mb-4 text-2xl font-bold transform -translate-y-1/2">
            Remaining Content
          </div>
          <p>Your additional content...</p>
        </section>
      </div>
    </>
  );
}
{
  /* <div className="absolute mb-4 text-2xl font-bold text-white transform -translate-y-1/2 top-1/2">
  Remaining Content
</div>; */
}
