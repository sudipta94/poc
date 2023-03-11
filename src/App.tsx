import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./Views/page1";
import Page2 from "./Views/page2";

function App() {
  return (
    <Routes>
      <Route path="/page1/" element={<Page1 />} />
      <Route path="/page2/" element={<Page2 />} />
      <Route path="/" element={<Navigate replace to={"/page1/"} />} />
      <Route path="*" element={<Navigate replace to={"/page1/"} />} />
    </Routes>
  );
}

export default App;
