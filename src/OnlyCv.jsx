import React, { useCallback, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router-dom";
import Contact from "./Contact";

function OnlyCv({ className }) {
  const location = useLocation();

  const fileInputRef = useRef(null);

  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = useCallback((e) => {
    const { files } = e.target;
    setImageFile(files.length ? URL.createObjectURL(files[0]) : null);
  }, []);

  const handleImageClick = useCallback(() => {
    fileInputRef.current?.click?.();
  }, []);

  const pageForPrinting = useMemo(() => {
    return location.pathname === "/only-cv";
  }, [location]);

  //   do everything in em
  return (
    <div
      className={twMerge(
        pageForPrinting && "text-[1.6vw]",
        !pageForPrinting && "text-[1rem]",
        "relative aspect-[1_/_1.40963855] flex flex-col items-stretch",
        "bg-white",
        className
      )}
    >
      {/* cv details */}
      <div className="absolute inset-0 flex my-[1em] mx-[1.2em]">
        <div className="w-[37%] bg-[rgba(226,220,204,255)] flex flex-col gap-[2em]">
          <Contact />
        </div>
        <div className="flex-1"></div>
      </div>
      <header className="relative z-10 h-[14.6em] my-[3em] ml-[3em] mr-[2.5em] bg-transparent flex gap-9 justify-start items-center">
        {/* info */}
        <div className="bg-[rgba(251,248,242,255)] absolute right-0 h-full w-[84%] -ml-[32%]">
          {/* name + designation */}
          <div className="mt-[3.5em] mr-[2em] mb-[2em] ml-[9em] text-black">
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
        <div className="absolute left-[1em] w-[10em] bg-white aspect-square rounded-full flex justify-center items-center">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className={twMerge(
              "absolute top-1/2 -translate-y-1/2 w-full",
              imageFile && "invisible"
            )}
          />
          {imageFile && (
            <img
              src={imageFile}
              className="w-[91%] aspect-square rounded-full object-cover"
              alt="user-img"
              onClick={handleImageClick}
            />
          )}
        </div>
      </header>
      <section className="flex-1 flex"></section>
      <footer></footer>
    </div>
  );
}

export default OnlyCv;
