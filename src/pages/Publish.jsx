import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pub from "../assets/publishsplash.png";
import Banner from "../assets/Banner image.png";
import Deal from "../assets/deal.png";
import Icon1 from "../assets/icons/icon1.png";
import Icon2 from "../assets/icons/icon2.png";
import Icon3 from "../assets/icons/icon3.png";
import Icon4 from "../assets/icons/icon4.png";
import Step from "../assets/step.png";
import Step1 from "../assets/step1.png";
import Step2 from "../assets/step2.png";
import Step3 from "../assets/step3.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function SimpleAccordion() {
  return (
    <div className="text-black" style={{ backgroundColor: "#FFCE00" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What will happen when you test my game?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We’ll run a CPI or Prototype Test to establish your game’s
            potential. CPI Tests only require 1-2 levels while Prototype Tests
            require approximately 30. We’ll then provide crucial feedback and
            look to take things forward!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            What happens if my game doesn't hit Kwalee's KPIs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What kind of games are you looking for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            What's the most important thing you look for in a game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const Publish = () => {
  return (
    <div>
      <Navbar />

      {/* landing section */}
      <section className="bg-black px-10 lg:px-28  py-10 ">
        <div className="md:flex items-center justify-center">
          <div className="flex-1">
            <h1 className="text-white text-[40px] font-bold">
              Chart-topping partnerships with a young & impactful game studio
            </h1>
            <div className="mt-5">
              <button className="inline-flex items-center px-5 py-3 text-black bg-[#FFCE00] border border-[#FFCE00] rounded hover:bg-transparent hover:text-[#FFCE00] active:text-[#FFCE00] focus:outline-none focus:ring">
                <span className="text-sm font-bold"> Publish your game </span>

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
          <div className="flex-1 mt-10 lg:mt-0">
            <img src={Pub} alt="" />
          </div>

          {/* particles */}
          {/* x */}
          <div className="absolute top-36 right-20">
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M23.8333 3L3 23.8333L23.8333 44.6667L44.6667 23.8333L23.8333 3Z"
                  stroke="#FFCE00"
                  stroke-width="4.16667"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.6667 3L3 44.6667M3 3L44.6667 44.6667"
                  stroke="#FFCE00"
                  stroke-width="4.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          {/* line circle */}
          <div className="absolute left-10">
            <svg
              width="57"
              height="50"
              viewBox="0 0 57 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.5"
                cx="9.84558"
                cy="9.8458"
                r="7"
                transform="rotate(39.0298 9.84558 9.8458)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="28.4893"
                cy="24.9592"
                r="7"
                transform="rotate(39.0298 28.4893 24.9592)"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="47.1331"
                cy="40.0727"
                r="7"
                transform="rotate(39.0298 47.1331 40.0727)"
                fill="#FFCE00"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Step section */}
      <section className="lg:px-24 px-10 py-16">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[40px] mb-12 text-center ">
            Let’s Write A New Success Story!
          </h1>

          {/* steps */}
          <div className="flex gap-5">
            <img src={Step} alt="" className="hidden md:block" />

            <div className="flex flex-col justify-between">
              {/* step 1 */}
              <div className="flex items-center">
                <div className="">
                  <h3 className="font-semibold text-[22px]">
                    Start the collaboration
                  </h3>
                  <p>
                    We want to see your game in action – a video is enough to
                    excite us! So hit that submit button and get your demo in
                    front of a publishing manager!
                  </p>
                </div>
                <div className="">
                  <img src={Step1} alt="" />
                </div>
              </div>

              {/* step 2 */}
              <div className="flex items-center mt-5 lg:mt-0">
                <div className="">
                  <img src={Step2} alt="" />
                </div>
                <div className="">
                  <h3 className="font-semibold text-[22px] text-[#FFCE00]">
                    Gain valuable insights
                  </h3>
                  <p>
                    We’ll market your game to players and get you real data to
                    drive real improvements. And if you need ’em, our in-house
                    team of superstar devs can help out too!
                  </p>
                </div>
              </div>

              {/* step 3 */}
              <div className="flex items-center mt-5 lg:mt-0">
                <div className="">
                  <h3 className="font-semibold text-[22px]">
                    Conquer the charts
                  </h3>
                  <p>
                    Positive KPIs equals a lucrative publishing deal from us,
                    and a world-class UA & Marketing team who will attract
                    MILLIONS of players to your game!
                  </p>
                </div>
                <div className="">
                  <img src={Step3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals section */}
      <section className="bg-black px-10 lg:p-24 py-20">
        <div className="text-white flex flex-col lg:flex-row items-center justify-center">
          {/* left */}
          <div className="flex-1 flex flex-col items-center ">
            <div>
              <img src={Deal} alt="rocket image" />
            </div>
            <h1 className="font-bold text-[40px] ">
              It's all part of the deal
            </h1>
          </div>

          {/* right */}
          <div className="flex-1 mt-10 lg:mt-0">
            {/* cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* card */}
              <div className="flex flex-col gap-2 justify-between items-center bg-[#9CA3AF] h-full rounded-2xl p-5 ">
                <div className="">
                  <img src={Icon1} alt="" />
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h4 className="text-[18px] font-semibold">
                    It's all part of the deal
                  </h4>
                  <p className="flex">
                    Our UA & Marketing team has vast experience in launching
                    games to a global audience, having led multiple titles to
                    millions of downloads and the top of the charts!
                  </p>
                </div>
              </div>

              {/* card */}
              <div className="flex flex-col gap-2 justify-between items-center bg-[#9CA3AF] rounded-2xl p-5 h-full">
                <div className="">
                  <img src={Icon2} alt="" />
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h4 className="text-[18px] font-semibold">
                    MONETISATION EXPERTISE
                  </h4>
                  <p>
                    We provide full monetisation support from our dedicated
                    revenue team. Our mission is to help you create a game that
                    will be loved by its players, and will earn for you and your
                    team.
                  </p>
                </div>
              </div>

              {/* card */}
              <div className="flex flex-col gap-2 justify-between items-center bg-[#9CA3AF] rounded-2xl p-5 h-full">
                <div className="">
                  <img src={Icon3} alt="" />
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h4 className="text-[18px] font-semibold">
                    DEVELOPMENT SMARTS
                  </h4>
                  <p>
                    We’ll provide a priceless perspective on your games, from a
                    team that includes seasoned hyper-casual experts, the
                    creator of Micro Machines and the co-founder of Codemasters!
                  </p>
                </div>
              </div>

              {/* card */}
              <div className="flex flex-col gap-2 justify-between items-center bg-[#9CA3AF] rounded-2xl p-5 h-full">
                <div className="">
                  <img src={Icon4} alt="" />
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h4 className="text-[18px] font-semibold">
                    THE KWALEE FAMILY
                  </h4>
                  <p>
                    We’ve built our success with a collaborative ‘family’
                    attitude and our publishing is no different. You’ll benefit
                    from all areas of our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section>
        <div className="flex gap-8 items-center px-10 md:px-0 py-14 md:py-0">
          <img src={Banner} alt="" className="flex-1 w-[50%] hidden md:block" />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="font-bold text-[40px]">We're here to help</h1>
            <p>Publish with us today and get started...</p>

            <div className="mt-7">
              <button className="inline-flex items-center px-5 py-3 text-[#FFCE00] bg-[#000] border hover:border-[#FFCE00] rounded-lg hover:bg-transparent hover:text-[#FFCE00] active:text-[#000] focus:outline-none focus:ring">
                <span className="text-sm font-bold"> Submit Your Game </span>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7L8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z"
                    fill="#FFCE00"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-[#FFCE00] lg:py-8 py-12">
        <div className="mx-10 lg:mx-24 flex flex-col justify-center items-center">
          <h1 className="font-bold text-[40px] mb-8">Publishing FAQs</h1>
          <SimpleAccordion />
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Publish;
