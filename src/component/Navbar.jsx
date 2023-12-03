import { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
// import Donate from "./Donate";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Logo from "../image/RED.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handlClick = () => {
    setClick(!click);
  };
  const content = (
    <div className="absolute left-0 block w-full transition bg-black lg:hidden top-[71px]">
      <ul className="p-20 text-xl text-center ">
        <ScrollLink to="Who" spy={true} smooth={true}>
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WHO WE ARE
          </li>
        </ScrollLink>
        <ScrollLink to="What" spy={true} smooth={true}>
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WHAT WE DO
          </li>
        </ScrollLink>
        <ScrollLink to="Where" spy={true} smooth={true}>
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WHERE WE WORK
          </li>
        </ScrollLink>
        <ScrollLink to="War" spy={true} smooth={true}>
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WAR & LAW
          </li>
        </ScrollLink>
        {/* <a href="#Support">
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            SUPPORT US
          </li>
        </a> */}
        {/* <Link to="/Donate">
          <div className="">
            <Button />
          </div>
        </Link> */}
      </ul>
    </div>
  );
  return (
    <nav>
      <div className="flex justify-between flex-1 md:px-20 px-[14px]  py-2 text-white bg-black h-10vh lg:py-5">
        <div className="flex md:items-center">
          <span className="">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain w-16 h-13 md:h-20 md:w-40"
            />
          </span>
          <Link to="/Donate">
            <div className="flex items-center justify-center mt-2 ml-14">
              <Button />
            </div>
          </Link>
        </div>
        <div className="justify-end hidden ml-20 font-normal lg:flex md:flex lg: items center">
          <div className=" flex-10">
            <h1>Red Cross International Community</h1>
            <ul className="flex  py-1 md:gap-10 lg:text-[16px] md:text-[3px]">
              <ScrollLink to="Who" spy={true} smooth={true}>
                <li className="transition cursor-pointer md:w-full hover:text-fuchsia-600 border-slate-800 hover:bg-slate-800">
                  <h1 className="">WHO WE ARE</h1>
                </li>
              </ScrollLink>
              <ScrollLink to="What" spy={true} smooth={true}>
                <li className="transition cursor-pointer hover:text-fuchsia-600 border-slate-800 hover:bg-slate-800">
                  WHAT WE DO
                </li>
              </ScrollLink>
              <ScrollLink to="Where" spy={true} smooth={true}>
                <li className="transition cursor-pointer hover:text-fuchsia-600 border-slate-800 hover:bg-slate-800">
                  WHERE WE WORK
                </li>
              </ScrollLink>
              {/* <a href="#Where">
                <li className="transition cursor-pointer border-slate-800 hover:bg-slate-800"></li>
              </a> */}
              <ScrollLink to="War" spy={true} smooth={true}>
                <li className="transition cursor-pointer hover:text-fuchsia-600 border-slate-800 hover:bg-slate-800">
                  WAR & LAW
                </li>
              </ScrollLink>

              {/* <Link spy={true} smooth={true} to="Support">
                <li className="transition cursor-pointer border-slate-800 hover:bg-slate-800">
                  SUPPORT
                </li>
              </Link> */}
              <Link to="/Donate">
                <div className="ml-40">
                  <Button />
                </div>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block transition sm:hidden" onClick={handlClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
