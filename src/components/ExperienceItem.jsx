import React from "react";
import PropTypes from "prop-types";
import { rightPanelText } from "../OnlyCv";

function ExperienceItem({
  data: {
    title,
    company,
    duration: { start, end },
    summery,
  },
}) {
  return (
    <div className="flex flex-col gap-[0.5em]">
      {/* header */}
      <div className="flex gap-[1.2em]">
        <div className="relative mt-[0.4em]">
          <div className="h-[2em] border-r border-[rgba(163,43,45,255)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[rgba(163,43,45,255)]"></div>
        </div>
        <div className="flex-1 flex flex-col items-stretch gap-[0.1em] ">
          <p className="text-[1em] font-medium">{title}</p>
          <div className="flex justify-between gap-2 font-light">
            <span className="text-[0.7em] tracking-wider">{company}</span>
            <div className="flex gap-[0.4em] text-[0.7em]">
              <span>{start}</span>-<span>{end}</span>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <p className={"text-justify font-public-sans " + rightPanelText}>{summery}</p>
    </div>
  );
}

ExperienceItem.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    company: PropTypes.string,
    duration: PropTypes.objectOf({
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    summery: PropTypes.string,
  }),
};

export default ExperienceItem;
