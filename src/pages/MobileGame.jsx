import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import Mgames from "../assets/m-games.png";
import Game1 from "../assets/gamesimg/game1.png";
import Game2 from "../assets/gamesimg/game2.png";
import Game3 from "../assets/gamesimg/game3.png";
import Game4 from "../assets/gamesimg/game4.png";
import Game5 from "../assets/gamesimg/game5.png";
import Game6 from "../assets/gamesimg/game6.png";

const MobileGame = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>

      {/* landing section */}
      <section className="lg:h-[80vh] bg-black text-white lg:px-24 px-10 mb-24 py-12 lg:py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-[40px] font-bold text-center md:text-left">
            Games Millions Love...
          </h1>
          <div>
            <img
              src={Mgames}
              alt="splash for mobile games"
              className="h-[600px] object-contain "
            />
          </div>
        </div>

        {/* particles */}
        <div className="">
          {/* square circle */}
          <div className="absolute top-0">
            <svg
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.5"
                cx="13.6393"
                cy="43.8479"
                r="7"
                transform="rotate(-19.5932 13.6393 43.8479)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="36.2497"
                cy="35.7998"
                r="7"
                transform="rotate(-19.5932 36.2497 35.7998)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="58.86"
                cy="27.7516"
                r="7"
                transform="rotate(-19.5932 58.86 27.7516)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="28.2017"
                cy="13.1894"
                r="7"
                transform="rotate(70.4068 28.2017 13.1894)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="36.2498"
                cy="35.7998"
                r="7"
                transform="rotate(70.4068 36.2498 35.7998)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="44.2979"
                cy="58.4101"
                r="7"
                transform="rotate(70.4068 44.2979 58.4101)"
                fill="#FFCE00"
              />
            </svg>
          </div>
        </div>
      </section>

      {/*our games section */}

      <section className="lg:mx-24 mx-10 mb-10">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-[40px] font-semibold mt-20 text-center">
            Our Games...
          </h1>

          {/* GAMES */}

          {/* game */}
          <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
              <img src={Game1} alt="" className="w-full" />
            </div>

            {/* line */}
            <div className="w-[3px] bg-[#FFCE00] hidden lg:block"></div>

            {/* right side */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="">
                <h2 className="text-[38px] font-semibold">Draw it</h2>
                <div className="text-[#FFCE00] text-[16px] flex  items-center gap-1">
                  <Icon icon="bx:download" />
                  <span>100 MILLION+ DOWNLOADS</span>
                </div>
                <div className="mt-5">
                  <p>
                    Is it a moustache, or is it a sandwich? And will your
                    drawing be good enough to tell the difference? Put it to the
                    test in Draw It, a rapid-fire drawing game where you compete
                    against others (and the clock!) by doodling the prompts that
                    appear on-screen!
                  </p>
                  <div className="mt-3">
                    <button className="inline-flex items-center px-3 py-2 text-[#FFCE00] border border-[#FFCE00] rounded hover:bg-[#FFCE00] hover:text-black active:bg-[#FFCE00] focus:outline-none focus:ring">
                      <span className="text-sm font-semibold">Learn more</span>

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

              {/* bottom */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon
                    icon="fluent:rocket-16-regular"
                    className="text-[28px]"
                  />
                  <span>2019</span>
                </div>

                {/* line */}
                <div className="w-[2px] bg-[#FFCE00]"></div>

                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon icon="fa-solid:award" className="text-[28px]" />
                  <span>TOP 3 APP IN 26 COUNTRIES</span>
                </div>
              </div>
            </div>
          </div>

          {/* game */}
          <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
              <img src={Game2} alt="" className="w-full" />
            </div>

            {/* line */}
            <div className="w-[3px] bg-[#FFCE00]"></div>

            {/* right side */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="">
                <h2 className="text-[38px] font-semibold"> ROCKET SKY!</h2>
                <div className="text-[#FFCE00] text-[16px] flex  items-center gap-1">
                  <Icon icon="bx:download" />
                  <span>33 MILLION+ DOWNLOADS</span>
                </div>
                <div className="mt-5">
                  <p>
                    Launch your rocket, discover new planets and reach
                    incredible heights… just don’t overheat! Powerful new
                    rockets and upgrades can be unlocked in this game of
                    intergalactic fuel management as you strive for that
                    record-breaking launch.
                  </p>
                  <div className="mt-3">
                    <button className="inline-flex items-center px-3 py-2 text-[#FFCE00] border border-[#FFCE00] rounded hover:bg-[#FFCE00] hover:text-black active:bg-[#FFCE00] focus:outline-none focus:ring">
                      <span className="text-sm font-semibold">Learn more</span>

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

              {/* bottom */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon
                    icon="fluent:rocket-16-regular"
                    className="text-[28px]"
                  />
                  <span>2019</span>
                </div>

                {/* line */}
                <div className="w-[2px] bg-[#FFCE00]"></div>

                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon icon="fa-solid:award" className="text-[28px]" />
                  <span>#1 APP IN UK, CANADA AND MANY MORE</span>
                </div>
              </div>
            </div>
          </div>

          {/* game */}
          <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
              <img src={Game3} alt="" className="w-full" />
            </div>

            {/* line */}
            <div className="w-[3px] bg-[#FFCE00]"></div>

            {/* right side */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="">
                <h2 className="text-[38px] font-semibold">SHOOTOUT 3D</h2>
                <div className="text-[#FFCE00] text-[16px] flex  items-center gap-1">
                  <Icon icon="bx:download" />
                  <span>35 MILLION+ DOWNLOADS</span>
                </div>
                <div className="mt-5">
                  <p>
                    In this high-stakes puzzle game, there’s only one goal: to
                    protect yourself and civilians while taking out the bad
                    guys! Aim carefully, activate traps and use objects to your
                    advantage in a puzzle game that ups the ante.
                  </p>
                  <div className="mt-3">
                    <button className="inline-flex items-center px-3 py-2 text-[#FFCE00] border border-[#FFCE00] rounded hover:bg-[#FFCE00] hover:text-black active:bg-[#FFCE00] focus:outline-none focus:ring">
                      <span className="text-sm font-semibold">Learn more</span>

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

              {/* bottom */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon
                    icon="fluent:rocket-16-regular"
                    className="text-[28px]"
                  />
                  <span>2019</span>
                </div>

                {/* line */}
                <div className="w-[2px] bg-[#FFCE00]"></div>

                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon icon="fa-solid:award" className="text-[28px]" />
                  <span>TOP 3 APP IN 26 COUNTRIES</span>
                </div>
              </div>
            </div>
          </div>

          {/* game */}
          <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
              <img src={Game4} alt="" className="w-full" />
            </div>

            {/* line */}
            <div className="w-[3px] bg-[#FFCE00]"></div>

            {/* right side */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="">
                <h2 className="text-[38px] font-semibold">BAKE IT</h2>
                <div className="text-[#FFCE00] text-[16px] flex  items-center gap-1">
                  <Icon icon="bx:download" />
                  <span>57 MILLION+ DOWNLOADS</span>
                </div>
                <div className="mt-5">
                  <p>
                    Have you got what it takes to be a master baker? Match your
                    bakes to your customers’ orders and wow them with your
                    beautiful mixtures and toppings, but beware: your customers
                    can be very demanding!
                  </p>
                  <div className="mt-3">
                    <button className="inline-flex items-center px-3 py-2 text-[#FFCE00] border border-[#FFCE00] rounded hover:bg-[#FFCE00] hover:text-black active:bg-[#FFCE00] focus:outline-none focus:ring">
                      <span className="text-sm font-semibold">Learn more</span>

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

              {/* bottom */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon
                    icon="fluent:rocket-16-regular"
                    className="text-[28px]"
                  />
                  <span>2019</span>
                </div>

                {/* line */}
                <div className="w-[2px] bg-[#FFCE00]"></div>

                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon icon="fa-solid:award" className="text-[28px]" />
                  <span>RELEASED BY A REMOTE-WORKING TEAM </span>
                </div>
              </div>
            </div>
          </div>

          {/* game */}
          <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
              <img src={Game5} alt="" className="w-full" />
            </div>

            {/* line */}
            <div className="w-[3px] bg-[#FFCE00]"></div>

            {/* right side */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="">
                <h2 className="text-[38px] font-semibold">JETPACK JUMP</h2>
                <div className="text-[#FFCE00] text-[16px] flex  items-center gap-1">
                  <Icon icon="bx:download" />
                  <span>57 MILLION+ DOWNLOADS</span>
                </div>
                <div className="mt-5">
                  <p>
                    It’s track and field, but not as you know it! Time your
                    initial jumps perfectly to get ready for launch, before
                    taking a jetpack-powered leap into the stratosphere to reach
                    new distances. Upgrade your jetpack and use all your rocket
                    fuel to keep soaring further and earning more cash!
                  </p>
                  <div className="mt-3">
                    <button className="inline-flex items-center px-3 py-2 text-[#FFCE00] border border-[#FFCE00] rounded hover:bg-[#FFCE00] hover:text-black active:bg-[#FFCE00] focus:outline-none focus:ring">
                      <span className="text-sm font-semibold">Learn more</span>

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

              {/* bottom */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon
                    icon="fluent:rocket-16-regular"
                    className="text-[28px]"
                  />
                  <span>2019</span>
                </div>

                {/* line */}
                <div className="w-[2px] bg-[#FFCE00]"></div>

                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon icon="fa-solid:award" className="text-[28px]" />
                  <span>RELEASED BY A REMOTE-WORKING TEAM </span>
                </div>
              </div>
            </div>
          </div>

          {/* game */}
          <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
              <img src={Game6} alt="" className="w-full" />
            </div>

            {/* line */}
            <div className="w-[3px] bg-[#FFCE00]"></div>

            {/* right side */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="">
                <h2 className="text-[38px] font-semibold">LET'S BE COPS 3D</h2>
                <div className="text-[#FFCE00] text-[16px] flex  items-center gap-1">
                  <Icon icon="bx:download" />
                  <span>30 MILLION+ DOWNLOADS</span>
                </div>
                <div className="mt-5">
                  <p>
                    Will you play good cop, bad cop, or a bit of both? You
                    decide in Let's Be Cops 3D, the worldwide hit game in which
                    players take to the streets to police dangerous driving.
                    Stop speeding cars in their tracks and choose the
                    appropriate punishment based on the driver's actions!
                  </p>
                  <div className="mt-3">
                    <button className="inline-flex items-center px-3 py-2 text-[#FFCE00] border border-[#FFCE00] rounded hover:bg-[#FFCE00] hover:text-black active:bg-[#FFCE00] focus:outline-none focus:ring">
                      <span className="text-sm font-semibold">Learn more</span>

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

              {/* bottom */}
              <div className="flex gap-4 mt-5 lg:mt-0">
                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon
                    icon="fluent:rocket-16-regular"
                    className="text-[28px]"
                  />
                  <span>2019</span>
                </div>

                {/* line */}
                <div className="w-[2px] bg-[#FFCE00]"></div>

                <div className="flex items-center gap-2 font-medium text-[18px]">
                  <Icon icon="fa-solid:award" className="text-[28px]" />
                  <span>A TOP 3 GAME IN 17 COUNTRIES INCLUDING USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MobileGame;
