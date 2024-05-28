import React from 'react';
import { MdRectangle } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineLightbulb } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Image from 'next/image';
import { TiMessages } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";

const lists = () => {

   const list=[
     {
        id:"1",
        imageUrl:"https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/20-512.png",
        heading:"What are the key principle of coding?",
        postBy:"post by jisnhu Ambati ",
        view:"12 Response",
      },
     {
        id:"2",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
        heading:"How does guide facilitate accurate medical billing?",
        postBy:"post by jisnhu Ambati ",
        view:"32 Response",
     },
     {
        id:"3",
        imageUrl:"https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/20-512.png",
        heading:"What are major section with in the guide?",
        postBy:"post by jisnhu Ambati ",
        view:"20 Response",
     },
     {
        id:"4",
        imageUrl:"https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
        heading:"What Often in the guide Updated?",
        postBy:"post by jisnhu Ambati ",
        view:"2 Response",
     },
     {
        id:"5",
        imageUrl:"https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        heading:"What is the purpose of modifiers in the coding?",
        postBy:"post by jisnhu Ambati ",
        view:"12 Response",
     },
     {
        id:"6",
        imageUrl:"https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
        heading:"What is difference between ICD codes?",
        postBy:"post by jisnhu Ambati ",
        view:"42 Response",
     },
     {
        id:"7",
        imageUrl:"https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png",
        heading:"What is the role of modifiers",
        postBy:"post by jisnhu Ambati ",
        view:"32 Response",
     },
     {
        id:"8",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
        heading:"What are the implecation of incorrect coding?",
        postBy:"post by jisnhu Ambati ",
        view:"62 Response",
     },
     {
        id:"9",
        imageUrl:"https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/20-512.png",
        heading:"What are the key principle of coding?",
        postBy:"post by jisnhu Ambati ",
        view:"56 Response",
     },
     {
        id:"10",
        imageUrl:"https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        heading:"What is difference between ICD codes?",
        postBy:"post by jisnhu Ambati ",
        view:"18 Response",
     },

   ]



  return (
    <div>
       <div className='w-full flex flex-col lg:flex-row gap-6 lg:my-16'>
          <div className='w-full lg:w-7/12'>
            <div className='flex flex-col sm:flex-row justify-between text-sm mx-auto items-center'>
              <div className='flex gap-3 mb-4 sm:mb-0'>
                <p>LATEST DISCUSSIONS AS OF</p>
                <div className='flex gap-2 items-center'>
                  <span><MdRectangle className='mt-1 text-red-600' /></span>
                  <p className='font-medium'>MARCH 12 2024</p>
                </div>
              </div>
              <div className='flex gap-2 bg-blue-300 rounded-full p-2 cursor-pointer items-center'>
                <span><MdOutlineLightbulb className='text-blue-700 text-lg' /></span>
                <p>All Topics</p>
                <span><FaChevronDown /></span>
              </div>
            </div>

            <div className="flex mx-auto my-5 justify-between border border-black py-2 px-4 focus:outline-none rounded-full text-lg">
              <input 
                placeholder="Search Topics" 
                className="w-full border-0 focus:outline-none" 
              />
              <span className="flex items-center text-white text-2xl bg-black p-2 rounded-full">
                <IoMdSearch />
              </span>
            </div>

            <div>
              {list.map((data, index) => (
                <React.Fragment key={index}>
                  <div>
                    <div className='w-full flex flex-col sm:flex-row items-center'>
                      <div className='w-3/12 sm:w-2/12 md:w-1/12'>
                        <Image
                          src={data.imageUrl}
                          alt="logo"
                          className='text-2xl object-cover rounded-full'
                          width={40} 
                          height={40} 
                        />
                      </div>
                      <div className='w-9/12 sm:w-5/12 md:w-5/12'>
                        <p>{data.heading}</p>
                        <p className='text-xs text-gray-400'>{data.postBy}</p>
                      </div>
                      <div className='w-full sm:w-3/12 md:w-3/12 mt-2 sm:mt-0'>
                        <div className='flex bg-gray-200 text-center gap-2 justify-center rounded-full p-2'>
                          <span><TiMessages className='mt-1 text-red-800' /></span>
                          <p className='font-medium'>{data.view}</p>
                        </div>
                      </div>
                      <div className='w-full sm:w-4/12 md:w-3/12 text-center sm:text-end mt-2 sm:mt-0'>
                        <button className='py-2 px-5 bg-black text-white rounded-md'>
                          View Answer
                        </button>
                      </div>
                    </div>
                    <hr className='border w-full my-6' />
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* load more button  */}

            <button className='border border-black rounded-full p-2 px-4 my-4'> Load More </button>
          </div>

          <div className='w-full lg:w-5/12'>
            <section className="text-gray-600 body-font bg-pink-200 p-6 lg:ml-4 rounded-lg">
              <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-xl font-medium title-font mb-4 text-gray-900">Top Contributer</h1>
                  <i className="text-xl font-medium title-font mb-4 text-gray-900">This Week </i>
                </div>
                <div className='block mx-auto object-cover object-center rounded-full'>
                  <Image
                    src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716854400&semt=sph"
                    alt="logo"
                    className='text-2xl object-cover rounded-full'
                    width={200} 
                    height={200} 
                  />
                </div>
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-xl font-medium title-font my-4 text-gray-900">Jishnu Ambati</h1>
                </div>
                <hr className='w-full' /> 
                <div className="flex flex-col w-full mt-4 px-5">
                  <p className="font-medium title-font mb-4 text-gray-900">You can we next one! Be a part of USA's 1st CPT Program Directory!</p>
                  <div className='bg-gradient-to-r from-red-500 via-purple-800 to-black w-full text-center rounded-full'>
                    <button className='p-3 text-white'> 
                      Join Community & Ask 
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-gray-600 body-font bg-gradient-to-b from-slate-900 via-slate-700 to-purple-900 p-6 rounded-lg lg:ml-4 mt-8">
              <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col">
                <div className='block mx-auto object-cover object-center rounded-full'>
                  <Image
                    src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716854400&semt=sph"
                    alt="logo"
                    className='text-2xl object-cover rounded-full'
                    width={200} 
                    height={200} 
                  />
                </div>
                <div className="flex flex-col text-center w-full text-white">
                  <p className="font-medium title-font my-4">E-BOOK</p>
                  <h1 className="text-xl font-medium title-font mb-4 px-5">Charting Paths: Program Through a Student's Eyes</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <button className='flex items-center border border-white mt-5 rounded-full p-3 px-5 text-white'>
                    <p>Get the Guide</p> 
                    <FaArrowRightLong className='ml-2' />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>


    </div>
  );
}

export default lists;


 