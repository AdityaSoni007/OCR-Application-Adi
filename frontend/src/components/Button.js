import React from "react";

function Button(props){
    return(
        <button className=" w-[100%] text-white text-sm font-bold bg-[#ff933a] rounded-md flex items-center justify-center pl-[1rem] pr-[1rem] h-[2.5rem] hover:bg-[#ff6400] hover:shadow-md ">{props.title}</button>
    )
}
export default Button;