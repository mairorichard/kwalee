import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#FFCB05] sm:px-8 pt-2">
      <div className="flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <button className="md:inline-block px-6 py-3 text-sm font-medium text-white bg-black border border-black rounded active:text-black hover:bg-transparent hover:text-black focus:outline-none focus:ring hidden">
            Publish with us
          </button>
          <Icon
            icon="heroicons:bars-2-20-solid"
            className="text-[30px] mr-7 sm:mr-0 ml-5 cursor-pointer"
            onClick={menuHandler}
          />
        </div>
      </div>
      <div
        style={{ display: isOpen ? "" : "none" }}
        className="w-[100%] md:w-[50%] h-[100vh] bg-[#FFCB05] absolute top-0 right-0 text-black px-5 sm:px-10 py-8 flex flex-col justify-between"
      >
        <div className=" flex justify-between items-center">
          <h1 className="text-[35px] font-semibold w-[50%] sm:w-full">
            Be the first to know
          </h1>
          <Icon
            icon="cil:x"
            className="text-[30px] font-bold cursor-pointer"
            onClick={menuHandler}
          />
        </div>

        <div className="font-medium flex flex-col gap-6">
          <Link to={"/"}>
            <p>Home</p>
          </Link>

          <Link to={"/publishwithus"}>
            <p>Publish with us</p>
          </Link>

          <p>pc & console</p>
          <p>user research</p>

          <Link to={"/mobilegames"}>
            <p>mobile games</p>
          </Link>

          <p>join us</p>
          <p>blog</p>
          <p>contact us</p>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <button className="inline-block px-6 py-3 text-md font-semibold text-white bg-black border border-black rounded-md active:text-black hover:bg-transparent hover:text-black focus:outline-none focus:ring">
              Publish with us
            </button>
          </div>
          <div>
            <button className="inline-flex items-center px-8 py-3 text-white bg-black border border-black rounded-md hover:bg-transparent hover:text-black active:text-black focus:outline-none focus:ring">
              <span className="text-md font-semibold">
                Check out our best of 2021
              </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
