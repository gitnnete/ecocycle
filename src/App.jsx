import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from './Components/Home'
import OurServices from './Components/OurServices'
import ContactUs from './Components/ContactUs'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
