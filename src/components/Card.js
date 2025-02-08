import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({data, trending, index, media_type}) => {

    const imageUrl= useSelector(state=>state.movieoData.imageUrl)
    const mediaType= data.media_type ?? media_type
  return (
    <Link to={"/"+mediaType+"/"+data.id} className=' w-full rounded overflow-hidden h-80 block min-w-[230px] max-w-[230px] relative hover:scale-105'>
       
       {
          data?.poster_path ? (
            <img 
            src={imageUrl + data?.poster_path}
       />
          ) :
          (
            <div className=' bg-neutral-800 h-full w-full flex justify-center items-center '>
              No Image found
            </div>
          )
       }
       
      
       <div className=' absolute top-4 '>
        {
                trending && (
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                        #{index} Trending
                    </div>
                )
        }
       </div>
        <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'> 
        <h2 className=' text-ellipsis line-clamp-1 text-lg font-semibold '> {data?.title || data?.name}</h2>
        <div className=' text-sm text-neutral-400 flex justify-between items-center '>
            <p>{moment(data.first_air_date).format("MMMM DD YYYY")}</p>
            <p className=' bg-black px-1 rounded-full text-xs text-white '>Rating : {Number(data.vote_average).toFixed(1)}</p>

        </div>

        </div>



    </Link>
  )
}

export default Card