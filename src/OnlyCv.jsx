import React from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";

function OnlyCv({ className }) {
  //   do everything in em
  return (
    <div
      className={twMerge(
        "text-[1rem] relative w-full h-[10in] max-w-[7.3in] flex flex-col items-stretch text-black",
        "bg-white",
        className
      )}
    >
      {/* cv details */}
      <div className="absolute inset-0 flex mx-[1.2em] my-[1em]">
        <div className="w-[37%] bg-[rgba(226,220,204,255)] flex flex-col gap-[2.5em]">
          <Contact />
          <Education />
          <Skills />
        </div>
        <div className="flex-1"></div>
      </div>
      <header className="relative z-10 h-[15.6em] my-[3.5em] ml-[3em] mr-[2.5em] bg-transparent flex gap-9 justify-start items-center">
        {/* info */}
        <div className="bg-[rgba(251,248,242,255)] absolute right-0 h-full w-[84%] -ml-[16%]">
          {/* name + designation */}
          <div className="mt-[3.5em] mr-[2em] mb-[2em] ml-[10em] text-black">
            <p className="text-[1.6em] font-semibold leading-[1.5em]">
              TAWHIDUL ISLAM
            </p>
            <p className="text-[1em] mt-[0.1em] font-medium leading-[1em] text-neutral-600 tracking-widest">
              Software Engineer
            </p>
            {/* summery */}
            <p className="text-[0.7em] mt-[2.4em] text-neutral-700">
              lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem
              ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam{" "}
            </p>
          </div>
        </div>
        {/* image */}
        <div className="absolute left-[1em] w-[11em] bg-white aspect-square rounded-full flex justify-center items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/picture2.jpg`}
            className="w-[91%] aspect-square rounded-full object-cover"
            alt="user-img"
          />
        </div>
      </header>
      <section className="flex-1 flex"></section>
      <footer></footer>
    </div>
  );
}

OnlyCv.propTypes = {
  className: PropTypes.string,
};

export default OnlyCv;
