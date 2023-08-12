import React from 'react'
import Template from '../components/core/Auth/Template'
import signupImg from '../assets/Images/signup.webp'

function Signup() {
  return (
    <Template 
    title="Join the millions learning to code with Studynotion for free"
    desc1='Build Skills for today , tomorrow, and beyond'
    desc2 = 'Education to your future-proof career.'
    image={signupImg}
    formtype='signup'
 
  />
  )
}

export default Signup