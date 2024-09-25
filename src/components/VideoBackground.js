import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)


    useMovieTrailer(movieId)

    return (
        <div className='w-screen'>
        <iframe
       
        className='w-screen -mt-32 aspect-video inline-block'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
         title="YouTube video player" 
        //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
        allowFullScreen
         >
         </iframe>
        </div>
    )
}

export default VideoBackground