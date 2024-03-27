import React from "react";
import { MdLocationPin, MdPhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className="mt-[20em] pl-[2em] pr-[1em]">
      <span className="text-[1.3em] font-bold">Contact</span>
      <div className="mt-[1em] flex flex-col gap-[0.7em]">
        <div className="flex items-center gap-[0.7em]">
          <MdPhoneAndroid
            size="1em"
            className="self-start text-[rgba(163,43,45,255)]"
          />
          <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
          <a href="tel:+546435 2311" className="text-[0.7em] font-light leading-[1em]">
            +546435 2311
          </a>
        </div>
        <div className="flex items-center gap-[0.7em]">
          <IoMdMail
            size="1em"
            className="self-start text-[rgba(163,43,45,255)]"
          />
          <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
          <a
            href="mailto:tawhidul433@g leading-[1em]mail.com"
            className="text-[0.7em] font-light"
          >
            tawhidul433@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-[0.7em]">
          <MdLocationPin
            size="1em"
            className="self-start text-[rgba(163,43,45,255)]"
          />
          <span className="h-[1.2em] border-r-[0.1em] border-[rgba(163,43,45,255)] " />
          <span className="text-[0.7em] font-light leading-[1em]">
            29/1 Arjotpara, Mohakhali
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
