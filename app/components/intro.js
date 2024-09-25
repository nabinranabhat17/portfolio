"use client";
import Image from "next/image";
import LinkedIn from "../public/in.svg";
import git from "../public/git.svg";
import photo from "../public/photo.jpg";
import React, { useState, useEffect } from "react";

const Intro = () => {
  const fullText = "Nabin Ranabhat";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <>
      <div className="w-full px-[108px] py-[30px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[544px] gap-[40px]">
            <div className="flex flex-col">
              <p className="text-[100px] leading-[90%] ">
                Hi, I am <br />
                {displayedText}
                <span className="blinking-cursor">|</span>
              </p>

              <p className="font-manrope text-[18px] font-normal leading-[27px] my-[5px]">
                A Nepal based front-end developer passionate about building
                accessible and user friendly websites.
              </p>
            </div>
            <div className="flex items-center gap-[16px] bg-[#fff] w-max">
              <div className="flex h-[54px] px-[24px] py-[20px] justify-center items-center gap-[12px] rounded-[100px] bg-[#D3E97A] font-manrope text-[16px] font-bold leading-[16px] text-[#000]">
                CONTACT ME
              </div>
              <Image src={LinkedIn} alt="LinkedIn" />
              <Image src={git} alt="git" />
            </div>
          </div>
          <Image
            src={photo}
            alt="mainPhoto"
            className="h-[663px] w-auto pr-20 rounded-sm"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
