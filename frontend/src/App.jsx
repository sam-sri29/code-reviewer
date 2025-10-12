import React, { useState } from 'react'
import Left from './components/Left'
import Right from './components/Right'



const App = () => {
  const [reviews, setReviews] = useState("");
  return (
    <>
      <div className='bg-gray-900'>
        <div className='fixed top-0 left-0 w-full h-[5vh] bg-gray-900 text-white flex items-center justify-center shadow-md z-10'>
        <h1 className='text-lg font-semibold'>Code Reviewer</h1>
      </div>
      <div className='flex gap-4 px-4 flex-col md:flex-row overflow-hidden pt-[5vh]'>
       <div  className='w-full md:w-1/2 h-1/2 md:h-full'> <Left setReviews ={setReviews}/></div>
        <div  className='w-full md:w-1/2 h-1/2 md:h-full'><Right reviews={reviews}/></div>
      </div>
      </div>
    </>
  )
}

export default App