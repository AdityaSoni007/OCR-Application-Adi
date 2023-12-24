import React from 'react'

function InformationCard({formData,setFormData}) {
  
  const css_attribute = "text-[#7ee787] text-lg font-semibold tracking-wide ml-5";
  const bracket1 = "{";
  const bracket2 = "}"
  
  const {identification_number,name,last_name,date_of_birth,date_of_expiry,date_of_issue} = formData;
 
  return (
    <div className="w-[50%] h-[100%] flex items-start justify-center ">
      <div className="border-2 border-white bg-gray-900 p-12">

        <h1 className="text-[#ffffff] text-4xl font-bold text-center mb-5">JSON DATA</h1>

        <span className="text-yellow-500 text-xl font-bold mb-2">{bracket1} </span>
        <p className={`${css_attribute} `}>"Identification Number" : <span className="text-[#a5d6ff]">"{identification_number}",</span></p>
        <p className={`${css_attribute}`}>"Name" : <span className="text-[#a5d6ff]">"{name}",</span> </p>
        <p className={`${css_attribute}`}>"Last-Name" : <span className="text-[#a5d6ff]">"{last_name}",</span> </p>
        <p className={`${css_attribute}`}>"Date-of-Birth" : <span className="text-[#a5d6ff]">"{date_of_birth}",</span></p>
        <p className={`${css_attribute}`}>"Date-of-Issue" : <span className="text-[#a5d6ff]">"{date_of_issue}",</span></p>
        <p className={`${css_attribute}`}>"Date-of-Expiry": <span className="text-[#a5d6ff]">"{date_of_expiry}",</span></p>
        <span className="text-yellow-500 text-xl font-bold ">{bracket2} </span>

      </div>


    </div>
  )
}

export default InformationCard