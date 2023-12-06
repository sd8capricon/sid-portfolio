import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'

import { useRef, useLayoutEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import NavBar from '../components/NavBar'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks';


const Home = () => {

  const navRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let homeCtx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from(navRef.current, {
        scrollTrigger: {
          // markers: true,
          trigger: "#home",
          start: "top top",
          endTrigger: ".terminal",
          end: "bottom top",
          scrub: true
        },
        ease: "ease-in-out",
        translateY: -1000,
      })
    }, homeRef);

    let aboutCtx = gsap.context(() => {
      const t2 = gsap.timeline()
      t2
        .from('#about .section-title', {
          scrollTrigger: {
            trigger: "#about .section-title",
            start: "center bottom",
            endTrigger: "#about .about-content",
            end: "top center",
            scrub: true
          },
          ease: "ease-in-out",
          translateX: -300,
        })
        .from('#about .portfolio-img', {
          scrollTrigger: {
            trigger: "#about .section-title",
            start: "top bottom",
            endTrigger: "#about .section-title",
            end: "bottom center",
            scrub: true
          },
          ease: "ease-in-out",
          rotate: -360,
          translateX: -500,
        })
        .from('#about .about-content', {
          scrollTrigger: {
            trigger: "#about .section-title",
            start: "top bottom",
            endTrigger: "#about .about-content",
            end: "top center",
            scrub: true
          },
          ease: "ease-in-out",
          translateX: 500,
        })
    }, aboutRef);

    return () => {
      homeCtx.revert();
      aboutCtx.revert();
    };
  }, [])

  return (
    <>
      <Head>
        <title>Siddharth Dhaigude</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Head>

      <NavBar navRef={navRef} />

      <Section sectionRef={homeRef} className='h-screen flex flex-col justify-center items-center' id='home'>
        <div className="terminal container w-fit">
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
        <SocialLinks className='mt-6' />
      </Section>

      <Section sectionRef={aboutRef} id="about">
        <div className="grid md:grid-flow-row lg:grid-flow-col lg:gap-24">
          <div className="col-auto py-7 mx-auto lg:block">
            <h2 className="section-title">Learn More <br />About Me</h2>
            <Image src="/assets/images/profile.png" alt="sid" width="150" height="150" className="portfolio-img rounded-full border-4 border-primary-lighter lg:mt-24 h-48 w-48" />
          </div>
          <div className="col-auto">
            <div className="about-content container bg-primary rounded-xl px-5 py-5">
              <h2 className="text-3xl font-semibold">Exuberant, Intuitive & Inquisitive</h2>
              <p className="mt-6">Problem Solver with Smart, Quick and Precise Googling Skill.
                Seek and you shall find!
                A passionate computer engineering student with
                affinity towards development and programming and working dominantly
                on Web Technologies.</p>
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

      <Section id='resume'>
        <h2 className="section-title">Check My Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-xl px-1 py-5 bg-primary">
          <div className="lg:col-span-1 ml-3 md:ml-9">
            <h3 className="text-2xl font-bold inline-block mb-5">Education</h3>
            <div className="container px-5 resume-item relative border-l-2 mb-5">
              <h4 className='font-bold text-primary-lighter'>Bachelor Engineering - Computer Engineering</h4>
              <span className='font-semibold'>CGPA: 8.86/10</span><br />
              <span className='text-gray-300 italic'>University of Mumbai(2020-24)</span>
              <ul className='text-gray-300 mt-5 ml-3 list-disc'>
                <li>Association of Computing Machinery(ACM) - Vice ChairPerson(2022-23), Asst. Technical Head(2021-22)</li>
                <li>Teknack Gaming Studio - Organizer, Developer & Mentor</li>
                <li>Taught and led technical training sessions, talks and workshops on various tools, technologies and softwares for the students of DBIT as well as other colleges.</li>
                <li>Sessions on topics like Web Development, Programming, Git, GitHub, Game Development, Unity, and many more.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold inline-block mb-5">Organizations</h3>
            <div className="container px-5 resume-item relative border-l-2">
              <h4 className='font-bold uppercase text-primary-lighter'>Association of Computing Machinery(ACM)</h4>
              <span className='text-gray-300 italic'>Vice Chairperson (2022-23)</span>
              <ul className='text-gray-300 mt-5 ml-3 list-disc mb-5'>
                <li>Co-ordinate and manage the Core Team and organize events, workshops and trainings for the students.</li>
                <li>Manage and coordinate all the activities of the chapter and responsible for all administrative, functional and Organizational duties in the chapter.</li>
              </ul>
              <span className='text-gray-300 italic'>Asst-Technical Head (2021-22)</span>
              <ul className='text-gray-300 mt-5 ml-3 list-disc mb-5'>
                <li>Conducted workshops, taught and trained students on topics like Git, GitHub, Web Development.</li>
                <li>Responsible for maintaining and implementing new features for the offical chapter website.</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1 px-1 ml-3 md:ml-auto">
            <div className="container">
              <h3 className="text-2xl font-bold mb-5">Projects</h3>
              <div className="container px-5 resume-item relative border-l-2 mb-5">
                <h4 className='font-bold uppercase text-primary-lighter'>ANTI-PLASTIC BRIGADE CHARITABLE TRUST</h4>
                <span className='text-gray-300 italic'>Website Developer</span>
                <ul className='text-gray-300 mt-5 ml-3 list-disc'>
                  <li>Official Website for Anti-Plastic Brigade Charitable Trust.</li>
                  <li>Developed, Designed and Deployed the website for the NGO.</li>
                  <li>Technologies: HTML, CSS, Javascript and Bootstrap.</li>
                </ul>
              </div>
              <div className="container px-5 resume-item relative border-l-2 mb-5">
                <h4 className='font-bold uppercase text-primary-lighter'>Architect Yogesh Dhaigude</h4>
                <span className='text-gray-300 italic'>Website Developer</span>
                <ul className='text-gray-300 mt-5 ml-3 list-disc'>
                  <li>Official Website for Architect Yogesh Dhaigude.</li>
                  <li>Developed, Designed and Deployed the website with a content management system.</li>
                  <li>Technologies: HTML, CSS, Javascript, ReactJS, Sanity.io</li>
                </ul>
              </div>
              <div className="container px-5 resume-item relative border-l-2 mb-5">
                <h4 className='font-bold uppercase text-primary-lighter'>COVID-19 ANALYSIS</h4>
                <span className='text-gray-300 italic'>Data Analysis</span>
                <ul className='text-gray-300 mt-5 ml-3 list-disc'>
                  <li>Analysed the trends in the covid cases of Andhra Pradesh State, India.</li>
                  <li>Applied regression algorithm on Tested vs Confirmed cases, Confirmed vs Recovered cases, Confirmed vs Deceased cases and Confirmed cases vs Timeperiod.</li>
                  <li>Technologies: Python, Numpy, Pandas, Matplotlib, Sk-learn</li>
                </ul>
              </div>
              <div className="container px-5 resume-item relative border-l-2 mb-5">
                <h4 className='font-bold uppercase text-primary-lighter'>STUDENT ATTENDANCE SYSTEM</h4>
                <span className='text-gray-300 italic'>App Development</span>
                <ul className='text-gray-300 mt-5 ml-3 list-disc'>
                  <li>A system for teachers to record student’s attendance which would simplify tracking, analyzing student’s attendance.</li>
                  <li>Implemented feature includes generating defaulters list, attendance analysis and marking/updating attendance.</li>
                  <li>Technologies: Flutter, DjangoREST framework, Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <h2 className="section-title">Contact Me</h2>
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

      <footer className="text-center py-3">
        Developed by Siddharth Dhaigude
      </footer>
    </>
  )
}

export default Home;