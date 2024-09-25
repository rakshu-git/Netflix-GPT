import React from 'react'

const VideoTitle = ({ title, overview }) => (
    <div className='w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black'>

        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>

        <div className='flex'>
            <button className='bg-white text-black p-3 px-12 text-xl  rounded-lg hover:bg-opacity-80 flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
                Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
                More Info</button>
        </div>

    </div>
)

export default VideoTitle