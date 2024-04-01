import React from "react";
import PropTypes from "prop-types";
import { rightPanelText } from "../OnlyCv";

function ProjectItem({ data: { name, summery, description } }) {
  return (
    <div className="flex flex-col gap-[0.2em]">
      {/* header */}
      <div className="flex flex-col gap-[2px]">
        <p className="text-[1em] w-1/3 font-medium border-b-2 border-[rgba(163,43,45,255)]">{name}</p>
        <p className={"opacity-70 font-light " + rightPanelText}>{summery}</p>
      </div>
      {/* description */}
      <p className={"text-justify font-public-sans " + rightPanelText}>{description}</p>
    </div>
  );
}

ProjectItem.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    summery: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ProjectItem;
