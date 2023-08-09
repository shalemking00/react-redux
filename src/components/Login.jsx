import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useState } from 'react'
import Spinner from './Spinner'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login,reset } from '../features/auth/authSlice'



const Login = () => {
  const [formData, setFormData] = useState({
    loginId: "",
    password: ""
  })
  const { loginId,  password } = formData

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))

  }

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const {isError,isLoading,isSuccess,message}=useSelector((state)=>state.auth)

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      dispatch(login(formData))
      if(isSuccess){
        toast.success("User logged in successfully")
      }
      navigate("/")
      
    } catch (error) {
      toast.error(error)
    }
    
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt/> Login</h1>
        <p>please Login to your Account</p>
      </section>
      <section className='form'>
        <form action="" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input type="text" className='form-control' id='loginId' name='loginId' value={loginId} placeholder='enter your first name' onChange={onChange} />
          </div>
          
          
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='enter your password' onChange={onChange} />
          </div>
          
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Login</button>
          </div>
        </form>

      </section>
    </>
  )

}

export default Login