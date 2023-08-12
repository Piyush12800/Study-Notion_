import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Navbar from "./components/Common/Navbar";
import Login from "./pages/Login";
import Signup from './pages/Signup'
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
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
  </Routes>
  </div>
  );
}

export default App;
