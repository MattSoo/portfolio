import React from 'react';
import userData from '@constants/data';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function AboutMe() {
  const techstack_imgsize = 50;

  return (
    <section className="bg-white dark:bg-gray-800">
      <header className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </header>
      <article className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className={twMerge(
              'leading-[3rem] text-2xl md:text-4xl font-semibold mx-4',
              'dark:text-gray-300'
            )}
          >
            {userData.about.title}. Currently working on{' '}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </article>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Contact Section */}
          <aside className="inline-flex flex-col">
            <section>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h2>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className={twMerge(
                    'text-gray-800 border-b-2 border-gray-800 font-bold',
                    'dark:border-gray-300 dark:text-gray-300'
                  )}
                >
                  mail
                </a>{' '}
                and I&apos;ll get back. I swear.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h2>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I&apos;m looking for a job currently. If you see me as a good
                fit, check my{' '}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{' '}
                and I&apos;d love to work for you.
              </p>
            </section>
            {/* Social Links */}
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
              </h2>
              <nav className="mt-4 ml-4">
                {Object.entries(userData.socialLinks).map(([key, link]) => (
                  <div
                    key={key}
                    className="flex flex-row justify-start items-center"
                  >
                    <a
                      href={link}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <div
                        className={twMerge(
                          'text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'
                        )}
                      >
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </a>
                  </div>
                ))}
              </nav>
            </section>
          </aside>
          {/* About Section */}
          <section className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}
            <h2 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h2>
            <div className="flex flex-row flex-wrap mt-8">
              {[
                'javascript',
                'java',
                'typescript',
                'html',
                'css',
                'angular',
                'vue',
                'git',
                'react',
                'firebase',
                'mysql',
                'mongodb',
              ].map((tech) => (
                <Image
                  key={tech}
                  alt={tech}
                  width={techstack_imgsize}
                  height={techstack_imgsize}
                  src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${tech}/${tech}.png`}
                  className="h-20 w-20 mx-4 my-4"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
