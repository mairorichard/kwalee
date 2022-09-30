import React from "react";
import Land from "../../assets/landing.png";
import styles from "./splash.module.css";

const Splash = () => {
  return (
    <div className={`${styles.splash}bg-black`}>
      <div className="w-[50%]">
        <p className="text-[#FFCE00]">Our Road to 1 Billion Nears!</p>
        <h1 className="text-white text-[40px]">
          Our games have 750 million+ installs! That's a lot, but we're far from
          done.
        </h1>
      </div>
    </div>
  );
};

export default Splash;
