import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import Main from "./component/main/main";
import Profile from "./component/profile/profile.js";
import Spec from "./component/spec/spec"
import Goals from "./component/goals/goals";
import Login from "./component/login/login"

import Layout from './component/layout/layout';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
  useEffect(() => {
    setScreenSize();
 }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Main/>}/>
        <Route path="layout" element={<Layout/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Spec" element={<Spec />} />
        <Route path='/Goals'element={<Goals/>}/>
      </Routes>
 </BrowserRouter>
  );
}

export default App;
