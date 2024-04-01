import React from "react";
import { MdLocationPin, MdPhoneAndroid } from "react-icons/md";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { leftPanelText } from "../OnlyCv";

function Contact() {
  return (
    <div className="mt-[16em] pl-[2em] pr-[1em]">
      <span className="text-[1.3em] font-bold font-public-sans">Contact</span>
      <div className="mt-[1em] flex flex-col gap-[0.7em]">
        <a href="tel:+8801758806878" className={leftPanelText}>
          <div className="flex items-center gap-[0.7em]">
            <MdPhoneAndroid
              size="1.5em"
              className="self-start text-[rgba(163,43,45,255)]"
            />
            <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
            <span>+880 1758806878</span>
          </div>
        </a>
        <a href="mailto:tawhidul433@gmail.com" className={leftPanelText}>
          <div className="flex items-center gap-[0.7em]">
            <IoMdMail
              size="1.5em"
              className="self-start text-[rgba(163,43,45,255)]"
            />
            <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
            <span>tawhidul433@gmail.com</span>
          </div>
        </a>
        <a
          href="https://maps.app.goo.gl/sENJbxjxPZUXHYYi9"
          target="_blank"
          rel="noreferrer"
          referrerPolicy="noopener noreferrer"
          className={leftPanelText}
        >
          <div className="flex items-center gap-[0.7em]">
            <MdLocationPin
              size="1.5em"
              className="self-start text-[rgba(163,43,45,255)]"
            />
            <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
            <span>Mohakhali, Dhaka</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/md-tawhidul-islam-chowdhury-63b39510b"
          target="_blank"
          rel="noreferrer"
          referrerPolicy="noopener noreferrer"
          className={leftPanelText}
        >
          <div className="flex items-center gap-[0.7em]">
            <IoLogoLinkedin
              size="1.5em"
              className="self-start text-[rgba(163,43,45,255)]"
            />
            <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
            <span>Tawhidul Islam</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
