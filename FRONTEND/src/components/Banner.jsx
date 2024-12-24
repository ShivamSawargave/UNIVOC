import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Banner() {
    const location = useLocation();
    const from = location.state?.pathname || "/"
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            SelectTechskills: data.SelectTechskills,
            SelectFunctionalskills: data.SelectFunctionalskills,
            SelectBehaviouralskills: data.SelectBehaviouralskills,
        }
        await axios.post(`${BACKEND_URL}/skills/skill`, userInfo).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('Our Team contact you soon');
                navigate(from, { replace: true });
            }
            localStorage.setItem("Users", JSON.stringify(res.data.appointmentus))
        }).catch((err) => {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        })
    };
    return (
        <>

            <div className='bg-blue-200 md:pt-10  md:mx-12'>
                <div className="hero min-h-screen rounded">
                    <div className="hero-content bg-blue-200 flex-col lg:flex-row">

                        <div>
                            <div className=''>
                                <h1 className="text-5xl font-semibold underline">About the Programs</h1>
                                <p className="pt-4 text-xl">
                                    The Chemical Engineering course is designed to provide students
                                    with a comprehensive understanding of the principles of
                                    chemistry, physics, and mathematics, applied to solve problems in
                                    the production of chemicals, materials, and energy. The program
                                    includes subjects like thermodynamics, fluid mechanics, reaction
                                    engineering, process control, and material science, offering both
                                    theoretical knowledge and practical skills. Students gain hands-on
                                    experience through laboratory work, project assignments, and
                                    industry internships. The course prepares graduates for diverse
                                    roles in industries such as pharmaceuticals, energy, food
                                    processing, and environmental management, equipping them with
                                    the expertise to innovate and optimize processes for sustainable
                                    development.
                                </p>
                            </div>
                            <div>
                                <div className='flex justify-evenly ' id="skillsuser">

                                    <div className='bg-blue-200 md:ml-0 md:p-4 border-2 mt-4 rounded-lg border-slate-400'>
                                        <div className='flex flex-col md:m-4 md:p-0 p-4 justify-evenly'>
                                            <select className="select md:w-full mt-2 max-w-xs" {...register("SelectTechskills", { required: true })}>
                                                <option disabled selected>Select Technical Skills</option>
                                                <option>Coding</option>
                                                <option>Design</option>
                                                <option>Project Management</option>
                                                <option>Technical writing</option>
                                                <option>Marketing</option>
                                                <option>Network Security</option>
                                                <option>Management</option>
                                                <option>Healthcare</option>
                                                <br />
                                                {errors.SelectTechskills && <span className='text-sm text-red-500'>This field is required</span>}
                                            </select>
                                            <select className="select mt-2 md:w-full max-w-xs" {...register("SelectFunctionalskills", { required: true })}>
                                                <option disabled selected>Select Functional Skills</option>
                                                <option>Communication</option>
                                                <option>Problem Solving</option>
                                                <option>Reading</option>
                                                <option>Time Management</option>
                                                <option>Creativity</option>

                                                <br />
                                                {errors.SelectFunctionalskills && <span className='text-sm text-red-500'>This field is required</span>}
                                            </select>
                                            <select className="select mt-2 md:w-full max-w-xs" {...register("SelectBehaviouralskills", { required: true })}>
                                                <option disabled selected>Select Behavioural Skills</option>
                                                <option>Emotional Intelligence</option>
                                                <option>Innovation</option>
                                                <option>Adaptivity</option>
                                                <option>Organisational Skills</option>
                                                <option>Strategy</option>

                                                <br />
                                                {errors.SelectBehaviouralskills && <span className='text-sm text-red-500'>This field is required</span>}
                                            </select>
                                        </div>


                                        <a href="MsgAppointment"><form onSubmit={handleSubmit(onSubmit)} method="dialog" className='px-4 pb-4'>
                                            <div>
                                                <button className='bg-blue-500 mt-4 px-20 py-2 rounded-md text-white hover:bg-slate-900 duration-200'>SUBMIT</button>
                                            </div>
                                        </form></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='shadow-2xl w-80 bg-white pt-10 rounded-3xl'>
                            <img
                                src="Frame 2419.png"
                                className="w-72 pl-4 rounded-lg shadow-xl" />
                            <div className='flex flex-col justify-center align-middle text-center m-6'>
                                <a href="#" className='p-2 text-white text-xl bg-blue-400 hover:bg-blue-600 rounded-3xl'>
                                    <button>Start Learning</button>
                                </a>
                                <div className=''><pre className='text-xl pb-2 mt-4'>Duration           45hrs</pre></div>
                                <hr/>
                                <div><pre className='text-xl pb-2 '>Language         English</pre></div>
                                <hr/>
                                <div><pre className='text-xl pb-2 '>Total Credits         30</pre></div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner