import React from 'react'
import { RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from './RainbowHighlight'
import userData from '@constants/data'
import Image from 'next/image'

export default function Hero() {
  const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6']
  const phrases = ['Developer.', 'Programmer.', 'Data Analyst.', 'Data Scientist.']

  return (
    <div className='flex flex-row items-start justify-center overflow-hidden'>
      {/* Text container */}

      <div className='mx-auto w-full text-center md:w-1/2 md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          {phrases.map((phrase, index) => (
            <RainbowHighlight key={phrase} color={colors[index % colors.length]}>
              <h1 className='my-2 text-4xl font-bold text-gray-700 md:text-8xl dark:text-gray-200'>
                {phrase}
              </h1>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className='relative mt-20 -mr-40 hidden w-full md:w-1/2 lg:block'>
        <div className='w-3/4'>
          <Image
            alt='avatar'
            src={userData.avatarUrl}
            width='50'
            height='50'
            className='shadow'
          />
          <div className='mt-4 flex flex-row justify-between'>
            <div className='flex flex-row space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-90deg-up'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
                />
              </svg>
              <p className='font-mono'>That&apos;s me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
