import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import Footer from '../components/Common/Footer';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/Common/ReviewSlider';
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
            backgroundGradient={<div className="codeblock2 absolute"></div>}
            
            />
        </div>
         {/* Explore Section */}
         <ExploreMore />
    </div>

      {/* Section - 2 */}
              <div className='bg-pure-greys-5 text-richblack-700 '>
            <div className='homepage_bg h-[320px]'>
            <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 mx-auto'>

            <div className='lg:h-[150px]'></div>

              <div className='flex flex-row text-white gap-7 lg:mt-8' >
                <CTAButton active={true} linkto={'/signup'}>
              <div className='flex items-center gap-2'>
                  Explore Full catalog
                  <FaArrowRight/>
              </div>
                </CTAButton>
              <CTAButton active={false} linkto={'/login'}>
                <div>
                  Learn More
                </div>
              </CTAButton>
              </div>
            </div>
            
            
            </div>
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
           {/* Job that is in Demand - Section 1 */}
           <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0 ">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>
              <TimelineSection/>

              <LearningLanguageSection/>

            </div>
              </div>


      {/* Section - 3 */}
                      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white' >
                      <InstructorSection/>

                      <h2 className='text-center font-semibold text-4xl mt-10'>review from Other Learners</h2>
                      <ReviewSlider/>
                      </div>


      {/* Footer */}
            <div>
              <Footer/>
            </div>


    </div>
  )
}

export default Home
