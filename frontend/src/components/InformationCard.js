import React from 'react'

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

      <div className="sm:max-md:gap-y-10 md:w-[50%] h-[100%] flex items-start justify-center ">


        {
          loading ? (<div className="grid my-auto place-items-center">
            <div className="loader"></div>
          </div>) :
            (<div className="border-2 border-white bg-gray-900 p-12 w-[80%]">

              <h1 className="text-[#ffffff] text-4xl font-bold text-center mb-5">JSON DATA</h1>
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