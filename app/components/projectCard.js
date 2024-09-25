import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
import git from "../public/git.svg"


const ProjectCard = () => {
  return (
    <div className='w-full flex flex-row justify-between gap-[48px]'>
      <div className='flex-1 h-[600px] bg-[#1A1A1A] relative rounded-lg flex justify-center items-center'>
        <span className='absolute bg-[#0A0A0A] p-3 top-5 left-5 rounded-3xl text-[14px] font-manrope'>Conceptual Work</span>
        <Image alt="justbg" className='w-[486px] h-[347px] bg-white' />

      </div>
      <div className='flex-1 h-[600px] py-[60px] flex flex-col  font-manrope '>
        <span className="text-[32px] leading-140">
          Promotional landing page for our favorite show
        </span>
        <span className="text-[16px] text-[#C7C7C7] leading-150 mt-[16px]">
          Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
        </span>
        <span className="text-[16px] leading-150 py-[16px] flex justify-start mt-[16px]">PROJECT INFO</span>
        <span className="text-[16px] leading-150 py-[16px] flex justify-between border-t border-neutral-dark-gray">
          <p>Year</p>
          <p className="text-[#C7C7C7]">2023</p>
        </span>
        <span className="text-[16px] leading-150 py-[16px] flex justify-between border-y border-neutral-dark-gray">
          <p>Role</p>
          <p className="text-[#C7C7C7]">Frontend</p>
        </span>
        <span className="text-[#D3E97A] flex flex-row gap-4 mt-[48px]">
          <span className='flex flex-row border-b border-yellow gap-2 items-center w-max'>
            <p>LIVE DEMO</p>
            <MdArrowOutward />
          </span>
          <span className='flex flex-row border-b border-yellow gap-2 items-center w-max'>
            <p>GITHUB</p>
            <Image src={git} alt="nothing" height={26} width={26} />
          </span>
        </span>

      </div>



    </div>
  )
}

export default ProjectCard