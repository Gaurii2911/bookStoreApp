import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout sucessfully!");
             window.location.reload();
           
          setTimeout(()=>{
           
           
        windosw.location.reload();
          },3000)
            
        } catch (error) {
            toast.error("error:"+error.message);
               setTimeout(()=>{},2000);
        }
    }
  return (
    <div>
      <button className="btn bg-red-500 text-white px-3 py-2 rounded-md  curosor-pointer"
      onClick={handleLogout}>
        Logout
        </button>
    </div>
  )
}

export default Logout
