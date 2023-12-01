import { useState } from "react";
import { Link } from "react-router-dom";
import Progress from "./progress";
import Form from "./Form";
// import New from "./New";
// import WAValidator, {
//   isValidAddress,
// } from "multicoin-address-validator/dist/wallet-address-validator";

export default function Donate() {
  const [tab, setTab] = useState("single");
  // const [address, setAddress] = useState("lets try something");
  // const [network, setNetwork] = useState("eth");
  // const [invalidAddress, setInvalidAddress] = useState(false);
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

              <div className="w-full h-screen text-white bg-red-600 md:w-1/2">
                <Progress />
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
                    <div>
                      {/* Content for Single */}
                      <p>jihfifiwi</p>
                      <Form network={network} changeNetwork={changeNetwork} />

                      {/* <New invalidAddress={invalidAddress} address={address} /> */}
                    </div>
                  )}
                  {tab === "monthly" && (
                    <div>
                      <h1>This is the content for monthly</h1>
                    </div>
                  )}
                </div>
              </div>

              {/* Right side (text) */}
              <div className="w-full p-8  md:w-1/2 bg-[#FFFFFF]">
                <h1 className="mb-4 text-xs font-bold md:text-2xl lg:text-4xl">
                  Leave a legacy for life beyond armed conflict
                </h1>
                <p className="text-sm md:text-base">
                  Remembering the ICRC in your will is really easy to do and is
                  one of the most wonderful ways you can help people caught up
                  in armed conflict. You can give back a future to people who
                  can see no hope of one right now.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the Page */}
        <section className="relative h-screen p-8 text-white bg-black">
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
