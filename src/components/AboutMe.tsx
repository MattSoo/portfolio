import React from 'react'
import userData from '@constants/data'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <header className='mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800'>
        <h1 className='py-20 text-center text-5xl font-bold md:text-left md:text-9xl'>
          About Me.
        </h1>
      </header>
      <div className='bg-[#F1F1F1] px-4 dark:bg-gray-900'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-x-20 gap-y-20 pt-20 md:grid-cols-3'>
          {/* Contact Section */}
          <aside className='inline-flex flex-col'>
            <section>
              <h2 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Contact
              </h2>
              <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
                For any sort help / enquiry, shoot a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className='border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300'
                >
                  mail
                </a>{' '}
                and I&apos;ll get back. I swear.
              </p>
            </section>
            <section className='mt-8'>
              <h2 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Job Opportunities
              </h2>
              <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
                I&apos;m looking for a job currently. If you see me as a good
                fit, check my{' '}
                <a
                  href={userData.resumeUrl}
                  target='__blank'
                  className='border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300'
                >
                  CV
                </a>{' '}
                and I&apos;d love to work for you.
              </p>
            </section>
            {/* Social Links */}
            <section>
              <h2 className='mt-8 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Social Links
              </h2>
              <nav className='mt-4 ml-4'>
                {Object.entries(userData.socialLinks).map(([key, link]) => (
                  <div
                    key={key}
                    className='flex flex-row items-center justify-start'
                  >
                    <a
                      href={link}
                      className='group flex flex-row items-center space-x-4'
                    >
                      <div className='my-4'>&rarr;</div>
                      <div className='relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300'>
                        <div className='absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0'></div>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </a>
                  </div>
                ))}
              </nav>
            </section>
          </aside>
          {/* About Section */}
          <section className='col-span-1 md:col-span-2'>
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className='mb-4 text-xl text-gray-700 dark:text-gray-300'
              >
                {desc}
              </p>
            ))}
            <h2 className='inline-block rounded-md bg-red-500 px-2 py-1 text-3xl font-bold text-gray-50'>
              Tech Stack
            </h2>
            <div className='mt-8 flex flex-row flex-wrap'>
              {[
                'javascript',
                'java',
                'typescript',
                'html',
                'css',
                'git',
                'react',
              ].map((tech) => (
                <Image
                  key={tech}
                  alt={tech}
                  src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${tech}/${tech}.png`}
                  width='50'
                  height='50'
                  className='mx-4 my-4 h-20 w-20'
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
