import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-2 gap-6  w-[90%] m-auto '>
<p className='border-dashed border-2 border-indigo-600 p-2 my-8 bg-slate-400 rounded-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex eos a repudiandae maiores fugit provident cupiditate velit soluta! Voluptate possimus necessitatibus nam quaerat molestiae obcaecati cumque tempore pariatur impedit?</p>
<div id='divfooter' className='lg:grid lg:grid-cols-4 lg:gap-4 my-8 sm:grid sm:grid-cols-2 sm:gap-3'>
    <ul><span>Solutions</span>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
    </ul>
    <ul><span>Support</span>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
    </ul>
    <ul><span>Company</span>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
    </ul>
    <ul><span>Legal </span>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
    </ul>
    </div>

    </div>
  )
}
