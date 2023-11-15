import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props); //생성자 호출 props전달
    this.state = {
      isLoggedIn: false, //컴포넌트의 초기 상태 정의
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = (
        <button
          onClick={this.handleLogoutClick}
          className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
        >
          로그아웃
        </button>);
    } else {
        button = (
          <button
            onClick={this.handleLoginClick}
            className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
          >
            로그인
          </button>);
    }

    return (
      <div className="flex items-center text-white">
        <div>
          {isLoggedIn ? <p>환영합니다!</p> : <p>로그인을 해주세요.</p>}
          {button}
        </div>
      </div>
    );
  }
}

export default LoginControl;
