"use client"
import Image from "next/image";
import Header from "@/components/product-page/header";
import Search from "@/components/product-page/search-scetion";
import TopicSeach from "@/components/product-page/topic-seach";
import Lists from "@/components/product-page/lists";

export default function Home() {
  return (
   <>
   <header className="">        
          <div>
            <Header  />
          </div>

   </header>

   <search>
   <div>
   <div className="flex items-center justify-between px-8 py-5">
            <p className=" text-sm text-gray-400">
              Home/Forum
            </p>
          </div>
            <Search  />
          </div>
   </search>

   <search>
     <div className="">
            <TopicSeach  />
          </div>
   </search>
   
   <search>
     <div className="mx-16">
            <Lists  />
          </div>
   </search>
   </>
  );
}
