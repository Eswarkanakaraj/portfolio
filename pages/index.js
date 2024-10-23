import React from 'react'
import Navbanner from "./Navbanner"
import Home from "./Home"
import Projects from "./Projects"
import Resumes from "./Resumes"
import Contact from "./Contact"


export default function index() {
  return (
    <>
    <Navbanner/>
    <Home/>
    <Projects/>
    <Resumes/>
    <Contact/>
   
    </>
  )
}
