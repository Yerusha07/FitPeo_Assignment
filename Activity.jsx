import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Activity = () => {
  return (
 <div className="activity">
    <div className="bg-gray-900 text-white p-4 rounded-lg h-[19.5rem] w-[47.1rem] absolute left-60 bottom-32 py-6 ">

    <div className='flex flex-row justify-between'>
        <h2 className="text-xl font-bold">Activity</h2>
        <button className='bg-gray-400/40  items-center rounded-2xl w-[7rem] h-[2rem] '>Weekly <FontAwesomeIcon icon={faCaretDown} className="" /></button>
</div>
      
  
       <div className="mt-4 flex flex-col justify-start gap-12">
        <div className=" ">
        <div className="text-xs text-gray-500"> </div>
          <div className="text-xs text-gray-500 ">15k<hr className='ml-10 mr-5'></hr></div>
         
        </div>
        <div className="">
        <div className="text-xs text-gray-500"> </div>
          <div className="text-xs text-gray-500">10k <hr className='ml-10 mr-5 '></hr></div>
  
        </div>
        <div className="">
          <div className="text-xs text-gray-500 ">5k <hr className='ml-10 mr-5 '></hr></div>
          <div className="text-xs text-gray-500"> </div>
        </div>
        <div className="">
          <div className="text-xs text-gray-500">0<hr className='ml-10 mr-5 '></hr></div>
          <div className="text-xs text-gray-500"> </div>
        </div>
        </div>


        <div className="flex flex-row ml-10 gap-1 ml-14  ">

        <div className="relative bottom-12">
          <div className="w-7 h-12 rounded-full bg-blue-400 mr-2 "></div>
          <div className="text-gray-400 text-sm mt-2 ml-2">5</div>
        </div>

        <div className="relative bottom-32">
          <div className="w-7 h-32 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm ml-2"></span>
        </div>

        <div className="relative bottom-14">
          <div className="w-7 h-14 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2 ml-1">9</div>
        </div>

        <div className="relative bottom-10">
          <div className="w-7 h-10 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>

        <div className="relative bottom-20">
          <div className="w-7 h-20 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2 ml-2">11</div>
        </div>

        <div className="relative bottom-20">
          <div className="w-7 h-20 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>

        <div className="relative bottom-44">
          <div className="w-7 h-44 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2 ml-2">13</div>
        </div>

        <div className="relative bottom-32">
          <div className="w-7 h-32 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>

        <div className="relative bottom-52">
          <div className="w-7 h-52 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2 ml-2">15</div>
        </div>

        <div className="relative bottom-40">
          <div className="w-7 h-40 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>

        <div className="relative bottom-24">
          <div className="w-7 h-24 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2 ml-2">17</div>
        </div>
        <div className="relative bottom-48">
          <div className="w-7 h-48 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>
        <div className="relative bottom-28">
          <div className="w-7 h-28 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2 ml-2">19</div>
        </div>
        <div className="relative bottom-12">
          <div className="w-7 h-12 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>
        <div className="relative bottom-40">
          <div className="w-7 h-40 rounded-full bg-blue-400 mr-2"></div>
          <div className="text-gray-400 text-sm mt-2
           ml-2">21</div>
        </div>
        <div className="relative bottom-20">
          <div className="w-7 h-20 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>


      </div>

    </div>
    </div>
  )
}

export default Activity
