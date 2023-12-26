import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';
import { FiClipboard } from "react-icons/fi";


function InformationCard({ formData, loading }) {

  const css_attribute = "text-[#7ee787] text-lg font-semibold tracking-wide ml-5";
  const bracket1 = "{";
  const bracket2 = "}"

  const { identification_number, name, last_name, date_of_birth, date_of_expiry, date_of_issue } = formData;

  const CardDetails = [
    {
      label: "Identification Number",
      field: identification_number
    },
    {
      label: "Name",
      field: name
    },
    {
      label: "Last-Name",
      field: last_name
    },
    {
      label: "Date-of-Birth",
      field: date_of_birth
    },
    {
      label: "Date-of-Issue",
      field: date_of_issue
    },
    {
      label: "Date-of-Expiry",
      field: date_of_expiry
    },


  ]

  return (
    <>

      <div className=" md:w-[50%] h-[100%] max-md:w-[100vw] max-md:mt-5 flex items-start justify-center ">


        {
          loading ? (<div className="grid my-auto place-items-center">
            <div className="loader"></div>
          </div>) :
            (<div className="border-2 border-white bg-gray-900 p-12 w-[80%]">

              <div className="flex  justify-between items-start">
                <h1 className="text-[#ffffff] text-3xl font-bold  mb-5">JSON DATA</h1>
                <CopyToClipboard text={JSON.stringify(formData)}
                  onCopy={() => toast.success("Copied to clipboard")}><button className='text-white  px-2 text-end'>< FiClipboard className='text-3xl hover:text-[#7bc4f4]' /></button></CopyToClipboard></div>
              <span className="text-yellow-500 text-xl font-bold mb-2">{bracket1} </span>
              {CardDetails.map((item) => (<p className={`${css_attribute}`}>"{item.label}" :
                <span className="text-[#a5d6ff]">"{item.field}",</span>
              </p>))}
              <span className="text-yellow-500 text-xl font-bold ">{bracket2} </span>

            </div>)
        }

      </div>
    </>
  )
}

export default InformationCard