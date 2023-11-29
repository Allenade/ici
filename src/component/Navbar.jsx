import { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
// import Donate from "./Donate";

function Navbar() {
  const [click, setClick] = useState(false);
  const handlClick = () => {
    setClick(!click);
  };
  const content = (
    <div className="absolute left-0 block w-full transition bg-black lg:hidden top-16">
      <ul className="p-20 text-xl text-center ">
        <Link spy={true} smooth={true} to="Who">
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WHO WE ARE
          </li>
        </Link>
        <Link spy={true} smooth={true} to="What">
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WHAT WE DO
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Where">
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WHERE WE WORK
          </li>
        </Link>
        <Link spy={true} smooth={true} to="War">
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            WAR & LAW
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Support">
          <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800">
            SUPPORT US
          </li>
        </Link>
        <Link to="/Donate">
          <div className="">
            <Button />
          </div>
        </Link>
      </ul>
    </div>
  );
  return (
    <nav>
      <div className="flex justify-between flex-1 px-20 text-white bg-black h-8vh lg:py-5">
        <div className="flex items-center ">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="justify-end hidden font-normal lg:flex md:flex lg: items center">
          <div className="flex-10">
            <h1>Red Cross International Community</h1>
            <ul className="flex gap-10 py-1 text-[16px]">
              <a href="#Who">
                <li className="transition cursor-pointer hover:text-fuchsia-600 border-slate-800 hover:bg-slate-800">
                  WHO WE ARE
                </li>
              </a>
              <Link to="/What">
                <li className="transition cursor-pointer border-slate-800 hover:bg-slate-800">
                  WHAT WE DO
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Where">
                <li className="transition cursor-pointer border-slate-800 hover:bg-slate-800">
                  WHERE WE WORK
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/war">
                <li className="transition cursor-pointer border-slate-800 hover:bg-slate-800">
                  WAR & LAW
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Support">
                <li className="transition cursor-pointer border-slate-800 hover:bg-slate-800">
                  SUPPORT
                </li>
              </Link>
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
