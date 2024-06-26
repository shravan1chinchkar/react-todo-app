import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#DD99BB] flex justify-between py-2 items-center sm:px-[2rem] lg:px-[5rem] md:px-2 new-ratio:px-[3rem] new-ratio-2:px-[1rem]'> 
    <span className='text-[25px] font-bold text-white font-rubik new-ratio-2:text-xl'>
        sTask
    </span>
        <ul className='new-ratio:w-[200px] sm:w-[250px] lg:w-[300px] md:w-[250px] flex justify-between cursor-pointer  text-2xl text-white font-bold font-rubik new-ratio-2:w-[200px] new-ratio-2:text-xl'>
            <li>Home</li>
            <li>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
