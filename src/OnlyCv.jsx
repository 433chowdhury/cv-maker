import React from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectsOverview from "./components/ProjectsOverview";

function OnlyCv({ className }) {
  //   do everything in em
  return (
    <div
      className={twMerge(
        "text-[1rem] text-[#221e1c] font-normal font-public-sans relative w-full h-[10in] max-w-[7.3in] flex flex-col items-stretch",
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
        <div className="flex-1 flex flex-col gap-[1.8em]">
          <Experience />
          <ProjectsOverview />
        </div>
      </div>
      <header className="relative z-10 h-[13.5em] mt-[2.5em] mb-[3em] ml-[3em] mr-[2.5em] bg-transparent flex gap-9 justify-start items-center">
        {/* info */}
        <div className="bg-[rgba(251,248,242,255)] absolute right-0 h-full w-[84%] -ml-[16%]">
          {/* name + designation */}
          <div className="mt-[2.4em] mr-[2em] mb-[2em] ml-[9em] text-black">
            <p className="text-[1.6em] font-semibold leading-[1.5em]">
              TAWHIDUL ISLAM
            </p>
            <p className="text-[1em] mt-[0.1em] font-roboto leading-[1em] text-neutral-600 tracking-wider">
              Software Engineer
            </p>
            {/* summery */}
            <p className="text-[0.7em] mt-[1.6em] text-neutral-700">
              lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem
              ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam lorem ipsam{" "}
            </p>
          </div>
        </div>
        {/* image */}
        <div className="absolute left-[1.6em] w-[9.4em] bg-white aspect-square rounded-full flex justify-center items-center">
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

export const leftPanelText = 'text-[0.65em] leading-[1.1]'
export const rightPanelText = 'text-[0.72em] leading-[1.5]'

OnlyCv.propTypes = {
  className: PropTypes.string,
};

export default OnlyCv;
