import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function CustomerFeedback() {
  return (
    <div className="reviews">
    <div className="bg-gray-900 p-4  w-[21rem] h-[22rem] absolute right-14 bottom-61">

      <h2 className="text-white text-xl font-bold mb-4">Customer's Feedback</h2>
      <h3 className="text-white font-bold mx-12 ">Jenny Wilson</h3>
      <div className="flex items-center mb-1 "> 
        <img
          src="https://i.pravatar.cc/30"
          alt="Jenny Wilson"
          className="rounded-full relative bottom-6 "
        />
        <div>
          <div className="flex items-center text-yellow-400 ml-4 mt-2">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />

         </div>
          <p className="text-gray-400 text-sm mt-1 mx-4">
            The food was excellent and so was the service. I had the mushroom, its super.
          </p>
        </div>
      </div>
      <div className="flex items-center ">
        <img
          src="https://i.pravatar.cc/30"
          alt="Dianne Russell"
          className="rounded-full relative bottom-6 "
        />
        <div>
          <h3 className="text-white font-bold mx-4">Dianne Russell</h3>
          <div className="flex items-center ml-4 mt-2">
          <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
          <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
          <FontAwesomeIcon icon={faStar}className='text-yellow-400' />
          <FontAwesomeIcon icon={faStar}className='text-yellow-400' />
          <FontAwesomeIcon icon={faStar} className='text-white' />
        
          </div>
          <p className="text-gray-400 text-sm mt-1 mx-2">
            We enjoyed the Eggs Benedict served on homemade focaccia bread
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="https://i.pravatar.cc/30"
          alt="Devon Lane"
          className="rounded-full relative bottom-6 "
        />
        <div>
          <h3 className="text-white font-bold mx-4 ">Devon Lane</h3>
          <div className="flex items-center ml-4 mt-2">
          <FontAwesomeIcon icon={faStar} className='text-yellow-400'/>
          <FontAwesomeIcon icon={faStar}className='text-yellow-400' />
          <FontAwesomeIcon icon={faStar}className='text-yellow-400' />
          <FontAwesomeIcon icon={faStar} className='text-white' />
          <FontAwesomeIcon icon={faStar} className='text-white' />
            
           
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Normally wings are wings, but theirs are lean, meaty and cannot give 5 star
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CustomerFeedback;