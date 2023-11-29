import { useState } from "react";
import data from "./data";
function Photo() {
  const [articleToggle, setArticleToggle] = useState(false);

  return (
    <>
      <div className="w-4/5 mx-auto space-y-4 ">
        <div className="h-32 col-span-1 text-center text-white bg-blue-500 md:col-span-3">
          {/* Top div content */}
          <p className="flex items-center justify-center h-full">Top Content</p>
        </div>
        <div className="flex w-full gap-x-4">
          <div className="w-full h-32 col-span-1 text-center text-white bg-green-500 md:col-span-1">
            {/* Bottom left div content */}
            <p className="flex items-center justify-center h-full">
              Bottom Left Content
            </p>
          </div>
          <div className="w-full h-32 col-span-1 text-center text-white bg-yellow-500 md:col-span-1">
            {/* Bottom right div content */}
            <p className="flex items-center justify-center h-full">
              Bottom right Content
            </p>
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
                <div className="h-14 ">
                  <p className="text-xs text-black">{item.description}</p>
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
