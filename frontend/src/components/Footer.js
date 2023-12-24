import React from "react";

function Footer() {
    return (
        <div className="w-[100%] md:flex items-center justify-between  p-4">
            {/* LEFT SECTION  */}
            <div className="w-[50%] flex flex-col">
                <img src="./assets/qoala-logo.svg" width="192" height="144" alt="Qoala-icon"></img>
                <p className="mt-5 tracking-normal text-[.875rem] text-[#6d6e71] block font-[400]" loading="lazy">Qoala is the biggest omnichannel InsurTech company in Southeast Asia. Our goal is to simplify the insurance buying process in Malaysia while making it accessible, affordable and easy to use. We may even make insurance a little fun!</p>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center justify-center b gap-x-5">
                <img src="./assets/InsuranceFooter.svg" width="152" height="164" alt="insurance-icon" loading="lazy"></img>
                <h2 className="font-bold text-2xl text-[#000010] tracking-normal ">Qoala always<br></br> #DiSisiAnda </h2>
            </div>
        </div>
    )
}
export default Footer;