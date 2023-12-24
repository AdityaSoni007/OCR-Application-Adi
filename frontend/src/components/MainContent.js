import React from 'react'
import ImageUploader from './ImageUploader'
import InformationCard from './InformationCard'



function MainContent() {
  return (
    <>
      <div className='flex m-auto h-[90vh] p-12 border-2 border-black gap-5'>
        <ImageUploader />
        <InformationCard />
      </div>
    </>
  )
}

export default MainContent