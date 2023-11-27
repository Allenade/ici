import { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

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
      </ul>
    </div>
  );
  return (
    <nav>
      <div className="flex justify-between flex-1 px-20 py-4 text-white bg-black h-10vh lg:py-5 ">
        <div className="flex items-center ">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="justify-end hidden font-normal lg:flex md:flex lg: items center">
          <div className="flex-10">
            <h1>INTERNATIONAL COMMITTEE OF THE RED CROSS</h1>
            <ul className="flex gap-10  text-[16px]">
              <Link spy={true} smooth={true} to="Who">
                <li className="transition border-b-2 cursor-pointer border-slate-800 hover:bg-slate-800">
                  WHO WE ARE
                </li>
              </Link>
              <Link spy={true} smooth={true} to="What">
                <li className="transition border-b-2 cursor-pointer border-slate-800 hover:bg-slate-800">
                  WHAT WE DO
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Where">
                <li className="transition border-b-2 cursor-pointer border-slate-800 hover:bg-slate-800">
                  WHERE WE WORK
                </li>
              </Link>
              <Link spy={true} smooth={true} to="War">
                <li className="transition border-b-2 cursor-pointer border-slate-800 hover:bg-slate-800">
                  WAR & LAW
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Support">
                <li className="transition border-b-2 cursor-pointer border-slate-800 hover:bg-slate-800">
                  SUPPORT US
                </li>
              </Link>
              <button className="text-white">donate</button>
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
