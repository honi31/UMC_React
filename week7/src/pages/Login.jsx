import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('이메일 형식이 올바르지 않습니다.');
      return;
    }

  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 border border-gray-300 rounded-md p-6">
        <h2 className="text-xl mb-4">이메일과 비밀번호를 입력해주세요.</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">이메일 주소</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div>
            <label htmlFor="password" className="block mb-1">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1 mb-4"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md">확인</button>
          </form>
      </div>
    </div>
  );
};

export default Login;