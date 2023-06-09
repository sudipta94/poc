import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./Views/page1";
import Page2 from "./Views/page2";
import Page3 from "./Views/page3";
import Page4 from "./Views/page4";
import Page5 from "./Views/page5";
import jsonData from "./accountdata.json";

function App() {
  const [MainPayload, Setpayload] = useState<any>(jsonData);
  return (
    <Routes>
      <Route path="/page1/" element={<Page1 />} />
      <Route
        path="/page2/"
        element={<Page2 MainPayload={MainPayload} Setpayload={Setpayload} />}
      />
      <Route
        path="/page3/"
        element={<Page3 MainPayload={MainPayload} Setpayload={Setpayload} />}
      />
      <Route path="/page4/" element={<Page4 />} />
      <Route path="/page5/" element={<Page5 />} />
      <Route path="/" element={<Navigate replace to={"/page1/"} />} />
      <Route path="*" element={<Navigate replace to={"/page1/"} />} />
    </Routes>
  );
}

export default App;
