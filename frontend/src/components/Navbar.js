import React from "react";
import Button from "./Button";
import { Navigate,Link } from "react-router-dom";
function Navbar() {

    const clickHandler = ()=>{

    }

    return (
        <div>
                                   {/* NAVIGATION BAR */}
            <nav className=" w-[100%] flex items-center justify-between  p-4">
                <div className="flex gap-2 items-center justify-center ">
                    <img src="./assets/qoala-logo.svg" className="hover:cursor-pointer" alt="Qoala-icon"></img>
                    <h1 className="font-bold text-[#1253a4] text-2xl">Assignment</h1>
                </div>

                <div className="flex gap-x-2 justify-center items-center ">
                    <Link to='/allCard'><Button title="History" ></Button></Link>
                </div>
            </nav>

        </div>
    );
} 
export default Navbar;