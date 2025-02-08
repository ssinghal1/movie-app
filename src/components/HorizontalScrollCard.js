import React, { useRef } from 'react'
import Card from './Card';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const HorizontalScrollCard = ({data= [], heading, trending, media_type}) => {
    const containerRef= useRef()
    const handleNext=()=>{
        containerRef.current.scrollLeft +=300
    }

    const handlePrevious=()=>{
        containerRef.current.scrollLeft -=300
    }
  return (
    <div className=" container mx-auto py-3 my-10 ">
    <h2 className="text-xl lg:text-2xl mb-2 font-bold">{heading}</h2>
    <div className=' relative'>
      <div ref={containerRef} className=" grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrollbar-none ">
        {data.map((data, index) => {
          return (
            <Card
              key={data.id}
              data={data}
              trending={trending}
              index={index + 1}
              media_type={media_type}
            />
          );
        })}
      </div>
      <div className=' absolute top-0 hidden  lg:flex justify-between w-full items-center h-full '>
            <button onClick={handlePrevious} className=' bg-white text-black rounded-full -ml-1 z-10 '>
                <FaAngleLeft />
            </button>
            <button onClick={handleNext} className=' bg-white text-black rounded-full -mr-1 z-10 '>
                <FaAngleRight/>
            </button>
      </div>
    </div>
  </div>
    
  )
}

export default HorizontalScrollCard