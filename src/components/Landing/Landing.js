/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MegaphoneIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// Assets
import codebg from '../../assets/images/code.svg';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' }
]

const Landing = () => {

  return (
  <>
    {/* HEADER BANNER */}
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden font-bold">I am open to work!</span>
              <span className="hidden md:inline font-light">Casually screaming this... <span className="font-bold">I am open to work!</span></span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-3 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 xs:hidden"
            >
              Let's Connect!
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* END HEADER BANNER */}

    {/* HERO SECTION */}
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="/">
                      <span className="sr-only">Kane Toomer</span>
                      <img
                        alt="My Face"
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-900">
                    Connect with Me!
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="My Face"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Connect w/ Me!
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hey, my name is</span>{' '}
                <span className="block text-indigo-600 xl:inline">Kane!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I'm a fullstack developer from Las Vegas!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Download my Resume!
                  </a>
                </div>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={codebg}
          alt=""
        />
      </div>
    </div>
    {/* END HERO SECTION */}

    {/* ABOUT SECTION */}
    <div className="bg-slate-900 py-12" id="about">
      <div className="my-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className='grid grid-rows-1'>
            <div className='md:grid lg:grid-cols-2 md-grid-cols-1'>

              {/* PROFESSIONAL IMAGE */}
              <div></div>

              {/* SYNOPSIS */}
              <div className="">
                <div className='sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 '>
                  <h2 className="text-lg font-semibold text-indigo-300">Who is Kane Toomer</h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                    A bit about me...
                  </p>
                </div>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  My name is Kane Toomer. I'm a fullstack developer from Las Vegas, NV.
                  <br />
                  <br />
                  I am someone who (for many years) loved to design random apps and code them for fun. I started programming in high school and this carried over for much of my undergrad before pursuing other efforts. Now I am a career changer who has decided to take the first step in turning my hobby into a career. 
                  {/* <br />
                  <br />
                  Here are a few technologies I’ve been working with recently: */}
                  <br />
                  <br />
                  I have experience with <span className='font-bold text-indigo-300'>HTML</span>, <span className='font-bold text-indigo-300'>CSS</span> & <span className='font-bold text-indigo-300'>JavaScript</span>. I use frameworks like <span className='font-bold text-indigo-300'>React.js</span> & <span className='font-bold text-indigo-300'>React Native</span> (w/ <span className='font-bold text-indigo-300'>Redux</span> for state management). On the backend I like to use <span className='font-bold text-indigo-300'>Firebase</span> (because its easy to implement but scalable). However, I have experience with <span className='font-bold text-indigo-300'>Node.js</span>, <span className='font-bold text-indigo-300'>Express.js</span>, <span className='font-bold text-indigo-300'>Knex.js</span> & <span className='font-bold text-indigo-300'>PostgreSQL</span>.
                  </p>
                  {/* <div className='mt-5'>
                    <div className='grid grid-rows-1'>
                      <div className='grid grid-cols-2'>
                        <ul className='text-base text-gray-500'>
                          <li className='font-bold text-indigo-300'>Javascript (ES6+)</li>
                          <li className='font-bold text-indigo-300'>React</li>
                          <li className='font-bold text-indigo-300'>React Native</li>
                          <li className='font-bold text-indigo-300'>Redux</li>
                          <li className='font-bold text-indigo-300'>Firebase</li>
                        </ul>
                        <ul className='text-base text-gray-500'>
                          <li className='font-bold text-indigo-300'>Node.js</li>
                          <li className='font-bold text-indigo-300'>Express.js</li>
                          <li className='font-bold text-indigo-300'>Knex.js</li>
                          <li className='font-bold text-indigo-300'>PostgreSQL</li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
              </div>
              
    
              </div>
            
            </div>
        </div>
      </div>
      {/* END ABOUT SECTION */}

      {/* PROJECTS SECTION */}
      <div className="bg-white py-12" id="projects">
          <div className="my-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg text-center font-semibold text-indigo-600">Projects</h2>
            <p className="text-center mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
              
            </p>
          </div>
      </div>
      {/* END PROJECTS SECTION */}  

      {/* CONTACT SECTION */}
      <div className="bg-gray-100 py-10" id='contact'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className='my-10'>
            <h1 className="mb-5 pb-5 font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-6xl">I am open to</span>
              <span className="block  text-6xl text-indigo-600">new possibilities!</span>
            </h1>
            
            <p className='text-base mb-10 pb-10 sm:text-lg md:text-xl'>Feel free to connect with me via LinkedIn or email me!</p>
            
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://www.linkedin.com/in/kanetoomer/"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  <FontAwesomeIcon className='mr-2' icon={faLinkedin} />
                  LinkedIn
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="mailto:kanetoomer@yahoo.com"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END CONTACT SECTION */}

      {/* FOOTER */}
      <div className="bg-slate-900 py-5 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='mt-5 md:mt-10'>
            <a href="/">
              <span className="sr-only">Kane Toomer</span>
              <img
                alt="My Face"
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              />
            </a>
            <h1 className='mt-5 font-bold leading-8 tracking-tight text-white sm:text-3xl'>Kane Toomer</h1>
            <p className="mt-3 mb-10 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Fullstack Developer</p> 
          </div>

          <hr className='my-10' />
          
          <div className='grid grid-rows-1'>
            <div className='sm:grid md:grid-cols-2 sm-grid-cols-1'>
              <div className="mb-5 md:block space-x-8 pr-4">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-white hover:underline">
                    {item.name}
                  </a>
                ))}
                <a href="#" className="font-medium text-white hover:underline">
                  Download my Resume
                </a>
              </div>

              <div className='block inline flex md:justify-end justify-items-center'>
                <a href="https://www.linkedin.com/in/kanetoomer/" className='text-white text-2xl mr-5'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="https://github.com/kane-toomer" className='text-white text-2xl'>
                  <FontAwesomeIcon icon={faGithub} className='text-white text-2xl mr-5' />
                </a>

                <a href="mailto:kanetoomer@yahoo.com" className='text-white text-2xl'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-white text-2xl' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FOOTER */}

    </>
  )
}

export default Landing;
