import React from "react";
import EducationItem from "./EducationItem";

function Education() {
  return (
    <div className=" pl-[2em] pr-[1em]">
      <span className="text-[1.3em] font-bold font-public-sans ">Education</span>
      <div className="mt-[1em] flex flex-col gap-[1em] ">
        {educations.map((item, index) => {
          return <EducationItem key={index} data={item} />; // NOSONAR
        })}
      </div>
    </div>
  );
}

const educations = [
  {
    degree: "BSc In Computer Science",
    institute: "BRAC University",
    year: "2015 - 2019",
    location: "Dhaka, Bangladesh",
  },
  {
    degree: "Higher Secondary",
    institute: "BAF Shaheen School & College",
    year: "2013 - 2014",
    location: "Chattagram, Bangladesh",
  },
];

export default Education;
