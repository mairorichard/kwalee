import React from "react";
import { Icon } from "@iconify/react";
import FImg from "../assets/footerimg.png";

const Footer = () => {
  return (
    <div className="lg:h-[90vh] bg-black px-10 pb-10 lg:px-24 flex flex-col items-center">
      <div className="mt-20">
        <img src={FImg} alt="" />
      </div>
      <div className="w-full">
        <div className="grid  lg:grid-cols-5 gap-4 w-full mt-16">
          <div className="...">
            <h3 className="text-[#9CA3AF] font-medium mb-4">Solutions</h3>
            <div className="text-[#D1D5DB]">
              <p>Marketing</p>
              <p>Analytics</p>
              <p>Commerce</p>
              <p>Insights</p>
            </div>
          </div>
          <div className="...">
            <h3 className="text-[#9CA3AF] font-medium mb-4">Social media</h3>
            <div className="text-[#D1D5DB]">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Linkedin</p>
            </div>
          </div>
          <div className="...">
            <h3 className="text-[#9CA3AF] font-medium mb-4">Company</h3>
            <div className="text-[#D1D5DB]">
              <p>Publish with us</p>
              <p>Pc & Console</p>
              <p>User Research</p>
              <p>Mobile Games</p>
              <p>Join Us</p>
            </div>
          </div>
          <div className="col-span-2 ...">
            <div>
              <h3 className="text-[#9CA3AF] font-medium mb-4">Company</h3>
              <p className="text-white">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="col-span-2">
                <label
                  for="UserEmail"
                  className="relative block px-3 pt-3 bg-[#FFCE00] overflow-hidden  rounded-md shadow-sm focus-within:ring-1 focus-within:ring-black focus-within:border-black"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Email"
                    className="w-full h-8 p-0 placeholder-transparent bg-[transparent] border-none sm:text-sm focus:outline-none focus:border-transparent focus:ring-0 peer"
                  />

                  <span className="absolute text-xs text-black transition-all -translate-y-1/2 left-3 top-2 peer-focus:top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:text-xs">
                    Enter your email...
                  </span>
                </label>
              </div>

              <button className="inline-block px-5 py-3 text-sm font-medium text-[black] transition bg-[white] rounded hover:scale-110 hover:rotate-2 active:bg-white focus:outline-none focus:ring">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* border line */}
      <div className="bg-[#FFCE00] h-[1px] w-full mt-12"></div>

      {/* bottom part */}
      <div className="text-[#9CA3AF] flex justify-between w-full mt-12">
        <p>© 2020 Workflow, Inc. All rights reserved.</p>
        <div className="flex gap-5">
          <Icon icon="akar-icons:facebook-fill" />
          <Icon icon="akar-icons:instagram-fill" />
          <Icon icon="akar-icons:twitter-fill" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
