"use client"

// Framework
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

// Components
import NavBar from '../components/NavBar'
import Section, { SectionTitle } from '../components/Section';
import SocialLinks from '../components/SocialLinks';
import ResumeItem, { ResumeItemList } from '../components/ResumeItem';

// Animation
import animation from "../utils/animation";

//Resume
import Resume from "../utils/resume";


export default function () {

    console.log(Resume);

    useGSAP(animation)

    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* Terminal Section */}
            <Section className="h-screen flex flex-col justify-center items-center" id="home">
                <div className="terminal container w-fit rounded-xl">
                    <div className="bg-[#545454] py-1 px-5 rounded-t-xl">
                        <span className="h-3 w-3 bg-red-500 inline-block rounded-full"> </span>&nbsp;
                        <span className="h-3 w-3 bg-yellow-300 inline-block rounded-full"> </span>&nbsp;
                        <span className="h-3 w-3 bg-green-400 inline-block rounded-full"> </span>
                    </div>
                    <div className="bg-[#1F1F1F] px-5 md:px-10 py-8 text-2xl md:text-4xl rounded-b-xl">
                        <div>
                            <span className="opacity-75">&gt; Hi</span> <span className="wave">👋</span><span className="opacity-75">, I am </span>
                            <span className="font-bold text-primary-lighter">Siddharth Dhaigude</span>
                        </div>
                        <div className="opacity-75">&gt; I am a Software Developer</div><br />
                        <ol className="opacity-75">
                            <li>&gt; <Link href="#about">1.About</Link></li>
                            <li>&gt; <Link href="#resume">2.Resume</Link></li>
                            {/* <li>&gt; <Link href="#projects">3.Projects</Link></li> */}
                            <li>&gt; <Link href="#contact">3.Contact</Link></li>
                            <li>&gt; <a href="/assets/files/Siddharth's Resume.pdf" download="true">4.Download Resume</a>
                            </li>
                        </ol>
                    </div>
                </div>
                <SocialLinks />
            </Section>

            {/* About Section */}
            <Section id="about">
                <div className="grid md:grid-flow-row lg:grid-flow-col lg:gap-24">
                    <div className="col-auto py-7 mx-auto lg:block">
                        <SectionTitle>Learn More <br />About Me</SectionTitle>
                        <Image src="/assets/images/profile.png" alt="sid" width="150" height="150" className="portfolio-img rounded-full border-4 border-primary-lighter lg:mt-24 h-48 w-48" />
                    </div>
                    <div className="col-auto">
                        <div className="about-content container bg-primary rounded-xl px-5 py-5">
                            <h2 className="text-3xl font-semibold">Enthusiastic, Insightful & Curious</h2>
                            <p className="mt-6">A resourceful problem solver with adept, swift, and accurate Googling abilities. Seek and you shall find! An enthusiastic computer engineering student with a strong passion for development and programming, specializing predominantly in web technologies.</p>
                            <ul className="mt-6">
                                <li>{'>'} <strong>Degree:</strong> Bachelor of Engineering, Computer
                                    Enginering<br />University of Mumbai
                                    (2020-2024)</li>
                                <li>{'>'} <strong>City:</strong> Mumbai, India</li>
                                <li>{'>'} <strong>Email:</strong> <Link href="mailto:siddharthdhaigude@gmail.com">siddharthdhaigude@gmail.com</Link>
                                </li>
                            </ul>
                            <p className="mt-6">My Technical Skills Include:<br />HTML/CSS, Javascript/Typescript, ReactJS, NodeJS, ExpressJS,
                                SQL, MongoDB, Python, Django </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Basic Resume Section */}
            <Section id='resume'>
                <SectionTitle>Check Out My Resume</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-xl px-1 py-5 bg-primary">
                    {/* Left Side */}
                    <div className="lg:col-span-1 ml-3 md:ml-9">
                        {/* Education */}
                        <h3 className="text-2xl font-bold inline-block mb-5">Education</h3>
                        <ResumeItem
                            title="Bachelor Engineering - Computer Engineering"
                            subtitle="Hons in Data Science"
                            position="University of Mumbai(2020-24)"
                        >
                            <ResumeItemList>
                                <li>Association of Computing Machinery(ACM) - Vice ChairPerson(2022-23), Asst. Technical Head(2021-22)</li>
                                <li>Teknack Gaming Studio - Organizer, Developer & Mentor</li>
                                <li>Taught and led technical training sessions, talks and workshops on various tools, technologies and softwares for the students of DBIT as well as other colleges.</li>
                                <li>Sessions on topics like Web Development, Programming, Git, GitHub, Game Development, Unity, and many more.</li>
                            </ResumeItemList>
                        </ResumeItem>
                        {/* Organizations */}
                        <h3 className="text-2xl font-bold inline-block mb-5">Organizations</h3>
                        <ResumeItem
                            title="Association of Computing Machinery(ACM)"
                            position="Vice Chairperson (2022-23)">
                            <ResumeItemList>
                                <li>Co-ordinate and manage the Core Team and organize events, workshops and trainings for the students.</li>
                                <li>Manage and coordinate all the activities of the chapter and responsible for all administrative, functional and Organizational duties in the chapter.</li>
                            </ResumeItemList>
                            <span className='text-gray-300 italic'>Asst-Technical Head (2021-22)</span>
                            <ResumeItemList>
                                <li>Conducted workshops, taught and trained students on topics like Git, GitHub, Web Development.</li>
                                <li>Responsible for maintaining and implementing new features for the offical chapter website.</li>
                            </ResumeItemList>
                        </ResumeItem>
                    </div>

                    {/* Right Side-Selected Projects */}
                    <div className="lg:col-span-1 px-1 ml-3 md:ml-auto">
                        <div className="container">
                            <h3 className="text-2xl font-bold mb-5">Projects</h3>
                            <ResumeItem
                                title="Sacred Hearts School"
                                position="Website Developer"
                                link="https://sacredheartschool.in">
                                <ResumeItemList>
                                    <li>Official Website for Sacred Heart School.</li>
                                    <li>Developed, Designed and Deployed the website</li>
                                    <li>Technologies: Astro, Tailwind CSS, Typescript</li>
                                </ResumeItemList>
                            </ResumeItem>
                            <ResumeItem
                                title='Architect Yogesh Dhaigude'
                                position='Website Developer'
                                link='https://ayda.in'>
                                <ResumeItemList>
                                    <li>Official Website for Architect Yogesh Dhaigude.</li>
                                    <li>Developed, Designed and Deployed the website with a content management system.</li>
                                    <li>Technologies: HTML, CSS, Javascript, ReactJS, Sanity.io</li>
                                </ResumeItemList>
                            </ResumeItem>
                            <ResumeItem
                                title="SAKHYA-WOMEN'S GUIDANCE CELL (NGO)"
                                position="Website Developer"
                                link="https://sakhyawgc.org">
                                <ResumeItemList>
                                    <li>End-to-end development of the NGO's website, enhancing user experience and engagement.</li>
                                    <li>Ensured website security by implementing SSL certificates.</li>
                                    <li>Technologies: Astro, Tailwind CSS, Typescript</li>
                                </ResumeItemList>
                            </ResumeItem>
                            <ResumeItem
                                title="Anti-Plastic Brigade Charitable Trust (NGO)"
                                position="Website Developer"
                                link='https://anti-plasticbrigade.com'>
                                <ResumeItemList>
                                    <li>Official Website for Anti-Plastic Brigade Charitable Trust.</li>
                                    <li>Developed, Designed and Deployed the website for the NGO.</li>
                                    <li>Technologies: HTML, CSS, Javascript and Bootstrap.</li>
                                </ResumeItemList>
                            </ResumeItem>
                            <ResumeItem
                                title='COVID-19 Analysis'
                                position='Data Analysis'
                            >
                                <ResumeItemList>
                                    <li>Analysed the trends in the covid cases of Andhra Pradesh State, India.</li>
                                    <li>Applied regression algorithm on Tested vs Confirmed cases, Confirmed vs Recovered cases, Confirmed vs Deceased cases and Confirmed cases vs Timeperiod.</li>
                                    <li>Technologies: Python, Numpy, Pandas, Matplotlib, Sk-learn</li>
                                </ResumeItemList>
                            </ResumeItem>
                        </div>
                    </div>
                </div>
            </Section >

            {/* Contact Section */}
            <Section id="contact">
                <SectionTitle>Contact Me</SectionTitle>
                <div className="grid grid-cols-2">
                    <div className="col-span-2 md:col-span-1 md:pr-3">
                        <p>Currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want
                            to say hi, I'll try my best to get back to you!</p>
                        <div className="social-profiles mt-6">
                            <div className="flex items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd"
                                        d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                                        clipRule="evenodd" />
                                </svg>
                                <h3 className="text-2xl ml-3">Social Profiles</h3>
                            </div>
                            <SocialLinks mail={false} />
                        </div>
                        <div className="mail mt-6">
                            <div className="flex items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                <h3 className="text-2xl ml-3">Mail Me</h3>
                            </div>
                            <Link href="mailto:siddharthdhaigude@gmail.com">siddharthdhaigude@gmail.com</Link>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 md:pl-3 mt-8 md:mt-0">
                        <form action="" method="" className="flex flex-col">
                            <div className="flex justify-between">
                                <input className="w-1/2 mr-3" type="text" placeholder="Name" />
                                <input className="w-1/2 ml-3" type="text" placeholder="Email" />
                            </div>
                            <input className="w-full mt-5" type="text" placeholder="Subject" />
                            <textarea className="h-fit w-full mt-5 pt-1" name="" id="" cols={30} rows={7} placeholder="Message"></textarea>
                            <button type="submit" className="self-center rounded-xl w-fit bg-primary-light mt-5 px-4 py-1">
                                <div className="flex items-center">
                                    <span className="mr-2">Submit</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                    </svg>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="text-center py-3">
                Designed & Developed by Siddharth Dhaigude
            </footer>
        </>
    )
}