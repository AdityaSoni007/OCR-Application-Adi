import React,{useState,useEffect} from 'react'
import ImageUploader from './ImageUploader'
import InformationCard from './InformationCard'




function MainContent() {

  const [formData, setFormData] = useState({
    identification_number: "",
    name: "",
    last_name: "",
    date_of_birth: "",
    date_of_issue: "",
    date_of_expiry:""
  })


  return (
    <>
      <div className='flex m-auto h-[90vh] p-12 border-2 border-black gap-5'>
        <ImageUploader formData={formData} setFormData={setFormData} />
        <InformationCard formData={formData} setFormData={setFormData}  />
      </div>
    </>
  )
}

export default MainContent