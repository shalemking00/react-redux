import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout,reset } from '../features/auth/authSlice'

const Header = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {token}=useSelector((state)=>state.auth)

    const handleLogout=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate("/login")
    }

  return (
    <div>
        <header className='header'>
            <div className="logo">
                <Link to='/'>Shalem Store</Link>
            </div>
            {token ? (<ul>
                <li>
                    <Link to="/cart">My cart</Link>
                </li>
                <li>
                    <Link to="/orders">Orders </Link>
                </li>
                <li>
                    <button  className='btn' onClick={handleLogout}><FaSignOutAlt/> Logout</button>
                </li>
                
            </ul>):(<ul>
                <li>
                    <Link to="/register"><FaUser/> Register</Link>
                </li>
                <li>
                    <Link to="/login"><FaSignInAlt/> Login</Link>
                </li>
            </ul>)}
            

        </header>
    </div>
  )
}

export default Header