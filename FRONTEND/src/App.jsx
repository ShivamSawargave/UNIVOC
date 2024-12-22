

import { Route,Routes } from "react-router-dom"

import Home from "./home/Home";
import Resister from "./components/Resister";
import SignIn from "./components/SignIn";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import JobRoll from "./components/JobRoll";
import Banner from "./components/Banner";
function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Resister" element={<Resister/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/JobRoll" element={<JobRoll/>}/>
      <Route path="/Banner" element={<Banner/>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
