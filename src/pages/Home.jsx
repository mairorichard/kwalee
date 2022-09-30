import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./home.module.css";
import { Icon } from "@iconify/react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Pub from "../assets/publishImg.png";
import Fam from "../assets/fam.png";
import Game from "../assets/gamebg1.png";
import Game2 from "../assets/game2.png";
import Game3 from "../assets/game3.png";
import Game4 from "../assets/game4.png";
import Google from "../assets/google_play.png";
import Apple from "../assets/apple.png";
import Land from "../assets/landing.png";
import Publish from "../assets/publishbg.png";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      {/* landing section */}
      {/* <img src={Land} alt="" className="absolute z-0" /> */}
      <section className="overflow-hidden z-10 splash ">
        <div className="overflow-hidden">
          <div className="flex-col flex lg:flex-row h-[100%] items-center justify-between py-12 gap-12 w-full z-10">
            <div className="w-[100%] lg:w-[50%] sm:ml-[3rem] 2xl:ml-[5rem] px-8">
              <p className="text-[#FFCE00]">Our Road to 1 Billion Nears!</p>
              <h1 className="text-white text-[40px] font-semibold">
                Our games have 750 million+ installs! That's a lot, but we're
                far from done.
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* images did not export well, FIX LATER */}
              <img src={Img2} alt="splash image" className="h-[200px]" />
              <img src={Img3} alt="splash image" className="h-[200px]" />
              <img src={Img1} alt="splash image" className="h-[200px]" />
              <img src={Img4} alt="splash image" className="h-[200px]" />
              <img src={Img5} alt="splash image" className="h-[200px]" />
              <img src={Img6} alt="splash image" className="h-[200px]" />
            </div>
          </div>
          {/* Particles */}
          <div className="">
            {/* line 1 */}
            {/* <div className="absolute top-[150px] left-[-8px] hidden lg:block ">
              <svg
                width="556"
                height="544"
                viewBox="0 0 556 544"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  opacity="0.5"
                  x1="-7.30594"
                  y1="1.45782"
                  x2="554.694"
                  y2="543.28"
                  stroke="#FFCE00"
                  stroke-width="2"
                />
              </svg>
            </div> */}

            {/* line 2 */}
            {/* <div className="absolute top-0 hidden lg:block">
              <svg
                width="767"
                height="709"
                viewBox="0 0 767 709"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  opacity="0.5"
                  x1="-7.3251"
                  y1="1.26209"
                  x2="765.675"
                  y2="708.262"
                  stroke="#FFCE00"
                  stroke-width="2"
                />
              </svg>
            </div> */}

            {/* game pad */}
            <div className="absolute top-[30rem] left-36">
              <svg
                width="51"
                height="52"
                viewBox="0 0 51 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M10.0282 51.0078C9.14223 51.0093 8.25997 50.8929 7.4047 50.6616C4.83746 49.9295 2.65944 48.2204 1.33789 45.9009C0.0163432 43.5814 -0.343441 40.8363 0.335727 38.2545L4.58075 22.1489C4.91572 20.8521 5.50546 19.6349 6.3156 18.5683C7.12573 17.5016 8.14006 16.6069 9.29947 15.9363C10.432 15.2803 11.6835 14.8556 12.9813 14.6867C14.2792 14.5178 15.5977 14.6081 16.8604 14.9524C18.1994 15.321 19.4475 15.963 20.5262 16.8378C21.6049 17.7127 22.4906 18.8014 23.1277 20.0355H27.8646C28.495 18.7927 29.3781 17.6952 30.4574 16.8136C31.5367 15.932 32.7883 15.2856 34.132 14.916C35.3946 14.5717 36.7131 14.4814 38.011 14.6502C39.3088 14.8191 40.5603 15.2438 41.6928 15.8998C42.8516 16.5713 43.8654 17.4662 44.6755 18.5327C45.4855 19.5993 46.0756 20.8161 46.4115 22.1125L50.6566 38.2545C51.3459 40.8438 50.989 43.6003 49.6629 45.9286C48.3368 48.2569 46.148 49.9701 43.5694 50.6981C42.3067 51.0424 40.9882 51.1327 39.6904 50.9638C38.3925 50.795 37.1411 50.3702 36.0085 49.7143C34.8491 49.0436 33.8348 48.1489 33.0246 47.0823C32.2145 46.0156 31.6248 44.7984 31.2898 43.5016L30.9618 41.8983H20.0305L19.6114 43.4652C19.2764 44.762 18.6867 45.9792 17.8766 47.0458C17.0664 48.1125 16.0521 49.0072 14.8927 49.6778C13.4124 50.5316 11.737 50.9897 10.0282 51.0078ZM14.255 18.2136C13.1556 18.2174 12.0759 18.5061 11.1214 19.0517C10.3793 19.4848 9.73012 20.0602 9.21111 20.7449C8.6921 21.4297 8.31348 22.2102 8.09702 23.0417L3.85199 39.1472C3.40779 40.8065 3.63224 42.5739 4.47712 44.0694C5.32199 45.565 6.71985 46.6694 8.3703 47.1454C9.16739 47.3628 9.99968 47.42 10.819 47.3137C11.6384 47.2074 12.4285 46.9396 13.1437 46.5259C13.8864 46.0936 14.536 45.5185 15.0551 44.8336C15.5742 44.1488 15.9525 43.3679 16.168 42.536L17.2976 38.2545H33.6947L34.8061 42.536C35.2469 44.2136 36.3344 45.6482 37.8304 46.5259C38.5491 46.9392 39.3423 47.2066 40.1645 47.3129C40.9867 47.4192 41.8218 47.3623 42.622 47.1454C44.2744 46.6739 45.674 45.5693 46.5167 44.0716C47.3593 42.574 47.5769 40.8044 47.1221 39.1472L42.8771 23.0417C42.6675 22.2097 42.2935 21.4281 41.7772 20.7429C41.261 20.0576 40.6128 19.4826 39.8709 19.0517C39.1522 18.6384 38.3591 18.371 37.5368 18.2647C36.7146 18.1584 35.8795 18.2153 35.0793 18.4323C34.0898 18.7143 33.1818 19.2285 32.4308 19.9319C31.6798 20.6354 31.1075 21.5078 30.7614 22.4769L30.3242 23.6793H20.6681L20.2309 22.4769C19.8817 21.5065 19.3062 20.6334 18.5521 19.93C17.798 19.2266 16.887 18.7132 15.8947 18.4323C15.3601 18.2881 14.8088 18.2146 14.255 18.2136Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M14.5648 32.7888C13.8441 32.7888 13.1396 32.5751 12.5404 32.1747C11.9412 31.7744 11.4741 31.2053 11.1983 30.5395C10.9225 29.8736 10.8504 29.141 10.991 28.4342C11.1316 27.7273 11.4786 27.0781 11.9882 26.5685C12.4978 26.0589 13.1471 25.7118 13.8539 25.5713C14.5607 25.4307 15.2934 25.5028 15.9592 25.7786C16.625 26.0544 17.1941 26.5214 17.5945 27.1206C17.9949 27.7199 18.2086 28.4244 18.2086 29.145C18.2086 30.1114 17.8247 31.0382 17.1413 31.7216C16.458 32.4049 15.5312 32.7888 14.5648 32.7888Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M36.4275 27.3231C37.4337 27.3231 38.2494 26.5074 38.2494 25.5012C38.2494 24.495 37.4337 23.6793 36.4275 23.6793C35.4213 23.6793 34.6056 24.495 34.6056 25.5012C34.6056 26.5074 35.4213 27.3231 36.4275 27.3231Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M36.4275 34.6107C37.4337 34.6107 38.2494 33.795 38.2494 32.7888C38.2494 31.7826 37.4337 30.9669 36.4275 30.9669C35.4213 30.9669 34.6056 31.7826 34.6056 32.7888C34.6056 33.795 35.4213 34.6107 36.4275 34.6107Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M32.7837 30.9669C33.7899 30.9669 34.6056 30.1512 34.6056 29.145C34.6056 28.1388 33.7899 27.3231 32.7837 27.3231C31.7775 27.3231 30.9618 28.1388 30.9618 29.145C30.9618 30.1512 31.7775 30.9669 32.7837 30.9669Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M40.0713 30.9669C41.0775 30.9669 41.8932 30.1512 41.8932 29.145C41.8932 28.1388 41.0775 27.3231 40.0713 27.3231C39.0651 27.3231 38.2494 28.1388 38.2494 29.145C38.2494 30.1512 39.0651 30.9669 40.0713 30.9669Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M21.3968 12.7479L18.664 10.3248C19.5189 9.3555 20.5702 8.57918 21.7481 8.04743C22.9261 7.51569 24.2037 7.24068 25.4961 7.24068C26.7885 7.24068 28.0662 7.51569 29.2441 8.04743C30.4221 8.57918 31.4734 9.3555 32.3282 10.3248L29.5954 12.7479C29.0825 12.1663 28.4517 11.7006 27.7449 11.3815C27.0381 11.0625 26.2716 10.8975 25.4961 10.8975C24.7207 10.8975 23.9541 11.0625 23.2473 11.3815C22.5406 11.7006 21.9098 12.1663 21.3968 12.7479Z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M35.0611 7.95634C33.8643 6.59931 32.3924 5.51247 30.7433 4.76802C29.0942 4.02357 27.3055 3.63856 25.4961 3.63856C23.6867 3.63856 21.8981 4.02357 20.2489 4.76802C18.5998 5.51247 17.1279 6.59931 15.9312 7.95634L13.1983 5.55143C14.737 3.80668 16.6294 2.40931 18.7497 1.45216C20.8701 0.495015 23.1698 0 25.4961 0C27.8225 0 30.1222 0.495015 32.2425 1.45216C34.3628 2.40931 36.2552 3.80668 37.7939 5.55143L35.0611 7.95634Z"
                    fill="#FFCE00"
                  />
                </g>
              </svg>
            </div>

            {/* triangle 1 */}
            <div className="absolute top-32 left-[26rem] hidden lg:block">
              <svg
                width="77"
                height="66"
                viewBox="0 0 77 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M3.42597 63.75L38.5 3L73.574 63.75H3.42597Z"
                  stroke="#FFCE00"
                  stroke-width="3"
                />
              </svg>
            </div>

            {/* triangle 2 */}

            {/* star */}
            <div className="absolute -bottom-10 right-[26rem]">
              <svg
                width="96"
                height="91"
                viewBox="0 0 96 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M48 4.85411L57.7991 35.0127L58.1359 36.0491H59.2257H90.9363L65.2819 54.6882L64.4002 55.3288L64.737 56.3652L74.5361 86.5238L48.8817 67.8848L48 67.2442L47.1183 67.8848L21.4639 86.5238L31.263 56.3652L31.5998 55.3288L30.7181 54.6882L5.0637 36.0491H36.7743H37.8641L38.2009 35.0127L48 4.85411Z"
                  stroke="#FFCE00"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* first card section */}

      <section className="py-14 lg:py-20 flex justify-center items-center  ">
        <div className="lg:flex justify-between gap-10 items-center mx-10 md:mx-24">
          <div className="w-[100%] md:w-[70%]">
            <p className="text-[#FFCE00]">Welcome to KWALEE</p>
            <h1 className=" text-[40px] font-semibold">
              Kwalee is a great place to be and to publish great games. The
              numbers only tell half the story!
            </h1>
            <button className="mt-3 relative inline-flex items-center px-5 py-2 overflow-hidden text-[#FFCE00] border border-current rounded group active:text-[#FFCE00] focus:outline-none focus:ring">
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-2">
                <svg
                  className="w-5 h-5"
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
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                Learn more
              </span>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-10 lg:mt-0">
            <div className={`${styles.card} bg-[#FFCE00]`}>
              <h1 className="text-[40px]">20+</h1>
              <p className="">20+ published games from Creative Wednesdays</p>
            </div>
            <div className={`${styles.card} bg-[#11D574] text-white`}>
              <h1 className="text-[40px]">800+</h1>
              <p className="">More than 800 Million installs</p>
            </div>
            <div className={`${styles.card} bg-[#000] text-white`}>
              <h1 className="text-[40px]">45+</h1>
              <p className="">45+ number one games!</p>
            </div>
            <div className={`${styles.card} bg-[#9CA3AF] text-white`}>
              <h1 className="text-[40px]">1.5M+</h1>
              <p className="">
                1.5 million+ GBP in profits paid directly to employees
              </p>
            </div>
          </div>
        </div>

        {/* particles */}
        <div className="">
          {/* circles */}
          <div className="absolute top-[50rem] left-4">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.5" cx="7" cy="7" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="31" cy="7" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="55" cy="7" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="7" cy="31" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="31" cy="31" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="55" cy="31" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="7" cy="55" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="31" cy="55" r="7" fill="#FFCE00" />
              <circle opacity="0.5" cx="55" cy="55" r="7" fill="#FFCE00" />
            </svg>
          </div>

          {/* star */}
          <div className="absolute left-60 top-10">
            <svg
              width="68"
              height="64"
              viewBox="0 0 68 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M34 4.8541L40.4314 24.6479L40.7682 25.6844H41.858L62.6705 25.6844L45.8328 37.9177L44.9511 38.5582L45.2879 39.5947L51.7193 59.3885L34.8817 47.1553L34 46.5147L33.1183 47.1553L16.2807 59.3885L22.7121 39.5947L23.0489 38.5582L22.1672 37.9177L5.32955 25.6844L26.142 25.6844H27.2318L27.5686 24.6479L34 4.8541Z"
                stroke="#FFCE00"
                stroke-width="3"
              />
            </svg>
          </div>

          {/* line 1 */}
          {/* <div className="absolute top-0">
            <svg
              width="815"
              height="818"
              viewBox="0 0 815 818"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="0.5"
                x1="816.061"
                y1="1.06066"
                x2="1.06064"
                y2="816.061"
                stroke="#FFCE00"
                stroke-width="3"
              />
            </svg>
          </div> */}

          {/* line 2 */}
          {/* <div className="absolute right-0">
            <svg
              width="818"
              height="818"
              viewBox="0 0 818 818"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                opacity="0.5"
                x1="816.061"
                y1="1.06066"
                x2="1.06064"
                y2="816.061"
                stroke="#FFCE00"
                stroke-width="3"
              />
            </svg>
          </div> */}
        </div>
      </section>

      {/* publish section */}

      <section
        className={`publish h-full py-20 px-5 text-white flex flex-col items-center justify-center`}
      >
        <h1 className="text-[26px] xl:text-[30px]">WE PUBLISH GREAT GAMES</h1>
        <div className="flex justify-center items-center gap-8 mt-6">
          <Icon
            icon="bi:arrow-left-circle"
            className="text-[40px] xl:text-[60px]"
          />
          <img
            src={Pub}
            alt="game in publish place"
            className="w-[70%] xl:w-full"
          />
          <Icon
            icon="bi:arrow-right-circle"
            className="text-[40px] xl:text-[60px]"
          />
        </div>
      </section>

      {/* family section */}

      <section className="py-12 2xl:h-[100vh] flex relative overflow-hidden">
        <div className="sm:flex flex-col-reverse xl:flex-row justify-between items-center mx-8 lg:mx-24">
          <div className="w-full xl:w-[50%] mt-8 xl:mt-0">
            <p className="text-[#FFCE00]">Meet the Kwalee Family</p>
            <h1 className=" text-[40px] font-semibold">
              Our driven, fun-loving and diverse team keeps growing, and we need
              people like you!
            </h1>

            <button
              className="mt-3 relative inline-flex items-center px-5 py-3 overflow-hidden text-black bg-[#FFCE00] rounded group active:bg-[#FFCE00] focus:outline-none focus:ring"
              href="/download"
            >
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-2">
                <svg
                  className="w-5 h-5"
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
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                See vacancy
              </span>
            </button>
          </div>
          <img src={Fam} alt="family video" className="w-full xl:w-[50%]" />
        </div>

        {/* particle */}
        <div className="">
          {/* star */}
          <div className="absolute top-8 left-64">
            <svg
              width="107"
              height="103"
              viewBox="0 0 107 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M22.785 5.38055L52.2338 26.2085L53.1236 26.8378L53.997 26.186L82.9057 4.61477L72.1974 39.0584L71.8738 40.0991L72.7636 40.7284L102.212 61.5564L66.1454 62.0158L65.0557 62.0296L64.7322 63.0703L54.0238 97.514L42.4416 63.3542L42.0916 62.3221L41.0019 62.336L4.93496 62.7954L33.8437 41.2241L34.7172 40.5724L34.3672 39.5403L22.785 5.38055Z"
                stroke="#FFCE00"
                stroke-width="3"
              />
            </svg>
          </div>

          {/* rectangle */}
          <div className="absolute bottom-28  left-80">
            <svg
              width="93"
              height="77"
              viewBox="0 0 93 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x="1.19492"
                y="38.5814"
                width="80.2308"
                height="41.2308"
                transform="rotate(-27.774 1.19492 38.5814)"
                stroke="#FFCE00"
                stroke-width="1.76923"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* games section */}
      <section className="bg-[#ECECEC] flex flex-col justify-center py-10 xl:py-20 relative ">
        <div className=" flex flex-col justify-center gap-5">
          <div className="flex justify-between items-center px-10 xl:px-24">
            <h2 className="text-[30px] font-medium">
              The Home of Hyper-Casual Games
            </h2>
            <div className="flex gap-6 text-[30px]">
              <Icon icon="bi:arrow-left-circle" />
              <Icon icon="bi:arrow-right-circle" />
            </div>
          </div>

          {/* cards */}
          {/* grid grid-rows-3 grid-flow-col gap-4 */}
          <div className="flex overflow-x-scroll scroll-smooth gap-2 pl-10 xl:pl-24 z-10 ">
            {/* card */}
            <div
              className={` ${styles.gameCard1} text-white  h-[250px] w-full rounded-3xl px-4 pb-5 flex flex-col justify-end relative `}
            >
              <img
                src={Game}
                alt=""
                className="absolute -z-10 w-full h-full top-0 left-0"
              />
              <h4 className="text-[#FFCE00] text-[26px] font-bold">Draw It</h4>
              <span className="text-[14px]">100M+</span>
              <div className="flex justify-between gap-5">
                <p className="text-[15px] font-medium w-full">Download On:</p>
                <div className="flex gap-2">
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Google} alt="google play icon" />
                  </div>
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Apple} alt="google play icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <div
              className={` ${styles.gameCard1} text-white h-[250px] w-full rounded-3xl px-4 pb-5 flex flex-col justify-end relative`}
            >
              <img
                src={Game2}
                alt=""
                className="absolute -z-10 w-full h-full top-0 left-0"
              />
              <h4 className="text-[#FFCE00] text-[26px] font-bold">
                Rocket Sky
              </h4>
              <span className="text-[14px]">33M+</span>
              <div className="flex justify-between gap-5">
                <p className="text-[15px] font-medium">Download On:</p>
                <div className="flex gap-2">
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Google} alt="google play icon" />
                  </div>
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Apple} alt="google play icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <div
              className={` ${styles.gameCard1} text-white  h-[250px] w-full rounded-3xl px-4 pb-5 flex flex-col justify-end relative`}
            >
              <img
                src={Game3}
                alt=""
                className="absolute -z-10 w-full h-full top-0 left-0"
              />
              <h4 className="text-[#FFCE00] text-[26px] font-bold">
                Shootout 3D
              </h4>
              <span className="text-[14px]">35M+</span>
              <div className="flex justify-between gap-5">
                <p className="text-[15px] font-medium">Download On:</p>
                <div className="flex gap-2">
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Google} alt="google play icon" />
                  </div>
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Apple} alt="google play icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <div
              className={` ${styles.gameCard1} text-white  h-[250px] w-full rounded-3xl px-4 pb-5 flex flex-col justify-end relative`}
            >
              <img
                src={Game4}
                alt=""
                className="absolute -z-10 w-full h-full top-0 left-0"
              />
              <h4 className="text-[#FFCE00] text-[26px] font-bold">Bake It</h4>
              <span className="text-[14px]">57M+</span>
              <div className="flex justify-between gap-5">
                <p className="text-[15px] font-medium">Download On:</p>
                <div className="flex gap-2">
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Google} alt="google play icon" />
                  </div>
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Apple} alt="google play icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <div
              className={` ${styles.gameCard1} text-white  h-[250px] w-full rounded-3xl px-4 pb-5 flex flex-col justify-end relative `}
            >
              <img
                src={Game}
                alt=""
                className="absolute -z-10 w-full h-full top-0 left-0"
              />
              <h4 className="text-[#FFCE00] text-[26px] font-bold">Draw It</h4>
              <span className="text-[14px]">100M+</span>
              <div className="flex justify-between gap-5">
                <p className="text-[15px] font-medium w-full">Download On:</p>
                <div className="flex gap-2">
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Google} alt="google play icon" />
                  </div>
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Apple} alt="google play icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <div
              className={` ${styles.gameCard1} text-white h-[250px] w-full rounded-3xl px-4 pb-5 flex flex-col justify-end relative`}
            >
              <img
                src={Game2}
                alt=""
                className="absolute -z-10 w-full h-full top-0 left-0"
              />
              <h4 className="text-[#FFCE00] text-[26px] font-bold">
                Rocket Sky
              </h4>
              <span className="text-[14px]">33M+</span>
              <div className="flex justify-between gap-5">
                <p className="text-[15px] font-medium">Download On:</p>
                <div className="flex gap-2">
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Google} alt="google play icon" />
                  </div>
                  <div className="bg-[#C4C4C4] w-[41px] h-[32px] rounded-2xl p-2 flex items-center justify-center">
                    <img src={Apple} alt="google play icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <div className="pl-10 xl:pl-24">
            <button className="mt-3 relative inline-flex items-center px-5 py-3 overflow-hidden text-black bg-[#FFCE00] rounded group active:bg-[#FFCE00] focus:outline-none focus:ring ">
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-2">
                <svg
                  className="w-5 h-5"
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
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                See more games
              </span>
            </button>
          </div>
        </div>

        {/* particles */}
        <div className="z-0">
          {/* triangle */}
          <div className="absolute top-20 left-4">
            <svg
              width="69"
              height="67"
              viewBox="0 0 69 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3.36238 15.7817L66.1421 2.90895L45.9003 63.7141L3.36238 15.7817Z"
                stroke="#FFCE00"
                stroke-width="3"
              />
            </svg>
          </div>

          {/* circles */}
          <div className="absolute top-8 right-60">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.5"
                cx="4.06452"
                cy="4.06452"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="18"
                cy="4.06452"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="31.9355"
                cy="4.06452"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="4.06452"
                cy="18.0001"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="18"
                cy="18.0001"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="31.9355"
                cy="18.0001"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="4.06452"
                cy="31.9354"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="18"
                cy="31.9354"
                r="4.06452"
                fill="#FFCE00"
              />
              <circle
                opacity="0.5"
                cx="31.9355"
                cy="31.9354"
                r="4.06452"
                fill="#FFCE00"
              />
            </svg>
          </div>

          {/* star */}
          <div className="absolute bottom-20 right-80">
            <svg
              width="70"
              height="66"
              viewBox="0 0 70 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M53.0083 4.58804L46.5948 25.15L46.2703 26.1904L47.1594 26.8205L64.7332 39.2742L43.1957 39.5285L42.1059 39.5414L41.7814 40.5818L35.3679 61.1438L28.4705 40.739L28.1215 39.7066L27.0318 39.7195L5.49427 39.9738L22.769 27.1086L23.643 26.4577L23.294 25.4252L16.3966 5.02047L33.9704 17.4741L34.8595 18.1042L35.7336 17.4533L53.0083 4.58804Z"
                stroke="#FFCE00"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
