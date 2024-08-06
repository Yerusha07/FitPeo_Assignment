import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faEnvelope, faGear, faBell, faUser} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className="navbar ">
      
    <div className='text-white flex flex-row gap-10 justify-around absolute top-80 ml-40 bg-gray-900 h-[5rem] w-[75rem] rounded-xl -m-72'>

      <div className='text-white absolute left-12 px-4 text-xl flex items-center mt-8'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className='text-xl p-5 ml-8'>
        <input type="text" placeholder='Search' className='px-10 h-[2.5rem] rounded-lg  left-12 text-white bg-gray-700/80'/>
      </div>

      <div className='text-white text-2xl flex gap-8  w-[50rem] justify-end items-center'>
      <FontAwesomeIcon icon={faEnvelope}  className='rounded-full bg-gray-700/80 p-3'/>
      <FontAwesomeIcon icon={faGear} className='rounded-full bg-gray-700/80 p-3 ' />
      <FontAwesomeIcon icon={faBell} className='rounded-full bg-gray-700/80 p-3 '/>
      </div>
      
      <div className='text-white text-2xl mt-4 flex gap-8 mx-5 w-[3.5rem] h-[3rem] bg-gray-700/80 rounded-full justify-center items-center'><FontAwesomeIcon icon={faUser} /></div>
    </div>
    </div>
  )
}

export default Navbar
