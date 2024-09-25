import React from "react";

const About = () => {
  return (
    <div className="mx-[108px]">
      <div className="w-full flex flex-row justify-between gap-[48px]">
        <div className="py-[60px] w-[400px]">
          <p className="text-[#FFF] font-normal leading-[76px] text-[76px]">
            About ME
          </p>
        </div>
        <div className="flex-1 h-[600px] py-[60px] flex flex-col  font-manrope text-white">
          <span className="text-[32px] leading-140">
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.
          </span>
          <span className="text-[16px] text-[#C7C7C7] leading-150 mt-[16px]">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </span>
          <span className="flex flex-row border-b border-yellow gap-2 items-center w-max text-[#D3E97A] my-10 font-manrope text-[16px] hover:cursor-pointer">
            <p>MORE ABOUT ME</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
