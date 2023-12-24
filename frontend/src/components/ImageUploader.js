import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import Button from "./Button.js";

function ImageUploader() {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    return (
        <div className=" flex flex-col w-[50%] ">

            <form action="" onClick={() => document.querySelector(".input-field").click()} className="h-[80%] w-[100%] flex flex-col items-center justify-center outline-dashed outline-blue-400 cursor-pointer">
                <input type="file" accept='image/*' className="input-field" hidden onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name)
                    if (files) {
                        setImage(URL.createObjectURL(files[0]))
                    }

                }} />
                {image ? <img src={image} width={150} height={150} alt={fileName} /> :
                    <>
                        <MdCloudUpload color='#1475cf' size={60} />
                        <p>Browse Files to upload</p>
                    </>
                }
            </form>


                {/* DISCLAIMER */}

            <section className=" mt-2 flex items-center p-4 bg-yellow-200 w-[100%] tracking-wide gap-3 text-center"><img src="./assets/alert.svg" alt="alert icon"/>

                <span className="text-red-600 font-bold text-lg">DISCLAIMER: </span>
                <span className="font-medium">File should not exceed 2MB </span>

            </section>

                {/* BUTTON SECTION */}
            <section className="mt-2 flex justify-center items-center p-4 bg-[#e9f0ff] w-[100%] gap-3">
                

                <Button title="Fetch Information" className="w-[70%]"></Button>
                <span className="flex items-center w-[10%] cursor-pointer">
                    
                    <MdDelete className="text-4xl" onClick={() => {
                            setFileName("No selected file")
                            setImage(null)
                            
                    }} />
                </span>


            </section>


        </div>
    )
}

export default ImageUploader; 