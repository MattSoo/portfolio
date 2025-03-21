import userData from '@constants/data'
import React from 'react'
import type { Experience } from 'types/user'

export default function Experience() {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800'>
        <h1 className='py-20 text-center text-5xl font-bold md:text-left md:text-9xl'>
          Experience
        </h1>
      </div>
      <div className='-mt-4 bg-[#F1F1F1] dark:bg-gray-900'>
        <div className='mx-auto grid max-w-xl grid-cols-1 pt-20 dark:bg-gray-900'>
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard key={idx} experience={exp} />
              {idx === userData.experience.length - 1 ? null : (
                <div className='divider-container -mt-2 flex flex-col items-center'>
                  <div className='relative z-10 h-4 w-4 rounded-full bg-green-500'>
                    <div className='relative z-10 h-4 w-4 animate-ping rounded-full bg-green-500'></div>
                  </div>
                  <div className='-mt-2 h-24 w-1 rounded-full bg-gray-200 dark:bg-gray-500'></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { title, desc, year, company, companyLink } = experience
  return (
    <div className='experience-card relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl dark:bg-gray-800'>
      <h1 className='absolute -top-10 text-4xl font-bold text-gray-200 md:-top-10 md:-left-10 dark:text-gray-800'>
        {year}
      </h1>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <a href={companyLink} className='text-gray-500'>
        {company}
      </a>
      <p className='my-2 text-gray-600 dark:text-gray-400'>{desc}</p>
    </div>
  )
}
