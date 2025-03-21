'use client'
import { useEffect, useState } from 'react'
import ContainerBlock from '@components/ContainerBlock'
import FavouriteProjects from '@components/FavouriteProjects'
import LatestCode from '@components/LatestCode'
import Hero from '@components/Hero'
import userData from '@constants/data'
import { Repository } from 'types/repository'
import { UserData } from 'types/user'

const getLatestRepos = async (
  data: UserData,
  token?: string,
): Promise<Repository[] | undefined> => {
  try {
    const username = data.githubUsername
    const headers: HeadersInit = token
      ? { Authorization: `Bearer ${token}` }
      : {}

    const res = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      { headers },
    )

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
    }

    const json = await res.json()
    return json.items?.slice(0, 6)
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export default function Home() {
  const [repositories, setRepositories] = useState<Repository[] | undefined>([])
  const token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching latest repositories...')
      const repos = await getLatestRepos(userData, token ?? '')
      console.log('Fetched repositories:', repos)
      setRepositories(repos)
    }

    fetchData()
  }, [token])

  return (
    <ContainerBlock
      title='Soo Yeong Lih - Developer, Data Scientist, Data Analyst'
      description='This is a template built specifically for my blog - Creating a developer portfolio that gets you a job.'
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories ?? []} />
    </ContainerBlock>
  )
}
