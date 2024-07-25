import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import './login.css'; // 스타일링을 위한 CSS 파일

export default function Login() {

  // 각 상태는 사용자가 입력한 값을 관리하며, 초기값은 빈 문자열임
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // useAuth 훅을 통해 login 함수를 가져옴
  const { login } = useAuth()
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  // 폼 제출 시 호출되는 함수
  const handleSubmit = async (event) => {
    // 폼의 기본 제출 동작을 막음
    event.preventDefault();

    try{
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
  });
  
  const data = await response.json()
  if (response.ok) {
    login()
    navigate('/mainpage_login')
  } else {
    setLoginError(data.message);
    }
  } catch (error) {
    setLoginError('An error occurred during login')
  }
}

  return (
    <div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <h2>로그인</h2>
          <hr className="divider" />
          <label>아이디</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='ID'
            required 
          />
        </div>
        <div className="input-container">
          <label>비밀번호</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            required 
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <hr className="divider" />
        <div className="input-container">
        <button type="button" className="social-login google-login">
            구글 로그인
          </button>
          <button type="button" className="social-login kakao-login">
            카카오 로그인
          </button>
          <button type="button" className="social-login naver-login">
            네이버 로그인
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
