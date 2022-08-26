import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
export default function Main() {
  return (
    <div>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}
