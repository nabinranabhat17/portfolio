import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import git from "../public/git.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-[108px]">
      <div className="w-full flex flex-row justify-between gap-[24px] items-stretch">
        <div className="flex-1 py-[60px] w-[400px] flex flex-col">
          <p className="text-[#fff] text-[76px]">Lets connect</p>
          <p className="font-manrope text-[18px] text-[#c7c7c7]">
            say hello @ nranabhat17@gmail.com
          </p>
          <p className="font-manrope text-[18px] text-[#c7c7c7] mt-2">
            for more info here's my resume
          </p>
          <div className="mt-6 flex flex-row w-max gap-4 items-center">
            <Link href="#" className="">
              <FaLinkedin className=" h-[32px] w-[32px]" />
            </Link>
            <Link href="#" className="">
              <Image src={git} alt="" className="h-[32px] w-[32px]"></Image>
            </Link>
            <Link href="#" className="h-[32px] w-[32px]">
              <FaSquareXTwitter className=" h-[32px] w-[32px]" />
            </Link>
            <Link href="#" className="h-[32px] w-[32px]">
              <FaInstagramSquare className=" h-[32px] w-[32px]" />
            </Link>
          </div>
          <span className="font-manrope text-[16px] text-[#c7c7c7] mt-60">
            @2024 Nabin Ranabhat
          </span>
        </div>
        <div className="flex-1 py-[60px] flex flex-col font-manrope text-white gap-4">
          <p className="font-manrope text-[#c7c7c7] text-[16px]">Name</p>
          <input
            type="text"
            maxLength={50}
            className=" bg-[#1A1A1A] outline-none px-[16px] py-[12px] text-[16px]"
          />
          <p className="font-manrope text-[#c7c7c7] text-[16px]">Email</p>
          <input
            type="text"
            maxLength={50}
            className=" bg-[#1A1A1A] outline-none px-[16px] py-[12px] text-[16px]"
          />
          <p className="font-manrope text-[#c7c7c7] text-[16px]">Subject</p>
          <input
            type="text"
            maxLength={50}
            className=" bg-[#1A1A1A] outline-none px-[16px] py-[12px] text-[16px]"
          />
          <p className="font-manrope text-[#c7c7c7] text-[16px]">Message</p>
          <textarea
            className="bg-[#1A1A1A] outline-none px-[16px] py-[12px] text-[16px] resize-none h-[120px] w-full"
            rows="4"
          />
          <button className="bg-[#FF6B00] text-white font-manrope text-[16px] py-[12px] px-[16px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
