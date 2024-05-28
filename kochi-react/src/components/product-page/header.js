import React from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";

const header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font ">
            <div className="container mx-auto flex flex-wrap p-5 px-8 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                    alt="logo"
                    className='text-2xl object-cover'
                    width={40} 
                    height={40} 
                   
                    />
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <li className="mr-5 hover:text-gray-900">Learn</li>
                <li className="mr-5 hover:text-gray-900">How do i participate?</li>
                <li className="mr-5 hover:text-gray-900">Universities</li>
                <li className="mr-5 hover:text-gray-900">corporate</li>
                </nav>
                <button className="inline-flex items-center rounded-full border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
                  <span className=' ml-0 bg-black rounded-full p-2 ' > <CiSearch className='text-2xl bg-white p-1  rounded-2xl' /></span>
                  <span className='p-2 text-white bg-black  rounded-full px-4 '>  join telegram</span> 
                </button>
            </div>

            <hr  />
            </header>
    </div>
  );
}

export default header;
