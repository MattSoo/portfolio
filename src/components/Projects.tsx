import React from 'react'
import userData from '@constants/data'
import type { Project } from 'types/user'
import Image from 'next/image'

export default function Projects() {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800'>
        <h1 className='py-20 text-center text-5xl font-bold md:text-left md:text-9xl'>
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className='bg-[#F1F1F1] dark:bg-gray-900'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 md:grid-cols-2'>
          {userData.projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} number={`${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({
  project,
  number,
}: {
  project: Project
  number: string
}) => {
  const { title, link, imgUrl } = project
  return (
    <a href={link} className='block w-full shadow-2xl'>
      <div className='relative overflow-hidden'>
        <div className='h-72 object-cover'>
          <Image
            alt='portfolio'
            src={imgUrl}
            width='50'
            height='50'
            className='h-full w-full transform object-cover transition duration-2000 ease-out hover:scale-125'
          />
        </div>
        <h1 className='absolute top-10 left-10 rounded-md bg-red-500 px-2 text-xl font-bold text-gray-50'>
          {title}
        </h1>
        <h1 className='absolute bottom-10 left-10 text-xl font-bold text-gray-50'>
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  )
}
