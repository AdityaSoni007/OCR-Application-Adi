import React from 'react'

function UpdateModal({ handleUpdate, formData, handleChange }) {

    const cssAttributes= "rounded-sm bg-gray-200 border-b-2 border-gray-800 p-1 outline-none w-[50%]";
    const attributes ="text-[#79de82] text-lg font-semibold"

    return (
        <div className='fixed inset-0 z-[1000] mt-0 grid place-items-center overflow-auto backdrop-blur-sm' >
            <form onSubmit={(e) => handleUpdate(formData._id, e)} className=' p-6 flex flex-col gap-y-5 border-2 border-black w-[50vw] shadow-black shadow-2xl bg-[#111827]'>
                <div className=" flex justify-between" ><label className={`${attributes}`}>"Identification Number" :</label>
                    <input
                        type="text"
                        placeholder="Identification Number"
                        value={formData.identification_number}
                        onChange={(e) => handleChange(e, "identification_number")} 
                        className= {`${cssAttributes}`}
                    /></div>

                <div className=" flex justify-between"><label className={`${attributes}`} >"Name" : </label><input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleChange(e, "name")}
                    className= {`${cssAttributes}`}
                /></div>
                <div className=" flex justify-between"><label className={`${attributes}`}> "Last Name" :</label><input
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={(e) => handleChange(e, "last_name")}
                    className= {`${cssAttributes}`}
                /></div>
                <div className=" flex justify-between"><label className={`${attributes}`}> "Date-of-Birth" : </label><input
                    type="text"
                    placeholder="Date of Birth"
                    value={formData.date_of_birth}
                    onChange={(e) => handleChange(e, "date_of_birth")}
                    className= {`${cssAttributes}`}
                /></div>
                <div className=" flex justify-between"><label className={`${attributes}`}>"Date-of-Issue" :</label><input
                    type="text"
                    placeholder="Date of Issue"
                    value={formData.date_of_issue}
                    onChange={(e) => handleChange(e, "date_of_issue")}
                    className= {`${cssAttributes}`}
                /></div>
                <div className=" flex justify-between"><label className={`${attributes}`}>"Date-of-Expiry" :</label><input
                    type="text"
                    placeholder="Date of Expiry"
                    value={formData.date_of_expiry}
                    onChange={(e) => handleChange(e, "date_of_expiry")}
                    className= {`${cssAttributes}`}
                /></div>
                <button type="submit" className="text-white text-sm font-bold bg-[#ff933a] rounded-md flex items-center justify-center px-[0.5rem] h-[2.5rem] hover:bg-[#ff6400] hover:shadow-md" >Update</button>
            </form>
        </div>
    )
}

export default UpdateModal