import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { register,reset } from '../features/auth/authSlice'
import Spinner from './Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    loginId: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobile:""
  })
  const { loginId, email, password, confirmPassword, firstName, lastName,mobile} = formData

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))

  }

  useEffect(()=>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess || user){
      navigate('/login')
    }

    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('password not matching')
    }else{
      dispatch(register(formData))
      if(isSuccess){
        toast.success("user registered successfully")
      }
    }
    console.log(formData)
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className='heading'>
        <h1><FaUser /> Register</h1>
        <p>please create an Account</p>
      </section>
      <section className='form'>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className='form-control' id='firstName' name='firstName' value={firstName} placeholder='enter your first name' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="text" className='form-control' id='lastName' name='lastName' value={lastName} placeholder='enter your last name' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="text" className='form-control' id='loginId' name='loginId' value={loginId} placeholder='enter login Id' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='enter your email' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='enter your password' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='confirmPassword' name='confirmPassword' value={confirmPassword} placeholder='confirm password' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="number" className='form-control' id='mobile' name='mobile' value={mobile} placeholder='enter mobile number' onChange={onChange} />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>

      </section>
    </>
  )
}

export default Register