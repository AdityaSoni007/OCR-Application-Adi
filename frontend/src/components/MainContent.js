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
      <div className='flex  h-[90vh] p-12  '>
        <ImageUploader formData={formData} setFormData={setFormData} />
        <InformationCard formData={formData} setFormData={setFormData}  />
      </div>
    </>
  )
}

export default MainContent