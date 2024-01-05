import Head from 'next/head';
import { FaGlobeAmericas, FaCode, FaChild, FaProjectDiagram } from 'react-icons/fa';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import TypewriterEffect from './TypewriterEffect';

import instagramIcon from '../public/instagram.svg';
import linkedinIcon from '../public/linkedin.svg';
import jared from '../public/Jared.png';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})

export default function Home() {
  return (

    <div>
      <Head>
        <title>Jared Campos Portfolio</title>
        <meta name='description' content='Home page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`px-10 bg-[#FFFCF2] ${roboto.className} md:px-20 lg:px-40`}>
        <section className='min-h-screen'>
          <nav className='py-14 mb-12 flex justify-between'>
            <h1 id="typewriter" className='text-[#403D39] text-lg '>Made by Jared Campos</h1>
            <ul className='flex items-center'>
              <li>
                <FaGlobeAmericas className='cursor-pointer text-2xl ' color='#403D39' />
              </li>
              <li>
                <a href="resume.pdf" download className="relative rounded px-4 py-2 ml-8 overflow-hidden group bg-[#35844F] hover:bg-gradient-to-r hover:from-[#35844F] hover:to-[#4FAB6D] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4FAB6D] transition-all ease-out duration-300">
                <span className="absolute right-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Resume</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center pt-10'>
            <TypewriterEffect text="Hi, I&apos;m Jared Campos" speed={150} />
            <h4 className='text-[#403D39] text-2xl font-medium my-8 md:text-4xl'>Software Developer</h4>
            <p className='text-[#403D39] max-w-3xl mx-auto'>
              As a recent graduate from
              Coding Dojo&apos;s Software Development program, 
              I&apos;m embarking on an exciting journey to forge my career.
              Join me as I delve into what I&apos;ve learned
              as I take my first steps in the vibrant world of technology!
            </p>
            <div className='flex justify-center my-10'>
              <a href='https://www.linkedin.com/in/jared-campos-04b943135/' target='_blank' rel='noreferrer' className='ml-8'>
                <Image src={linkedinIcon} alt='linkedin icon' width={50} height={50} className='cursor-pointer hover:scale-110 ease-in duration-300' />
              </a>
              <a href='https://www.instagram.com/jared0215/' target='_blank' rel='noreferrer' className='ml-8'>
                <Image src={instagramIcon} alt='instagram icon' width={50} height={50} className='cursor-pointer hover:scale-110 ease-in duration-300' />
              </a>
            </div>
            <Image src={jared} alt='jared campos' width={200} height={200} className='cursor-pointer mx-auto relative hover:scale-110 ease-in duration-300 pt-10' />
          </div>

        </section>
        
        {/* Cards */}
        <section className='min-h-screen'>

          {/* About Me */}  
          <div className='lg:flex gap-20'>
            <div className='shadow-xl my-20 p-10 rounded-3xl flex-1 hover:scale-110 ease-in duration-300'>
              <FaChild className='text-[#35844F] text-4xl mx-auto' />
              <h3 className='text-[#403D39] text-2xl font-bold my-4 text-center'>About me</h3>
              <p className='text-[#403D39] max-w-3xl'>
                I'm a software developer with a passion for learning and creating.
                I'm always looking for new ways to challenge myself and expand my knowledge.
                I'm a firm believer in the power of technology to change the world for the better.
                I'm excited to be a part of the future of technology and to be able to contribute to it.
              </p>
            </div>

            {/* Technical Skills */}
            <div className='shadow-xl my-20 p-10 rounded-3xl flex-1 hover:scale-110 ease-in duration-300'>
              <FaCode className='text-[#35844F] text-4xl mx-auto' />
              <h3 className='text-[#403D39] text-2xl font-bold my-4 text-center'>Technical Skills</h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                  <ul className='text-[#403D39] text-center'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>Responsive Web Design</li>

                  </ul>
                </div>
                <div className='flex flex-col'>
                  <ul className='text-[#403D39] text-center'>
                    <li>Python</li>
                    <li>Bcrypt</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Git</li>
                    <li>Npm</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Github Projects */}
            <div className='shadow-xl my-20 p-10 rounded-3xl flex-1 hover:scale-110 ease-in duration-300'>
              <FaProjectDiagram className='text-[#35844F] text-4xl mx-auto' />
              <h3 className='text-[#403D39] text-2xl font-bold my-4 text-center'>Github Projects</h3>
              <ul className='text-[#403D39] text-center'>
                <li>
                  <a href='https://github.com/sarahflynn-dev/thriftlemore' target='_blank' className='text-[#35844F] hover:text-[#FFB95B]'>Thriftlemore</a>
                </li>
                <li>
                  <a href='https://github.com/jared0215/Poker_Earnings' target='_blank' className='text-[#35844F] hover:text-[#FFB95B]'>Poker Earnings</a>
                </li>
                <li>
                  <a href='https://github.com/jared0215/Portfolio' target='_blank' className='text-[#35844F] hover:text-[#FFB95B]'>Portfolio</a>
                </li>
              </ul>
            </div>
          </div>

        </section>

      </main>
    </div>
  )
}