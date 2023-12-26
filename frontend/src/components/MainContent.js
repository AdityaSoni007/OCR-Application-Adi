import React,{useState} from 'react'
import ImageUploader from './ImageUploader'
import InformationCard from './InformationCard'
import Footer from './Footer';


function MainContent() {
  const [loading,setLoading]=useState(false);
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
      <div className='flex mainContent lg:h-[95vh] p-12 bg-[#ebf3ff] '>
        
        <ImageUploader formData={formData} setFormData={setFormData} loading={loading} setLoading={setLoading}/>
        <InformationCard formData={formData} loading={loading}  />

      </div>
      <Footer />
    </>
  )
}

export default MainContent