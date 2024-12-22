import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

const BACKEND_URL=import.meta.env.VITE_BACKEND_URL
function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
    const userInfo = {
        email: data.email,
        password: data.password
      }
      await axios.post(`${BACKEND_URL}/user/signin`, userInfo).then((res) => {
        console.log(res.data)
        if (res.data) {
          toast.success('Sign in Successfully');
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          },2000)
          
        }
        
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(()=>{},3000)
        }
      })
    }
  
  return (
    <div>
    <dialog id="my_modal_3" className="modal bg-slate-300">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
        </form>
        <h3 className="font-bold text-lg text-black">Sign In</h3>
        {/*email*/}
        <div className='mt-4 space-y-2 text-black'>
          <span>Email</span>
          <br />
          <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} />
          <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        {/*password*/}
        <div className='mt-4 space-y-2 text-black'>
          <span>Password</span>
          <br />
          <input  {...register("password", { required: true })} type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
          <br />
          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        {/*button */}
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className='flex justify-around mt-4 text-black'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' >Sign In</button>
            <p>Not registered<Link to="/Resister" className='underline text-blue-500 cursor-pointer'>Resister</Link></p>
          </div>
        </form>
      </div>
    </dialog>
  </div>
  )
}

export default SignIn