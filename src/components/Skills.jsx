import React from "react";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="pl-[2em] pr-[2em]">
      <span className="text-[1.3em] font-semibold font-roboto">Skills</span>
      <div className="mt-[1em] flex flex-col gap-[0.7em]">
        {skills.map((item, index) => {
          return <SkillItem key={index} data={item} />; // NOSONAR
        })}
      </div>
    </div>
  );
}

const skills = [
  {
    name: "React",
    points: 5,
  },
  {
    name: "TypeScript",
    points: 3,
  },
  {
    name: "Tailwind",
    points: 5,
  },
  {
    name: "NextJs",
    points: 4,
  },
  {
    name: "Socket",
    points: 3,
  },
  {
    name: "Web Worker",
    points: 4,
  },
];

export default Skills;
