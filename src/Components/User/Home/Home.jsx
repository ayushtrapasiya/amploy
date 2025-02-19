import React, { useContext } from 'react'
import style  from './Home.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Store } from '../../../App'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional (for Bootstrap JS features)

export default function Home() {
 
  return (
    <>
    <Header/>
    <div className={`${style.hello} `}>Home</div>
    <Outlet/>
    <Footer/>
    </>
  )
}
