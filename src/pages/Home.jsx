import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
const Home = () => {
  return (
    <div>
      {/* Section - 1 */}
    <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">

    <Link to= {"/signup"}>
        <div className='mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit '>
            <div className='flex flex-row mt-16 p-1 items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                <p>Become an Instructor</p>
                <FaArrowRight/>
            </div>
        </div>

    </Link>
    <div className='text-center font-semibold text-4xl mt-7' >
        Empower Your Future With 
        <HighlightText text = {"Coding Skills"}/>
    </div>

    <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className='flex flex-row gap-7 mt-8'> 
            <CTAButton active= {true} linkto={"/signup"}>
                Learn More
            </CTAButton>

            <CTAButton active= {false} linkto={"/login"}>
                Book a Demo
            </CTAButton>
        </div>
 {/* Video */}
        <div className="w-11/12 h-11/12 mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}

        <div>
            <CodeBlocks
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your 
                        <HighlightText text={"Coding Skills"}/> with our online courses
                    </div>
                }
                subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
            
            />
        </div>


            {/* Code Section 2 */}
            <div>
            <CodeBlocks
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your 
                        <HighlightText text={"Coding Skills"}/> with our online courses
                    </div>
                }
                subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
            
            />
        </div>
    </div>

      {/* Section - 2 */}



      {/* Section - 3 */}



      {/* Footer */}



    </div>
  )
}

export default Home
