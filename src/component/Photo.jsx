import { useState } from "react";
import data from "./data";
function Photo() {
  const [articleToggle, setArticleToggle] = useState(false);

  return (
    <>
      <div className="w-4/5 mx-auto space-y-4 ">
        <div className="col-span-1 text-white bg-white ">
          {/* Top div content */}
          <img
            src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/document_new/image/sudan_attacks.jpg?itok=3KIMMDgm"
            alt="pic"
            className="object-cover w-full h-[200px]"
          />
          <div className="flex flex-col p-2 text-black md:p-2 md:justify-between md:flex-row h-14">
            <h1
              className="text-base "
              style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
            >
              Sudan: Brutal, targeted attacks on civilians must stop
            </h1>

            <p
              className="text-sm"
              style={{ fontfamily: "Work Sans, sans-serif" }}
            >
              NEWS RELEASE 21-11-2023
            </p>
          </div>
          {/* <p className="flex items-center justify-center h-full"></p> */}
        </div>

        <div className="flex flex-col md:flex-row gap-x-4">
          {/* bottom left div content */}
          <div className="w-full text-white bg-white h-[270px] md:h-[270px]">
            <img
              src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/document_new/image/haiti_robert_mardini_0.jpg?itok=pqCXYr0V"
              alt="pic"
              className="object-cover w-full h-48 "
            />
            <div className="flex flex-col p-2 text-black md:p-2 md:justify-between md:flex-row">
              <h1
                className="text-base "
                style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
              >
                Haiti: ICRC to expand humanitarian efforts in response to rising
                violence
              </h1>
              <p
                className="text-sm"
                style={{ fontfamily: "Work Sans, sans-serif" }}
              >
                NEWS RELEASE 10-10-2023
              </p>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 text-white bg-white h-[270px] md:h-[270px]">
            {/* Bottom right div content */}
            <img
              src="https://www.icrc.org/sites/default/files/styles/special_page_image/public/document_new/image/hospital_0.jpg?itok=49bdSDLg"
              alt="pic"
              className="object-cover w-full h-48 "
            />
            <div className="flex flex-col p-2 text-black md:p-2 md:justify-between md:flex-row h-14">
              <h1
                className="text-base "
                style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
              >
                Armenia/Azerbaijan: Ambulances, medical supplies being sent to
                assist victims of explosion
              </h1>
              <p
                className="text-sm"
                style={{ fontfamily: "Work Sans, sans-serif" }}
              >
                NEWS RELEASE 26-09-2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-4/5 h-full py-16 mx-auto text-white">
        {articleToggle ? (
          <div className="relative flex flex-wrap w-full gap-4">
            <button
              className="absolute w-full text-center -top-7 "
              onClick={() => setArticleToggle(false)}
            >
              X
            </button>
            {data.map((item) => (
              <div key={item.id} className="md:w-[49%]  w-full  bg-[white] ">
                <img className="" src={item.image} />
                <div className="flex flex-col p-2 text-black md:p-2 md:justify-between md:flex-row h-14">
                  <h1
                    className="text-base "
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.description}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <button className="" onClick={() => setArticleToggle(true)}>
            viewmore
          </button>
        )}
      </div>
    </>
  );
}

export default Photo;
