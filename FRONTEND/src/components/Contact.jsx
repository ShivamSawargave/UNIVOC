import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Contact() {

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
            fullname: data.fullname,
            mobilenumber: data.mobilenumber,
            email: data.email,
            state: data.state,
            city: data.city,
            collegename: data.collegename,
            message:data.message
        }
        await axios.post(`${BACKEND_URL}/contactus/contact`, userInfo).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('Our Team contact you soon');
                navigate(from, { replace: true });
            }
            localStorage.setItem("Users", JSON.stringify(res.data.contactus))
        }).catch((err) => {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        })
    };

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='flex flex-col'>
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Contact Us</h1>
                            <p className="py-6 text-xl">
                                Reach out to us. Our Support team is to assist you.
                            </p>
                        </div>
                        <div>
                            <a href="tel:84483 73884"><div className='text-slate-700 flex flex-row md:pt-2 pl-4 text-xl'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6 w-6 pr-1'>{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#f4f6fb" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg> +91 84483 73884</div></a>
                            <a href="mailto:hrd@theunivoc.com"><div className='text-slate-700 flex flex-row md:pt-2 pl-4 text-xl'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-7 w-7 pr-1'>{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#e8ecf2" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>hrd@theunivoc.com</div></a>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body bg-base-200">
                            <div className='bg-blue-400 ml-2 p-4 rounded-3xl'>
                                <div className='flex md:flex-row flex-col m-2 justify-evenly'>

                                </div>
                                <div className='flex flex-col m-2 justify-evenly'>
                                    <label className="input input-bordered flex m-2 items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                        </svg>
                                        <input type="text" className="grow" placeholder="Your Name" {...register("fullname", { required: true })} />
                                        <br />
                                        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                    <label className="input input-bordered flex m-2 items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className='h-4 w-4 opacity-70'
                                            viewBox="0 0 512 512">{ /*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                            <path fill="#4e5665" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                        </svg>
                                        <input type="number" className="grow" placeholder="Mobile Number" {...register("mobilenumber", { required: true })} />
                                        <br />
                                        {errors.mobilenumber && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col m-2 justify-evenly'>
                                    <label className="input input-bordered flex m-2 items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path
                                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
                                        <br />
                                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                    <label className="input input-bordered flex m-2 items-center gap-2">

                                        <input type="text" className="grow" placeholder="State" {...register("state", { required: true })} />
                                        <br />
                                        {errors.state && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                    <label className="input input-bordered flex m-2 items-center gap-2">

                                        <input type="text" className="grow" placeholder="City" {...register("city", { required: true })} />
                                        <br />
                                        {errors.city && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                    <label className="input input-bordered flex m-2 items-center gap-2">

                                        <input type="text" className="grow" placeholder="Enter Your School/College Name" {...register("collegename", { required: true })} />
                                        <br />
                                        {errors.collegename && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                    <label className='pl-4 pt-2'>
                                        <textarea className="textarea textarea-ghost bg-white w-60" placeholder="Your Message" {...register("message", { required: true })}></textarea>
                                        <br />
                                        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                                    </label>
                                </div>
                                <a href="/"><form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                    <div>
                                        <button className='bg-slate-700 m-4  px-20 py-2 rounded-md text-white hover:bg-slate-900 duration-200'>Contact Us</button>
                                    </div>
                                </form></a>
                            </div>

                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Contact