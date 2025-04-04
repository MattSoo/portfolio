import type { UserData } from 'types/user'

const userData: UserData = {
  githubUsername: 'MattSoo',
  name: 'Soo Yeong Lih',
  designation: 'Developer & Data Scientist',
  avatarUrl: 'avatar.png',
  email: 'sooyeonglih1996@gmail.com',
  phone: '+6010-907 3698',
  address: 'Kuantan Pahang, Malaysia',
  projects: [
    {
      title: 'Portfolio',
      link: 'https://github.com/MattSoo/portfolio',
      imgUrl: 'portfolio.png',
    },
  ],
  about: {
    title: "I'm a software developer who loves solving complex problems, building scalable applications, and continuously learning new technologies to create impactful solutions.",
    description: [
      "My journey into programming began with self-learning C++, where I explored algorithms like binary search trees and sorting techniques. Instead of starting with frontend development, I was more interested in how different algorithms shaped software performance and efficiency.",
      "After that, I picked up Python for AI and automation, diving into data processing and scripting. Later, I studied Java, C# with .NET, and Kotlin in school, gaining experience with both object-oriented and functional programming paradigms.",
      "As I continued learning, I discovered Rust and was drawn to its focus on performance and memory safety. I also deepened my understanding of programming patterns, OOP, and functional programming. During an internship, I worked with the LAMP stack, strengthening my backend and database skills. More recently, I transitioned into modern full-stack development, working with React, Next.js, and Tailwind to build dynamic web applications.",
      "Now, I enjoy tackling challenges, optimizing performance, and writing clean, maintainable code. Whether it's designing efficient architectures, developing high-performance applications, or improving existing systems, I'm always excited to push boundaries and create something impactful."
    ],
    currentProject: 'Portfolio',
    currentProjectUrl: 'https://github.com/MattSoo/portfolio',
  },
  experience: [
    {
      title: 'Software Developer',
      company: 'mroads',
      year: '2021',
      companyLink: 'https://mroads.com',
      desc: 'Contributed to our flagship product - Panna - which is an AI powered candidate interviewing product.',
    },
  ],
  resumeUrl:
    'https://drive.google.com/file/d/1MjZvW2eKwcttprQ_USkhNe8NEbebJryI/view?usp=sharing',
  socialLinks: {
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  skills: [
    'React',
    'Next.js',
    'MySQL',
    'Tailwind',
    'C++',
    'Rust',
    'PHP',
    'Assembly',
  ],
}

export default userData
