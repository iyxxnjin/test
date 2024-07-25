import React, { createContext, useState, useContext } from 'react';

// 1.AuthContext 생성 : 인증 관련 정보를 관리하는 컨텍스트 생성
const AuthContext = createContext();

// 2. AuthProvider 컴포넌트 : 자식 컴포넌트들에게 인증 상태와 인증 관련 함수를 제공
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 3. login, logout 함수 : 사용자가 로그인/아웃 할 때 호출하는 함수로, 상태를 true/false로 변경
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  // 4. 자식 컴포넌트들에게 isLoggedIn, login, logout 값을 제공
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 : AuthContext를 쉽게 사용할 수 있게 하는 커스텀 훅
export const useAuth = () => useContext(AuthContext);
