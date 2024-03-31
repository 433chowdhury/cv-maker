import React from "react";
import PropTypes from "prop-types";
import { leftPanelText } from "../OnlyCv";

function EducationItem({ data: { degree, institute, year, location } }) {
  return (
    <div className="flex flex-col gap-[0.3em] ">
      <div className="flex gap-[0.4em] items-center mb-[0.2em]">
        <div className="h-[0.6em] w-[0.6em] aspect-square rounded-full bg-[rgba(163,43,45,255)]" />
        <p className="text-[0.8em] font-medium tracking-wider">{degree}</p>
      </div>
      <p className={leftPanelText}>{institute}</p>
      <p className={leftPanelText}>{year}</p>
      <p className={leftPanelText}>{location}</p>
    </div>
  );
}

EducationItem.propTypes = {
  data: PropTypes.objectOf({
    degree: PropTypes.string,
    institute: PropTypes.string,
    year: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default EducationItem;
