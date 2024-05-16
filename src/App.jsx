import "./App.css";
import { FaGithub, FaLink ,FaFacebook,FaLinkedin,FaArrowUp} from "react-icons/fa";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'

import TypeIt from "typeit";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  // useEffect(() => {
  //   new TypeIt("#strings", {
  //     strings: ["Full Stack Developer" , "Backend Developer"],
  //     speed: 50,
  //     waitUntilVisible: true,
  //   }).go();
  // }, []);
  
  return (
    <>
      <div className="container m-auto">
        <div className="flex flex-row justify-between px-4 py-6">
          <div>
            <h1 className="font-bold text-2xl">My Portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-9">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white hover:underline">Projects</a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-400 hover:text-white hover:underline">Technologies</a>
              </li>
              <li>
                <a href="#aboutme" className="text-gray-400 hover:text-white hover:underline">Skills</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1xIi3lXMCcxta3bcOLjHvznXS2kLqAaIh/view?usp=drive_link" className="text-gray-400 hover:text-white hover:underline">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="flex items-center justify-center">
        <div className="container mx-auto px-4 text-center mt-20 mb-10">
          <h1 className="font-bold text-5xl">Hello, I am Debanjan Mukherjee</h1>
          <h1  className="font-bold text-3xl my-8 text-blue-500 overflow-hidden whitespace-nowrap">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Your Full stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Your Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Your Backend Developer")
                  .start();
              }}/>
          </h1>
          <p className="mt-4 text-gray-600">
            Crafting seamless digital experiences from front to back. I specialize in MERN stack development to bring your website vision to vibrant life.
          </p>
        </div>
      </section>


      <main>

        <section id="projects">
          <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-md overflow-hidden shadow-md">
                <img src="https://i.postimg.cc/6qzS500r/Screenshot-2023-09-09-at-10-27-44-PM.png" className="w-full h-auto" alt="Agri Buy" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Agri Buy</h3>
                  <p className="text-gray-600 mb-2">Marketplace for Farmers</p>
                  <p className="text-gray-600 mb-2">Where they can check crop prices and suitable weather for farming.</p>
                  <div className="flex justify-between">
                    <button className="flex items-center px-4 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full"><FaLink className="mr-2" /><a href="agri-buy.vercel.app">Live Preview</a></button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full"><FaGithub className="mr-2" /><a href="https://github.com/BRAVO23111/Agri-BUY"> GitHub</a></button>
                  </div>
                </div>
              </div>
              <div className="border rounded-md overflow-hidden shadow-md">
                <img src="https://i.postimg.cc/sfcDhCHc/Screenshot-2024-05-16-at-12-17-32-PM.png" className="w-full h-auto" alt="Med Help" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Med Help</h3>
                  <p className="text-gray-600 mb-2">Marketplace for Farmers</p>
                  <p className="text-gray-600 mb-2">MedHelp is a web application designed to facilitate the booking of appointments with local doctors.</p>
                  <div className="flex justify-between">
                    <button className="flex items-center px-4 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full"><FaLink className="mr-2" /><a href="medhelp-v1.vercel.app/">Live Preview</a></button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full"><FaGithub className="mr-2" /><a href="https://github.com/BRAVO23111/Medhelp-2">GitHub</a></button>
                  </div>
                </div>
              </div>
              <div className="border rounded-md overflow-hidden shadow-md">
                <img src="https://i.postimg.cc/gcymGst6/Screenshot-2024-05-16-at-1-07-19-PM.png" className="w-full h-auto" alt="Med Help" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">ChATTY</h3>
                  <p className="text-gray-600 mb-2">Realtime Chat Application</p>
                  <p className="text-gray-600 mb-2">Users can create rooms to talk in groups</p>
                  <div className="flex justify-between">
                    <button className="flex items-center px-4 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full mt-1"><FaLink className="mr-2" /><a href="https://github.com/BRAVO23111/Chat-and-notification-feature-codepth">Live Preview</a></button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full"><FaGithub className="mr-2" /><a href="https://github.com/BRAVO23111/Chat-and-notification-feature-codepth">Github</a></button>
                  </div>
                </div>
              </div>
              <div className="border rounded-md overflow-hidden shadow-md">
                <img src="https://i.postimg.cc/tC6LyNqV/Screenshot-2024-04-11-at-9-53-54-PM.png" className="w-full h-auto" alt="Med Help" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Recipes</h3>
                  <p className="text-gray-600 mb-2">Recipe Blog Website</p>
                  <p className="text-gray-600 mb-2">Users can create their favourite recipes and can save the recipes created by other peoples</p>
                  <div className="flex justify-between">
                    <button className="flex items-center px-4 py-2 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full mt-1"><FaLink className="mr-2" /> Live Preview</button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full"><FaGithub className="mr-2" /><a href="https://github.com/BRAVO23111/Recipe-View">GitHub</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C++</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">NextJS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">ExpressJs</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MongoDB</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">NodeJs</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  C++
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  JAVA
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Redux
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Recoil
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Docker
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Figma
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                 AWS
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                 Vercel
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Firebase
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  WebSockets
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                Pursuing BTech in Computer Science and Engineering from IEM Kolkata
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Web development course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Qualified Internal Round of Smart India Hackathon and Got Selected For Diversion 2023
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                 Voluntereed Many Workshops For the GDSC ,Got certified for Amazon Cloud Practioner Essentials
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  Build Projects and actively seeking internships in Full Stack development
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
  <div className="container m-auto flex justify-between px-4 py-6">
    <div>
      <p className="text-gray-300 text-xl">Copyright @ 2024</p>
    </div>
    <div>
      <ul className="flex gap-4">
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook className="w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="https://github.com/BRAVO23111">
            <FaGithub className="w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/debanjan-mukherjee-1b8257170/">
            <FaLinkedin className="w-9 h-9" />
          </a>
        </li>
      </ul>
    </div>
    </div>
    </footer>
    {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <FaArrowUp  color="purple" className="h-10 text-xl ml-10 rounded-lg " /> {/* Replace <img src={ArrowDown} /> with <FaArrowDown /> */}
          </button>
        )
      }
  


    </>
  );
}

export default App;
