import React from "react";
import { MdLocationPin, MdPhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className="text-black mt-[18.4em] pl-[1.6em] pr-[1em]">
      <label className="text-[1.3em] font-bold">Contact</label>
      <div className="mt-[0.9em] flex flex-col gap-[0.6em] text-[rgba(116,81,54,255)]">
        <div className="flex items-center gap-[0.7em]">
          <MdPhoneAndroid size="1em" />
          <span className="h-[1.2em] border-r-[0.1em] border-[rgba(116,81,54,255)] " />
          <span className="text-[0.6em] text-black leading-[1em]">
            +546435 2311
          </span>
        </div>
        <div className="flex items-center gap-[0.7em]">
          <IoMdMail size="1em" />
          <span className="h-[1.2em] border-r-[0.1em] border-[rgba(116,81,54,255)] " />
          <a
            href="mailto:tawhidul433@g leading-[1em]mail.com"
            className="text-[0.6em] text-black"
          >
            tawhidul433@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-[0.7em]">
          <MdLocationPin size="1em" />
          <span className="h-[1.2em] border-r-[0.1em] border-[rgba(116,81,54,255)] " />
          <span className="text-[0.6em] text-black leading-[1em]">
            29/1 Arjotpara, Mohakhali
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
