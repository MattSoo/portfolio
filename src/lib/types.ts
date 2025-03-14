export interface Repository {
    id: number;
    name: string;
    html_url: string;
    clone_url: string;
    description: string;
}

type Project = {
    title: string;
    link: string;
    imgUrl: string;
};

type About = {
    title: string;
    description: string[];
    currentProject: string;
    currentProjectUrl: string;
};

type Experience = {
    title: string;
    company: string;
    year: string;
    companyLink: string;
    desc: string;
};

type SocialLinks = {
    instagram: string;
    twitter: string;
    linkedin: string;
    github: string;
    facebook: string;
    peerlist: string;
};

export type UserData = {
    githubUsername: string;
    name: string;
    designation: string;
    avatarUrl: string;
    email: string;
    phone: string;
    address: string;
    projects: Project[];
    about: About;
    experience: Experience[];
    resumeUrl: string;
    socialLinks: SocialLinks;
};