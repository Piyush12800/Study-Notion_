import { useEffect } from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

import Home from './pages/Home'
import Navbar from "./components/Common/Navbar";
import Login from "./pages/Login";
import Signup from './pages/Signup'
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dahsboard/MyProfile";
import Error from "./pages/Error";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import { getUserDetails } from "./services/operations/profileAPI"
import { ACCOUNT_TYPE } from "./utils/constants"
import EnrolledCourses from "./components/core/Dahsboard/EnrolledCourses"
import Settings from "./components/core/Dahsboard/Settings"
import AddCourse from "./components/core/Dahsboard/Add Course"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
  <Navbar/>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    {/* Open Route - for Only Non Logged in User */}
    <Route
          path="login"
          element={
            <OpenRoute>

              <Login />
            </OpenRoute>
            
          }
        />
         <Route
          path="signup"
          element={
            <OpenRoute>

              <Signup/>
            </OpenRoute>
            
          }
        />
       
         <Route
          path="forgetpassword"
          element={
            <OpenRoute>

              <ForgotPassword/>
            </OpenRoute>
            
          }
        />
         <Route
          path="update-password/:id"
          element={
            <OpenRoute>

              <UpdatePassword/>
            </OpenRoute>
            
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>

              <VerifyEmail/>
            </OpenRoute>
            
          }
        />
         <Route
          path="about"
          element={
            <OpenRoute>

              <About/>
            </OpenRoute>
            
          }
        />
          {/* Private Route - for Only Logged in User */}
          <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} /> 
           <Route path="dashboard/settings" element={<Settings/>}/>
           <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} /> 
          {/* <Route path="dashboard/Settings" element={<Settings />} />
          {/* Route only for Instructors */}
          {user?.accountType=== ACCOUNT_TYPE.INSTRUCTOR &&(
            <>
            {/* <Route path="dashboard/instructor" element={<Instructor />} /> */}
              {/* <Route path="dashboard/my-courses" element={<MyCourses />} /> */}
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                // element={<EditCourse />}
              />
            </>
          )
          }
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              {/* <Route path="/dashboard/cart" element={<Cart />} /> */}
            </>
          )}
          {/* <Route path="dashboard/settings" element={<Settings />} /> */}
      
                  {/* Private Route - for Only Logged in User */}
     


        <Route path="*" element={<Error/>}/>
  </Routes>
  </div>
  );
}

export default App;
