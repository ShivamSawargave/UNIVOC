
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import SignIn from '../components/SignIn';
import Signout from './Signout';



function Navbar() {
  const [authUser, setAuthUser] = useAuth()


  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const navItems = (
    <>
      
        <a href="/" className="text-black md:text-white">
          {" "}
          <details className="dropdown">
            <summary className="btn md:mx-4 m-1 text-blue-500 collapse-arrow border-2 border-blue-500">
              Exploire
            </summary>
            <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              
                <a href="/Banner" className="text-black">About</a>
             
              
                <a href="/Contact" className="text-black">Contact</a>
              </div>
            
          </details>
        </a>
      
    </>
  );
  return (
    <>
      <div className="md:mx-12 bg-blue-200">
        <div className={`w-full bg-blue-100 mx-auto pb-10 md:px-20 `}>
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>

              <a
                className="font-bold text-sm cursor-pointer flex justify-between"
                href="/"
              >
                
                  <img src="logo.png" alt="" className="h-4 md:h-10  mt-1" />
                
              </a>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navItems}
                </ul>
              </div>
            </div>
            <div className="navbar-end space-x-3">
              <div className="navbar-center hidden lg:flex">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {
                authUser ? (<Signout />) : (
                  <div className="">
                    <a className="text-white bg-orange-900 p-2 rounded-md hover:bg-slate-800 duration-300" onClick={() => document.getElementById("my_modal_3").showModal()}>Signin</a>
                    <SignIn />
                  </div>
                )}
              <div className="">
                <a href="/resister"
                  className="md:text-white text-black font-bold md:bg-blue-500  md:p-2 rounded-md md:hover:bg-blue-800 duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Register for Free
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero bg-blue-300">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="image 296.png" className="h-96" />
            <div>
              <div className="tabs tabs-lifted pb-2 ">
                <a href="/" className="tab md:text-xl text-white font-semibold">Home</a>
                <a href="/JobRoll" className="tab md:text-xl text-white font-semibold">
                  Integrated Degree Programs
                </a>
                <a href="#" className="tab md:text-xl text-white font-semibold">
                  Chemicals
                </a>
              </div>
              <div className="">
                <div className="md:text-4xl text-2xl text-white pt-4">
                  Chemical
                </div>
                <div className="pt-2 md:pt-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
