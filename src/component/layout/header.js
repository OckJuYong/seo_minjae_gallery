import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header-link-btn-container">
            <span className='logo'> Logo </span>
            <Link className="header-profile-btn" to="/Profile">프로필</Link>
            <Link className="header-spec-btn" to="/Spec">스펙</Link>
            <Link className="header-goals-btn" to="/Goals">목표</Link>
            <div className="header-comu-btn">게시판</div>
            <div><input type="text" className='search' placeholder='뭐가 궁금한데.'/></div>
            <Link className="header-login-btn" to="/login">로그인</Link>
        </div>
    );
}

export default Header
