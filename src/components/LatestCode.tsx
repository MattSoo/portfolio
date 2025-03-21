import userData from '@constants/data'
import type { Repository } from 'types/repository'

export default function LatestCode({
  repositories,
}: {
  repositories: Repository[]
}) {
  return (
    <section className='-mt-40 bg-[#F1F1F1] pb-40 dark:bg-gray-900'>
      <div className='mx-auto max-w-6xl'>
        <div className='mx-10 flex flex-col items-center justify-between md:flex-row md:pt-40'>
          <h1 className='my-20 max-w-lg text-center text-6xl font-bold text-gray-500 md:my-0 md:text-white lg:text-left lg:text-9xl dark:text-gray-600'>
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className='mb-20 flex flex-row items-center space-x-4 rounded-md bg-white px-8 py-4 text-xl font-semibold shadow-lg md:mb-0 dark:text-gray-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-up-right-square'
              stroke='4'
              strokeWidth='4'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 gap-y-20 px-10 md:grid-cols-2 lg:-mt-10 lg:grid-cols-3'>
        {/* Single github Repo */}

        {repositories?.map((latestRepo: Repository, idx: number) => (
          <GithubRepoCard latestRepo={latestRepo} key={idx} />
        ))}
      </div>
    </section>
  )
}

const GithubRepoCard = ({ latestRepo }: { latestRepo: Repository }) => {
  return (
    <div className='github-repo'>
      <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
        {latestRepo.name}
      </h1>
      <p className='my-4 text-base font-normal text-gray-500'>
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className='group flex w-full flex-row items-center space-x-2 font-semibold'
      >
        <p>View Repository </p>
        <div className='transform transition duration-300 group-hover:translate-x-2'>
          &rarr;
        </div>
      </a>
    </div>
  )
}
