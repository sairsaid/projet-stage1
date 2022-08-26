import React from 'react'
import logo from '../../assets/images/logo.jpg'
export default function Header() {
  return (
    <div >
<nav className='flex justify-evenly p-4 bg-amber-400 items-center mb-2 sm:grid grid-rows-3 grid-flow-col gap-4'>
<img src={logo} className='w-20 row-span-3'></img>
<ul className='flex justify-between p-4 border-dotted border-2 bg-gradient-to-r from-lime-100 to-lime-200 rounded-2xl shadow-xl col-span-2 row-span-3'>
<li><a href='/'>Home</a></li>
<li>Contact</li>
<li>service</li>
</ul>
</nav>
    </div>
  )
}
