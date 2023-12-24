import React from 'react'

function InformationCard() {
  const css_attribute = "text-[#7ee787] text-lg font-semibold tracking-wide ml-5";
  const bracket1 = "{";
  const bracket2 = "}"
  return (
    <div className="w-[50%] h-[100%] flex items-start justify-center ">
      <div className="border-2 border-white bg-gray-900 p-12">
        {/* <h1 className="text-[#ffffff] text-4xl font-bold text-center mb-5">JSON DATA</h1> */}
        <span className="text-yellow-500 text-xl font-bold mb-2">{bracket1} </span>
        <p className={`${css_attribute} `}>"Identification Number" : <span className="text-[#a5d6ff]">"1122235448555",</span></p>
        <p className={`${css_attribute}`}>"Name" : <span className="text-[#a5d6ff]">"Priyanshu",</span> </p>
        <p className={`${css_attribute}`}>"Last-Name" : <span className="text-[#a5d6ff]">"Soni",</span> </p>
        <p className={`${css_attribute}`}>"Date-of-Birth" : <span className="text-[#a5d6ff]">"01-02-2001",</span></p>
        <p className={`${css_attribute}`}>"Date-of-Issue" : <span className="text-[#a5d6ff]">"12 June 2002",</span></p>
        <p className={`${css_attribute}`}>"Date-of-Expiry": <span className="text-[#a5d6ff]">"12 June 2022",</span></p>
        <span className="text-yellow-500 text-xl font-bold ">{bracket2} </span>
      </div>


    </div>
  )
}

export default InformationCard