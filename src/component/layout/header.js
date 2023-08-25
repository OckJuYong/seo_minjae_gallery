import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    return (
        <div className='header-link-btn-container'>
            <Link className={`logo ${isActive('/layout')}`} to="/layout"> Logo </Link>
            <Link className={`header-link-btn header-profile-btn ${isActive('/Profile')}`} to="/Profile">프로필</Link>
            <Link className={`header-link-btn header-spec-btn ${isActive('/Spec')}`} to="/Spec">스펙</Link>
            <Link className={`header-link-btn header-goals-btn ${isActive('/Goals')}`} to="/Goals">목표</Link>
            <Link className={`header-link-btn header-comu-btn ${isActive('/')}`} to="/">게시판</Link>
            <div><input type="text" className='search' placeholder='뭐가 궁금한데.'/></div>
            <Link className={`header-link-btn header-login-btn ${isActive('/login')}`} to="/login">로그인</Link>
        </div>
    );
}

export default Header
