import logo from "@/assets/axtralogo.png";
import logo2 from "@/assets/logoBar.png";
import Menus from "./Menus";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const handleOpenHome = () => {
    if (openHome) {
      setOpenHome(false);
    } else {
      setOpenHome(true);
    }
  };
  return (
    <div>
      <div className="px-5 lg:px-16 z-10 bg-white pt-5 h-24 fixed w-full left-0 right-0 top-0">
        <div className="flex justify-between">
          <img
            className="lg:w-[12%] z-10 sm:w-[20%]  w-[50%]"
            width={250}
            src={logo}
            alt=""
          />
          <div className="lg:flex w-[75%] mx-[2%] container flex-col justify-center hidden ">
            <div className="flex justify-between">
              <Menus title="Home" />
              <Menus title="About" />
              <Menus title="Pages" />
              <Menus title="Services" />
              <Menus title="Team" />
              <Menus title="Blog" />
              <Menus title="Contact" />
            </div>
          </div>
          <div className="flex flex-col w-[20%] justify-center">
            <div className="flex justify-between lg:justify-around text-2xl">
              <i className="fas fa-search" title="Search"></i>
              <i
                onClick={() => setOpenMenu(true)}
                className="fas fa-bars"
                title="Menu"
              ></i>
            </div>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="bg-[#181818] h-screen fixed z-20 top-0 w-full grid grid-cols-10">
          <div className="col-span-2  border-r border-gray-800 hidden lg:block">
            <img className="my-8 pl-10" src={logo2} alt="" />
            <div className="text-white pl-10 pt-8 pb-16  border-t border-gray-800">
              <h1 className="text-2xl mb-5 font-bold">Follow Us</h1>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Dribbble
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Behance
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                {" "}
                Instagram
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Facebook
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Twitter
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                YouTube
              </h2>
            </div>
            <div className="text-white pt-5 px-5 border-t border-gray-800">
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                {" "}
                About
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Contact
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Career
              </h2>
              <h2 className="text-lg hover:text-gray-400 duration-200 font-semibold">
                Blog
              </h2>
            </div>
          </div>
          <div className="text-white mt-24 col-span-8 lg:col-span-5">
            <div className="border-y border-gray-800 flex justify-between ">
              <h1 className="lg:text-4xl text-2xl font-semibold py-5 px-12 hover:animate-wave">
                HOME
              </h1>

              <div className="flex bg-[#444444] justify-center flex-col">
                {openHome ? (
                  <i
                    onClick={() => handleOpenHome()}
                    className="fas fa-minus  w-24 font-bold text-center  text-xl text-[#dddddd]"
                    title="Close"
                  ></i>
                ) : (
                  <i
                    onClick={() => handleOpenHome()}
                    className="fas fa-plus  w-24 font-bold text-center  text-xl text-[#dddddd]"
                    title="Close"
                  ></i>
                )}
              </div>
            </div>
            {openHome && (
              <div className="ml-20">
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Digital Marketing{" "}
                </h2>
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Digital Studio
                </h2>
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Digital Agency
                </h2>
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Creative Agenty
                </h2>
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Startup Agenty
                </h2>
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Modern Agenty
                </h2>
                <h2 className="my-5 text-xl font-semibold hover:tracking-wider hover:ease-in duration-200">
                  Personal Portfolio
                </h2>
              </div>
            )}
            <div className="border-y border-gray-800 flex justify-between ">
              <h1 className="lg:text-4xl text-2xl font-semibold py-5 px-12 hover:animate-wave">
                ABOUT
              </h1>
            </div>
            <div className="border-y border-gray-800 flex justify-between">
              <h1 className="lg:text-4xl text-2xl font-semibold py-5 px-12 hover:animate-wave">
                {" "}
                SERVICE
              </h1>
              <div className="flex bg-[#444444] justify-center flex-col">
                <i
                  className="fas fa-plus  w-24 font-bold text-center  text-xl text-[#dddddd]"
                  title="Close"
                ></i>
              </div>
            </div>
            <div className="border-y border-gray-800 flex justify-between ">
              <h1 className="lg:text-4xl text-2xl font-semibold py-5 px-12 hover:animate-wave">
                PAGES
              </h1>
              <div className="flex bg-[#444444] justify-center flex-col">
                <i
                  className="fas fa-plus  w-24 font-bold text-center  text-xl text-[#dddddd]"
                  title="Close"
                ></i>
              </div>
            </div>
            <div className="border-y border-gray-800 flex justify-between ">
              <h1 className="lg:text-4xl text-2xl font-semibold py-5 px-12 hover:animate-wave">
                BLOG
              </h1>
              <div className="flex bg-[#444444] justify-center flex-col">
                <i
                  className="fas fa-plus  w-24 font-bold text-center  text-xl text-[#dddddd]"
                  title="Close"
                ></i>
              </div>
            </div>
            <div className="border-y border-gray-800 flex justify-between ">
              <h1 className="lg:text-4xl text-2xl font-semibold py-5 px-12 hover:animate-wave">
                CONTACT
              </h1>
            </div>
          </div>
          <div className="right-10 top-8 absolute lg:hidden flex">
            <i onClick={()=>setOpenMenu(false)}
              className="fas fa-times text-2xl  hover:text-[#bebebe] text-white"
              title="Close"
            ></i>
          </div>
          <div className="col-span-3 mr-8 hidden lg:block">
            <div className="justify-end flex mt-12 mr-10">
              {" "}
              <div className=" bg-[#333333] w-12 h-12 rounded-full text-center flex justify-center flex-col">
                <i onClick={()=>setOpenMenu(false)}
                  className="fas fa-times text-2xl hover:text-[#bebebe] text-white"
                  title="Close"
                ></i>
              </div>
            </div>
            <div className="mt-10 container mx-auto w-full relative hidden lg:flex">
              <input
                className="bg-transparent border w-full border-gray-600 rounded-full ml-5 px-5 py-3"
                placeholder="Search keyword"
                type="text"
              />
              <i
                className="fas fa-search text- absolute right-12 top-4 text-[#dddddd]"
                title="Close"
              ></i>
            </div>
            <div className=" ml-12">
              <h1 className="text-white text-xl mt-20 mb-5 font-bold">
                Get in touch
              </h1>
              <h1 className="text-white text-md font-semibold mb-3">
                +(02) - 094 980 547
              </h1>
              <h1 className="text-white text-md font-semibold mb-3">
                info@extradesign.com
              </h1>
              <h1 className="text-white">
                230 Norman Street New York, <br /> QC (USA) H8R 1A1
              </h1>
            </div>
            <div className="bg-purple-500 w-20 h-20 rounded-full absolute right-36"></div>
            <div className="bg-red-300 w-40 h-28 rounded-t-full bottom-0 absolute "></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
