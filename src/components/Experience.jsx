import React from "react";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <div className="mt-[16em] px-[2em]">
      <span className="text-[1.3em] font-bold font-public-sans ">Experience</span>
      <div className="mt-[1em] flex flex-col gap-[0.7em]">
        {experiences.map((experience) => {
          return <ExperienceItem key={experience.title} data={experience} />;
        })}
      </div>
    </div>
  );
}

const experiences = [
  {
    title: "Software Engineer",
    company: "Team Dhaka",
    duration: {
      start: "Dec, 2019",
      end: "Current",
    },
    summery:
      "In Team Dhaka my responsibilities include creating front-end components, integrate API in different UI components, show data in tables, create form components for different kinds of input, use graphs to visualize data, manage user athentication and role based access, create backend API for data access, dockerize applications and deploy them, review code from peers, fix bugs in the system, refactor any functionality with new technology and best practices, manage tasks, suggestions for improvements and more.",
  },
];

export default Experience;
