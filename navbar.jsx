import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-green-400 text-white p-4">
      <ul className="flex space-x-4">
        <li><a href="#home" className="font-bold">iTask</a></li>
        <li className="Home justify-end"><a href="#about">Home</a></li>
        <li><a href="#contact ">About</a></li>
      </ul>
    </div>
  )
}

export default Navbar
