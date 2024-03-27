import React from "react";
import PropTypes from "prop-types";

function SkillItem({ data: { name, points } }) {
  return (
    <div className="flex justify-between">
      <p className="text-[0.6em]">{name}</p>
      <div className="flex gap-[0.3em]">
        {Array(5)
          .fill(" ")
          .map((_, index) => {
            if (index > points - 1)
              return (
                <div
                  key={index} // NOSONAR
                  className="h-[10px] w-[10px] aspect-square rounded-full border border-[rgba(163,43,45,255)]"
                />
              );
            return (
              <div
                key={index} // NOSONAR
                className="h-[10px] w-[10px] aspect-square rounded-full bg-[rgba(163,43,45,255)]"
              />
            );
          })}
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    points: PropTypes.number,
  }),
};

export default SkillItem;
