import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import './navbar.css'

function Navbar(){
    const {isLoggedIn, logout} = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return(
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'>HealthCare I6</Link>
            </div>
            <div className='navbar-links'>
                {isLoggedIn ? (
                <>
                    <Link to= 'mypage'>MyPage</Link>
                    <button onClick={handleLogout} className='navbar-button'>로그아웃</button>
                </>
                ) : (
                <>
                    <Link to = '/login'>Sign In</Link>
                    <Link to = '/signup'>Sign Up</Link>
                </>
            )}
        </div>
        </nav>
    )
}

export default Navbar