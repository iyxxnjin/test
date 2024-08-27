import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // 스타일링을 위한 CSS 파일

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [registrationError, setRegistrationError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setRegistrationSuccess(true);
                setRegistrationError('');
                console.log('Registration successful');
            } else {
                setRegistrationSuccess(false);
                setRegistrationError(data.message);
                console.error('Registration failed:', data.message);
            }
        } catch (error) {
            setRegistrationSuccess(false);
            setRegistrationError('An error occurred during registration');
            console.error('Error during registration:', error);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(password === e.target.value);
    };

    return (
        <div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <h2>회원가입</h2>
                        <hr className="divider" />
                        <label>아이디</label>
                        <input
                            type='text'
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
                    <div className="input-container">
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                            required
                        />
                        {!passwordMatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
                        <br />
                    </div>
                    <button type="submit" className="login-button">회원가입</button>
                    {registrationSuccess &&
                    <p style={{ color: 'green' }}>
                      회원가입에 성공했습니다. <Link to ='/login'>로그인창으로 가기</Link>
                      </p>}
                    {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
                    <hr className="divider" />
                    {/* <div className="input-container">
                        <button type="button" className="social-login google-login">
                            구글로 시작하기
                        </button>
                        <button type="button" className="social-login kakao-login">
                            카카오로 시작하기
                        </button>
                        <button type="button" className="social-login naver-login">
                            네이버로 시작하기
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    );
}
