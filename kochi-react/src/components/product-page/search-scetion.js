import React from 'react';
import { IoMdSearch } from "react-icons/io";


const Search = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs  tracking-widest font-medium title-font mb-1">FORUM</h2>
            <i class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Discuss & Evolve</i>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Engage with Fellow Professionals : join the program Forum Discussion!</p>

            <div className="flex lg:w-1/3 mx-auto my-5 justify-between border border-black py-2 px-4 focus:outline-none rounded-full text-lg">
             <input 
                placeholder="search..." 
                 className="lg:w-full border-0 focus:outline-none" 
                />
               <span className="flex items-center text-white text-2xl bg-black p-2 rounded-full">
                 <IoMdSearch />
               </span>
            </div>
          
                    {/* start discussing */}

            {/* <div className="flex lg:w-1/3 mx-auto my-5 justify-between  py-2 px-8 ">
               <span className="flex items-center text-white text-2xl bg-black p-2 rounded-full">
                 <IoMdSearch />
               </span>
            </div> */}
          </div>
        
         
        </div>
      </section>
   </div>
  );
}

export default Search;
