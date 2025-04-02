import type { UserData } from 'types/user'

const userData: UserData = {
  githubUsername: 'MattSoo',
  name: 'Soo Yeong Lih',
  designation: 'Developer & Data Scientist',
  avatarUrl: 'avatar.png',
  email: 'sooyeonglih1996@gmail.com',
  phone: '+6010-907 3698',
  address: 'Kuantan, Pahang, Malaysia',
  projects: [
    {
      title: 'Tailwind Master Kit',
      link: 'https://tailwindmasterkit.com',
      imgUrl: 'tmk.jpg',
    },
    {
      title: 'PlaceholderTech',
      link: 'https://placeholdertech.in',
      imgUrl: 'placeholdertech.png',
    },
    {
      title: 'Portfolio',
      link: 'https://manuarora.in',
      imgUrl: 'portfolio.png',
    },
    {
      title: 'CovidRescue',
      link: 'https://covidrescue.co.in',
      imgUrl: 'covidrescue.png',
    },
    {
      title: 'Algochurn',
      link: 'https://algochurn.com',
      imgUrl: 'algochurn.png',
    },
    {
      title: 'Playground',
      link: 'https://play.placeholdertech.in',
      imgUrl: 'playground.png',
    },
    {
      title: 'Feedmeback',
      link: 'https://feedmeback.vercel.app',
      imgUrl: 'feedmeback.png',
    },
    {
      title: 'Devmedium',
      link: 'https://devmedium.vercel.app',
      imgUrl: 'devmedium.png',
    },
  ],
  about: {
    title:
      "I'm a software developer that loves building products and web applications that impact millions of lives",
    description: [
      `I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.`,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
      `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`,
    ],
    currentProject: 'Tailwind Master Kit',
    currentProjectUrl: 'https://tailwindmasterkit.com',
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
    instagram: 'https://instagram.com/maninthere',
    twitter: 'https://twitter.com/mannupaaji',
    linkedin: 'https://linkedin.com/in/manuarora28',
    github: 'https://github.com/manuarora700',
    facebook: 'https://facebook.com/',
    peerlist: 'https://peerlist.io/manuarora',
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
