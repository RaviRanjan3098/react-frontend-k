import React from 'react';
import { RiMessageLine } from "react-icons/ri";

const topicSeach = () => {
  return (
    <div>
 <section class="text-gray-600 body-font bg-orange-100 ">
  <div class="container  py-24 mx-auto px-10">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
       <h2 class="text-xs  tracking-widest font-medium title-font mb-1">TOPICS</h2>
      <i class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Most Search Ones </i>
     </div>
    <div class="flex flex-wrap">
    <div class="w-full xl:w-1/3 md:w-1/2 p-4 ">
        <div class="border border-gray-200  w-full p-6 rounded-lg bg-gradient-to-b from-black via-slate-800  to-red-500">
          <div class="flex items-center justify-center h-28   rounded-lg">
                <h2 class="text-3xl text-white font-medium title-font">Eligibility</h2>
            </div>
        </div>
      </div>

      <div class="w-full xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 bg-slate-900 p-6 rounded-lg">
          <div class="flex items-center justify-center h-28 rounded-lg">
                <h2 class="text-3xl text-white font-medium title-font">F1 Visa Students</h2>
            </div>
        </div>
      </div>
      <div class="w-full xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 bg-slate-900 p-6 rounded-lg">
          <div class="flex items-center justify-center h-28 p-6 rounded-lg">
                <h2 class="text-3xl text-white font-medium title-font">Universities</h2>
            </div>
        </div>
      </div>

     <div class="w-full xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 bg-slate-900 p-6 rounded-lg">
          <div class="flex items-center justify-center h-28 p-6 rounded-lg">
                <h2 class="text-3xl text-white font-medium title-font">Admission </h2>
            </div>
        </div>
      </div>

       <div class="w-full xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 bg-slate-900 p-6 rounded-lg">
          <div class="flex items-center justify-center h-28 p-6 rounded-lg">
                <h2 class="text-3xl text-white font-medium title-font">Companies</h2>
            </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-4">
        <div class="border border-gray-200 bg-slate-900 p-6 rounded-lg">
            <div class="flex items-center justify-center h-28 p-6 rounded-lg">
            <h2 class="text-3xl text-white font-medium title-font">Jobs</h2>
            </div>
        </div>
        </div>


    </div>
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <div class='flex flex-col text-black font-medium sm:flex-row gap-4 items-center'>
                <span>Don't find your topics?</span>
                
                <div class='flex items-center gap-2'>
                <span ><RiMessageLine className='mt-1 text-red-700' /></span>
                <span>Start Discussing</span>
                </div>
            </div>
        </div>
        </div>
 </section>
    </div>
  );
}

export default topicSeach;
