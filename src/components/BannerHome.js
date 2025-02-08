import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { store } from '../store/store';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const BannerHome = () => {
    const bannerData= useSelector(state=>state.movieoData.bannerData)
    const imageUrl= useSelector(state=>state.movieoData.imageUrl)
    const [currentImage, setCurrentImage] = useState(1)

    const handleNext=() =>{
        if(currentImage < bannerData.length-1 ){
            setCurrentImage(preve=>preve+1)
        }
    }

    const handlePrev=()=>{
        if(currentImage>0){
            setCurrentImage(preve=>preve-1)
        }

    }
    useEffect(()=>{
        const interval= setInterval(()=>{
            if(currentImage < bannerData.length-1 ){
                handleNext()
            }else{
                setCurrentImage(0)
            }

        },5000)
        return()=>{clearInterval(interval)}

    },[bannerData, imageUrl,currentImage])

  return (
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh]'>{
             bannerData.map((data,index)=>{
                console.log('data', data)
                return(
                   <div key={data.id+"BannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all ' style={{transform:`translateX(-${currentImage * 100}%)`}}>
                     <div className='w-full h-full'>
                            <img
                                src={imageUrl+data.backdrop_path}
                                className='h-full w-full object-cover'
                            />
                    </div>

                        <div className=' absolute top-0 w-full h-full items-center px-4 justify-between hidden group-hover:lg:flex '>
                                <button onClick = {handlePrev}  className=' bg-white text-black rounded-full text-xl p-1 z-10 '>
                                <FaAngleLeft/>
                                </button>

                                <button onClick={handleNext} className='bg-white text-black rounded-full text-xl p-1 z-10'>
                                <FaAngleRight/>
                                </button>
                        </div>



                    <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900'>
                    </div>

                    <div className=' container mx-auto'>
                        <div  className=' absolute bottom-0 w-full max-w-md px-3 '>
                            <h2 className=' font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl '>{data.name} {data.title}</h2>
                            <p className=' text-ellipsis line-clamp-3 my-2 '>{data.overview}</p>
                            <div className=' flex items-center gap-4'>
                            <p> Rating : {Number(data.vote_average).toFixed(1)}+</p>
                            <span> | </span>
                            <p> View : { Number(data.popularity).toFixed(0)}</p>
                           

                        </div>
                        <button className=' bg-white px-4 py-2 text-black rounded font-bold mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover: scale-105'>
                            Play Now
                            </button>
                        </div>
                       

                    </div>

                   </div>
                )
             })
            }
        </div>
    </section>
  );
}

export default BannerHome