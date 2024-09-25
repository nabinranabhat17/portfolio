import React from 'react'
import ProjectCard from './projectCard'

const Project = () => {
  return (
    <div className='mx-[108px] flex flex-col gap-[80px] py-[80px]'>
      <div className='flex flex-col w-[600px]'>
        <p className='text-[#FFF] font-normal leading-[76px] text-[76px]'>Featured Projects</p>
        <p className='font-manrope text-[18px] font-normal leading-[27px] my-[5px]'>Here are some of the selected projects that showcase my passion for front-end development.</p>
      </div>
      {Array(3).fill(null).map((_, index) => (
        <ProjectCard key={index} id={index} />
      ))}
      {/* <ProjectCard /> */}
    </div>
  )
}

export default Project