import React, { useState } from 'react';
import { apiConnector } from '../services/apiconnector'
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { toast } from 'react-hot-toast';

// const BASE_URL = "http://localhost:4000/api/v1/idCard";
const BASE_URL = "https://ocr-application-backend.onrender.com/api/v1/idCard";


function ImageUploader({ setFormData, setLoading }) {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState(null);


    async function handleClick() {


        try {
            if (!image) {
                toast.error("Please select File");
                return;
            }
            setLoading(true);
            const toastId = toast.loading("Loading...")


            const formDataa = new FormData();
            formDataa.append('image', file)
            const response = await apiConnector("POST", `${BASE_URL}/fetch`, formDataa);

            const newFormData = {
                identification_number: response.data.identification_number,
                name: response.data.name,
                last_name: response.data.last_name,
                date_of_birth: response.data.date_of_birth,
                date_of_issue: response.data.date_of_issue,
                date_of_expiry: response.data.date_of_expiry
            }
            toast.dismiss(toastId)
            toast.success("Success !!");
            setLoading(false);
            setFormData(newFormData)
            console.log("Printing form data afetr api call", newFormData);

        } catch (err) {
            toast.error(err.message);
        }



    }


    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setFileName(file.name);
        setFile(e.target.files[0])
        e.target.files[0] && setFileName(e.target.files[0].name)
        if (e.target.files) {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }


    return (
        <div className=" flex flex-col md:w-[50%] ">

            <form className="sm:max-md:h-[50vh] md:h-[80%] md:w-[100%] flex flex-col items-center justify-center outline-dashed bg-[white] outline-blue-400 cursor-pointer" onClick={() => document.querySelector(".input-field").click()}>
                <input type="file" accept="image/png, image/jpg, image/jpeg" className="input-field" onChange={handleFileChange} hidden name="image" />
                {image ? <img src={image} width={340} height={240} alt={fileName} /> :
                    <>
                        <MdCloudUpload color='#1475cf' size={60} />
                        <p>Browse Files to upload</p>
                    </>
                }
            </form>


            {/* DISCLAIMER */}

            <section className=" mt-2 flex items-center p-4 bg-yellow-200 w-[100%]  tracking-wide gap-3 text-center"><img src="./assets/alert.svg" alt="alert icon" />

                <span className="text-red-600 font-bold text-lg">NOTE: </span>
                <span className="font-medium">File should not exceed 2MB </span>

            </section>

            {/* BUTTON SECTION */}
            <section className="mt-2 flex justify-center items-center p-4 bg-[white] w-[100%] gap-3">


                <button type='submit' className=" w-[100%] text-white text-sm font-bold bg-[#ff933a] rounded-md flex items-center justify-center pl-[1rem] pr-[1rem] h-[2.5rem] hover:bg-[#ff6400] hover:shadow-md " onClick={handleClick}>Fetch Information</button>
                <span className="flex items-center w-[10%] cursor-pointer">

                    <MdDelete className="text-4xl hover:text-red-700" onClick={() => {
                        if (fileName) {
                            toast.success("File Removed");
                            setFileName("No selected file");
                            setImage(null);
                            setFormData({});
                        }
                        else {
                            toast.error("Please Select File")
                        }


                    }} />
                </span>


            </section>


        </div>
    )
}

export default ImageUploader

