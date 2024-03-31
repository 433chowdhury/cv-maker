import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectsOverview() {
  return (
    <div className="px-[2em]">
      <span className="text-[1.3em] font-semibold font-roboto">
        Top Projects
      </span>
      <div className="mt-[0.7em] flex flex-col gap-[1em] ">
        {projects.map((item, index) => {
          return <ProjectItem key={index} data={item} />; // NOSONAR
        })}
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Tourbot",
    summery: "Admin panel for managing tours",
    description:
      "Created functionality for managing bookings, vendors, agencies. Tech stack: React, Tailwind, Redux, Web Workers.",
  },
  {
    name: "Foorum",
    summery: "Social media & Learning platform",
    description:
      "Implemented user login, video player, photo/video carousel, rich text editor. Tech stack: TypeScript, React, DraftJs, Socket etc.",
  },
  {
    name: "Bolt+ TV",
    summery: "Entertainment app for running in smart TV",
    description:
      "Developed all the functionality including user login with QR code, playing live video stream, live chat, navigation using arrow buttons and more. Tech stack: NextJs, React, TypeScript, Tailwind, Socket etc.",
  },
];

export default ProjectsOverview;
