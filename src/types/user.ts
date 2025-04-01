export type Project = {
  title: string
  link: string
  imgUrl: string
}

type About = {
  title: string
  description: string[]
  currentProject: string
  currentProjectUrl: string
}

export type Experience = {
  title: string
  company: string
  desc: string
  year: string
  companyLink: string
}

type SocialLinks = {
  instagram?: string
  twitter?: string
  linkedin?: string
  github?: string
  facebook?: string
  peerlist?: string
}

export type UserData = {
  githubUsername: string
  name: string
  designation: string
  avatarUrl: string
  email: string
  phone: string
  address: string
  projects: Project[]
  about: About
  experience: Experience[]
  resumeUrl: string
  socialLinks: SocialLinks
  skills: string[]
}
