import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Sections/Header/Header'
import Footer from './Sections/Footer/Footer'

const Root = () => {
  return (
    <div className='App'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root