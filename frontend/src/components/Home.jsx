import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faUser, faCode, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './../index.css'


const Home = () => {
  const user = sessionStorage.getItem('name') || 'Guest';
  return (
    
      <section className='relative bg-black w-full h-[100vh] flex flex-col justify-between'>
        
      <video
      className="absolute top-0 left-0 w-full h-[91vh] object-cover"
      src="https://cdn.pixabay.com/video/2018/07/04/17076-278405108_large.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
        <div className='h-[130vh] flex flex-col justify-around items-start w-full px-16 py-12 z-5'>
          <div className='text-left text-white z-5'>
            <h1 className='relative text-4xl font-bold mb-[4]'>Welcome {user}!</h1>
            <p className="mb-15vh] absolute h-[12vh] outline-2 outline-white bg-black text-[10vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Unfold the New
            </p>
            <br /> <br /> <br /> <br />
            <p class="relative text-outline h-[14vh] bg-black text-[10vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              World of Coding
            </p>
            
          </div>
          <div className='flex w-full justify-around'>
            <Link to="/Hackathons">
            <div className='h-[300px] w-[300px]'>
                <a href="#" class="group relative block h-full w-full">
                  <span class="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>

                  <div
                    className=" rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#FFAAAA] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                      <FontAwesomeIcon icon={faCode} className='text-[80px] p-4 ' />

                      <h2 class="text-2xl font-medium">Hackathons</h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Compete, Code, Conquer</h3>
                      <p class="mt-4 text-sm sm:text-base">
                      Join the best minds in the industry to tackle challenges, develop innovative solutions, and push the limits of your coding skills.
                      </p>
                      <p class="mt-8 font-bold">Learn more</p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            <Link to="/Profile">
            <div className='h-[300px] w-[300px]'>
                <a href="#" class="group relative block h-full w-full">
                  <span class="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>

                  <div
                    className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#73BBC9] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                      <FontAwesomeIcon icon={faUser} className='text-[80px] p-4 ' />

                      <h2 class="text-2xl font-medium">Profile</h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Your Personal Space</h3>
                      <p class="mt-4 text-sm sm:text-base">
                      Manage your account, update your details, and explore your activities. This is your hub for all personal and professional engagements.
                      </p>
                      <p class="mt-8 font-bold">Learn more</p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            <Link to="/Code">
            <div className='h-[300px] w-[300px]'>
                <a href="#" class="group relative block h-full w-full">
                  <span class="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>

                  <div
                    className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#F7E987] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                      <FontAwesomeIcon icon={faComputer} className='text-[80px] p-4 ' />

                      <h2 class="text-2xl font-medium">Code</h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
                      <p class="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                        omnis atque culpa repellendus.
                      </p>
                      <p class="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            
            {/* <Link to="/Contribute">
              <div className='p-4 text-white h-[300px] w-[300px] rounded-lg bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg flex justify-center items-center flex-col text-[3rem] hover:cursor-pointer'>
                <FontAwesomeIcon icon={faMessage} />
                <span className='text-lg mt-4'>Community</span>
              </div>
            </Link> */}

            <Link to="/Contribute">
            <div className='h-[300px] w-[300px]'>
                <a href="#" class="group relative block h-full w-full">
                  <span class="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>

                  <div
                    className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#90B77D] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                      <FontAwesomeIcon icon={faMessage} className='text-[80px] p-4 ' />

                      <h2 class="text-2xl font-medium">Contribute</h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
                      <p class="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                        omnis atque culpa repellendus.
                      </p>
                      <p class="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          </div>
        </div>
        <footer className='w-full text-center py-4 bg-gray-900 text-white'>
          <p>&copy; All rights in the name of {'<'}HAcKer'$ PoRtaL/{'>'} ~ Published in 2024</p>
        </footer>
      </section>
    
  )
}

export default Home
