import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "../reducer/userSlice.js";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();
  const LOGIN_API_KEY = "http://localhost:8000/user/login"

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Loading...");

    let body = {
      id: id,
      pw: password
    };
    try {
      const response = await axios.post(LOGIN_API_KEY, body);
      setLoading(false);
      setTimeout(() => setMsg(""), 1500);
      const code = response.data.code;
      alert("로그인 성공!")
      if (code === 400) {
        alert("ID 또는 비밀번호를 입력하세요!");
      } else if (code === 401) {
        alert("존재하지 않는 ID입니다.");
      } else if (code === 402) {
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        dispatch(loginUser(response.data.userInfo));
      }
    } catch (error) {
      setLoading(false);
      setMsg("");
      alert("로그인 중 오류가 발생했습니다.");
    }

    setLoading(true);
}
    
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 border border-gray-300 rounded-md p-6">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="id" className="block mb-1 font-bold">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-bold">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1 mb-4"
            />
          </div>
          <button disabled={loading} type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md">
            로그인
          </button>
          <div className='msg'>{msg}</div>
          </form>
      </div>
    </div>
  );
};

export default Login;