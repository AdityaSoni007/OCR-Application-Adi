import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { apiConnector } from '../services/apiconnector'
import { toast } from 'react-hot-toast';
import UpdateModal from './UpdateModal';
import { CiFilter } from "react-icons/ci";


function AllCards() {
    const BASE_URL = "http://localhost:4000/api/v1/idCard";
    const [cardDetails, setCardDetails] = useState([{}]);
    const [load, setLoad] = useState(true);
    const [modal, setModal] = useState(false);

    async function fetchApiResponse() {
        try {
            const response = await apiConnector("GET", `${BASE_URL}/getAllDetails`);
            setCardDetails(response.data);
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }

    useEffect(() => {
        fetchApiResponse();
    }, [load]);

    const handleDelete = async (row) => {
        try {
            await apiConnector("DELETE", `${BASE_URL}/delete/${row._id}`);
            const updatedData = cardDetails.filter((item) => item.id !== row._id);
            setCardDetails(updatedData);
            setLoad((prev) => !prev);
            toast.success("Card Deleted Successfully");
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }

    const columns = [
        {
            name: "Identification Number",
            selector: row => row.identification_number
        },
        {
            name: "Name",
            selector: row => row.name
        },
        {
            name: "Last Name",
            selector: row => row.last_name
        },
        {
            name: "Date-of-Birth",
            selector: row => row.date_of_birth
        },
        {
            name: "Date-of-Issue",
            selector: row => row.date_of_issue
        },
        {
            name: "Date-of-Expiry",
            selector: row => row.date_of_expiry
        },
        {
            name: "Action",
            cell: (row) => (<div className='flex gap-x-2'><button className="text-white text-sm font-bold bg-[#d73939] rounded-md flex items-center justify-center px-[0.5rem]  h-[2.5rem] hover:bg-[#ff6b57] hover:shadow-md" onClick={() => { handleDelete(row) }}>Delete</button> <button className="text-white text-sm font-bold bg-[#ff933a] rounded-md flex items-center justify-center px-[0.5rem] h-[2.5rem] hover:bg-[#ff6400] hover:shadow-md" onClick={() => {
                setModal(true); openUpdate(row)
            }}> Update</button></div>)
        }

    ]

    const tableHeaderStyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white"
            }
        }
    }

    const [formData, setFormData] = useState({
        _id: "",
        identification_number: "",
        name: "",
        last_name: "",
        date_of_birth: "",
        date_of_issue: "",
        date_of_expiry: "",
    });

    const handleChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value });
    };



    const handleUpdate = async (id, e) => {
        e.preventDefault();


        try {

            await apiConnector("PUT", `${BASE_URL}/update/${id}`, JSON.stringify(formData), {
                "Content-Type": "application/json",
            });
            setLoad((prev) => !prev);
            toast.success("Card updated Successfully");
            setModal(false);

        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }



        setFormData({
            _id: "",
            identification_number: "",
            name: "",
            last_name: "",
            date_of_birth: "",
            date_of_issue: "",
            date_of_expiry: "",
        })
    };


    const openUpdate = async (item) => {
        formData._id = item._id
        formData.identification_number = item.identification_number
        formData.name = item.name
        formData.last_name = item.last_name
        formData.date_of_birth = item.date_of_birth
        formData.date_of_issue = item.date_of_issue
        formData.date_of_expiry = item.date_of_expiry
        window.scrollTo({
            top: 10000,
            behavior: "smooth"
        })
    }
   







    const [records, setRecords] = useState(cardDetails);
    function handleFilter(event) {
        const newData = cardDetails.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
        setCardDetails(newData)
    }
    return (
        <>
            <div className='w-[90vw] h-[90vh] mx-auto mt-5 '>
                <div className="text-end">

                  
                    <input type="text" className='border-2 border-black outline-none p-1' placeholder={`Filter by Name`} onChange={handleFilter} />

                </div>
                <DataTable title="Thai ID Card details" fixedHeader columns={columns} data={cardDetails} pagination customStyles={tableHeaderStyle}></DataTable>
            </div>

            {modal ? <UpdateModal handleUpdate={handleUpdate} formData={formData} handleChange={handleChange} /> : <></>}
        </>
    )
}

export default AllCards