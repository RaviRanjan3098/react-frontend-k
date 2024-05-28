import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { RiMessageLine } from "react-icons/ri";
import { MdOutlineLightbulb } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import Image from 'next/image';


const Search = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs  tracking-widest font-medium title-font mb-1">FORUM</h2>
            <i className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Discuss & Evolve</i>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Engage with Fellow Professionals : join the program Forum Discussion!</p>

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

            <div className="flex lg:w-1/3 mx-auto my-5 justify-between  py-2 px-8 ">
               <div className='flex  w-full gap-4'>
               <div className='flex'>
                    <span className="flex items-center text-xl p-2 px-4 bg-red-100 rounded-full">
                       <RiMessageLine className='text-red-700' />
                    </span>
                    <p className='mt-2'>START DICUSSING </p>
               </div>
               <span className='text-2xl font-medium'>.</span>
               <div className='flex '>
              <span className='bg-blue-100 text-xl p-2 px-4 rounded-full'>
                <MdOutlineLightbulb className='text-blue-700 mt-1 text-xl ' />
                </span>
              <p className='mt-2'>All Topics</p>
            </div>
               </div>

            </div>
            <div className=' lg:w-1/3 mx-auto  text-center flex justify-center'>
            <FaArrowDownLong  className='text-xl'/>
            </div>

          </div>

                   {/*  image section  */}
               <div className='flex flex-wrap w-full'>
                  <div className='w-full sm:w-1/2 lg:w-1/4 relative p-2'>
                    <div className='mt-20 z-10 relative'>
                      <Image
                        src="https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/20-512.png"
                        alt="logo"
                        className='text-2xl object-cover rounded-full m-auto '
                        width={180} 
                        height={180} 
                      /> 
                    </div>
                    <div className='absolute left-0 bottom-0 z-0'>
                      <Image
                        src="https://previews.123rf.com/images/pandavector/pandavector1605/pandavector160500618/56794127-boy-avatar-icon-of-vector-illustration-for-web-and-mobile-design.jpg"
                        alt="logo"
                        className='text-2xl object-cover rounded-full '
                        width={230} 
                        height={230} 
                      />  
                    </div>
                  </div>

                  <div className='w-full sm:w-1/2 lg:w-1/4'>
                    <Image
                      src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                      alt="logo"
                      className='text-2xl object-cover rounded-full '
                      width={200} 
                      height={200} 
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
                      alt="logo"
                      className='text-2xl object-cover rounded-full m-auto'
                      width={200} 
                      height={200} 
                    />
                  </div>

                  <div className='w-full sm:w-1/2 lg:w-1/4 relative p-2'>
                    <div className='mt-20 z-0 relative'>
                      <Image
                        src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="logo"
                        className='text-2xl object-cover rounded-full m-auto bg-blue-200'
                        width={180} 
                        height={180} 
                      /> 
                    </div>
                    <div className='absolute right-0 bottom-0 z-10 bg-white p-2 rounded-full'>
                      <Image
                        src="https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png"
                        alt="logo"
                        className='text-2xl object-cover rounded-full bg-red-100'
                        width={180} 
                        height={180} 
                      />  
                    </div>
                  </div>

                  <div className='w-full sm:w-1/2 lg:w-1/4'>
                    <Image
                      src="https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg"
                      alt="logo"
                      className='text-2xl object-cover rounded-full ml-8 '
                      width={220} 
                      height={220} 
                    />
                    <div className='items-end flex text-end justify-end'>
                      <Image
                        src="https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/20-512.png"
                        alt="logo"
                        className='text-2xl object-cover rounded-full '
                        width={180} 
                        height={180} 
                      />
                    </div>
                  </div>
                </div>


        
         
        </div>
      </section>
   </div>
  );
}

export default Search;
