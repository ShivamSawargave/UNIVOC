import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


function Resister() {
    const location=useLocation();
    const from= location.state?.pathname || "/"
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
        const userInfo = {
            fullname: data.fullname,
            mobilenumber: data.mobilenumber,
            email: data.email,
            password: data.password
        }
        await axios.post(`${BACKEND_URL}/user/resister`,userInfo).then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Resister Successfully');
                navigate(from,{replace:true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
           if(err.response){
            console.log(err);
            toast.error("Error: " + err.response.data.message);
           }
        })
    };
  return (
    <>
         <div className='flex h-screen items-center justify-center '>
                <div id="my_modal_3" className="w-[600px]">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">Resister</h3>
                        {/*name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input  {...register("fullname", { required: true })} type="text" placeholder='Enter your Fullname' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/*number */}
                        <div className='mt-4 space-y-2'>
                            <span>Mobile Number</span>
                            <br />
                            <input  {...register("mobilenumber", { required: true })} type="Number" placeholder='Enter your Mobile Number' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.mobilenumber && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/*email*/}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input  {...register("email", { required: true })} type="Email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/*password*/}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input  {...register("password", { required: true })} type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/*button */}
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Resister;