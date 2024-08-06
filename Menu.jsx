import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye,faAngleRight, faBowlFood,   } from "@fortawesome/free-solid-svg-icons";
import {faSquareCaretDown} from '@fortawesome/free-regular-svg-icons'
const Menu = () => {
  return (
    <div className="menu">
      
    <div className='text-white h-[19rem] w-[21rem] bg-gray-900 rounded-lg absolute -right-80 top-[21.5rem] mx-96 flex flex-col p-5 gap-6 '>

      <div className='flex justify-between'>
      <FontAwesomeIcon icon={faBullseye}  className='bg-red-600/20 h-[2rem] rounded-full p-5 text-red-600/70' /> <span className=' mr-32 mt-6'>Goals </span>
      <FontAwesomeIcon icon={faAngleRight} className='bg-gray-400/40 w-[1rem] rounded-full p-2 mt-5'/> 
      </div>
      
      <div className='flex justify-between'>
      <FontAwesomeIcon icon={faBowlFood}  className='bg-blue-600/20 h-[2rem] rounded-full p-5 text-blue-600/70' /> <span className=' mt-6 mr-14'>Popular Dishes </span>
      <FontAwesomeIcon icon={faAngleRight} className='bg-gray-400/40 w-[1rem] rounded-full p-2 mt-5'/> 
      </div>

      <div className='flex justify-between'>
      <FontAwesomeIcon icon={faSquareCaretDown}  className='bg-green-600/20 h-[2rem] rounded-full p-5 text-green-600/70' /> <span className='relative right-16 mt-6'>Menu </span>
      <FontAwesomeIcon icon={faAngleRight} className='bg-gray-400/40 w-[1rem] rounded-full p-2 mt-5'/> 
      </div>

    </div>
    </div>
  )
}

export default Menu
