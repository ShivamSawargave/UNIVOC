import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'


function Signout() {
    const [authUser, setAuthUser] = useAuth()
    const handleSignout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Signout Successfully")

            setTimeout(() => {
                window.location.reload();
            }, 3000)
        } catch (error) {
            toast.error("Error: " + error.message)

        }
    }
    return (
        <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={ handleSignout } >Signout</button>
    </div>
    )
}

export default Signout