import React ,{useState}from "react";

import {Link } from "react-router-dom";
function Navbar() {
    const [data,setData] = useState(true);
    
    return (
        <div>
                                   {/* NAVIGATION BAR */}
            <nav className=" w-[100%] flex items-center justify-between  p-4">
                <div className="flex gap-2 items-center justify-center ">
                    <Link to ='/' onClick={()=>{setData(true)}}><img src="./assets/qoala-logo.svg" className="hover:cursor-pointer w-[8.5vw]" alt="Qoala-icon"></img></Link>
                    <h1 className="font-bold text-[#1253a4] text-[2vw]">Assignment</h1>
                </div>

                <div className="flex gap-x-2 justify-center items-center ">
                    {data ?(<div><Link to='/allCards'><button className=" w-[100%] text-white text-sm font-bold bg-[#ff933a] rounded-md flex items-center justify-center pl-[1rem] pr-[1rem] h-[2.5rem] hover:bg-[#ff6400] hover:shadow-md " onClick={()=>{setData(false)}}>All Card Details</button></Link></div>):(<Link to='/'><button className=" w-[100%] text-white text-sm font-bold bg-[#ff933a] rounded-md flex items-center justify-center pl-[1rem] pr-[1rem] h-[2.5rem] hover:bg-[#ff6400] hover:shadow-md "onClick={()=>{setData((prev)=>!prev)}}>Scan a Card</button></Link>)}
                </div>
            </nav>

        </div>
    );
} 
export default Navbar;