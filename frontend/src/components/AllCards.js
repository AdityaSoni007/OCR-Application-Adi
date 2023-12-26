import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { apiConnector } from '../services/apiconnector'
import { toast } from 'react-hot-toast';
import UpdateModal from './UpdateModal';
import Footer from './Footer';




function AllCards() {
    // const BASE_URL = "http://localhost:4000/api/v1/idCard";
    const BASE_URL = "https://ocr-application-backend.onrender.com/api/v1/idCard";
    const [cardDetails, setCardDetails] = useState([{}]);
    const [load, setLoad] = useState(true);
    const [modal, setModal] = useState(false);
    
    const [filter, setFilter] = useState('name')
    const [formData, setFormData] = useState({
        _id: "",
        identification_number: "",
        name: "",
        last_name: "",
        date_of_birth: "",
        date_of_issue: "",
        date_of_expiry: "",
    });

    //==================================== API Call for get card details ===========================================


    useEffect(() => {
        fetchApiResponse();
    }, [load]);

    async function fetchApiResponse() {
        try {
            const response = await apiConnector("GET", `${BASE_URL}/getAllDetails`);
            setCardDetails(response.data);
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }

    //==============================================================================================================



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

    const handleChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value });
    };
    const changeHandler = (e) => {
        setFilter(e.target.value);
    };

    //==================================== Helper Variables for react tables =======================================

    const columns = [
        {
            name: "Identification Number",
            selector: row => row.identification_number,
            
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
            selector: row => row.date_of_issue,
            sortable: true
        },
        {
            name: "Date-of-Expiry",
            selector: row => row.date_of_expiry,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) => (<div className='flex gap-x-2'> <button className="text-white text-sm font-bold bg-[#3ab3ff] rounded-md flex items-center justify-center px-[0.5rem] h-[2.5rem] hover:bg-[#0033ff] hover:shadow-md w-[5vw]" onClick={() => {
                setModal(true); openUpdate(row)
            }}> Update</button><button className="text-white text-sm font-bold bg-[#d73939] rounded-md flex items-center justify-center px-[0.5rem] w-[5vw] h-[2.5rem] hover:bg-[#ff6b57] hover:shadow-md" onClick={() => { handleDelete(row) }}>Delete</button></div>)
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

    //==============================================================================================================




    //==================================== Update details API Call  ===============================================


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

    //==============================================================================================================


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
    
    function handleFilter(event) {
        let newData;
        if (filter === "identification_number") {
            newData = cardDetails.filter(row => {
                return row.identification_number.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }
        if (filter === "name") {
            newData = cardDetails.filter(row => {
                return row.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }
        if (filter === "last_name") {
            newData = cardDetails.filter(row => {
                return row.last_name.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }
        if (filter === "date_of_birth") {
            newData = cardDetails.filter(row => {
                return row.date_of_birth.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }
        
        if(event.target.value.toLowerCase()===""){
            setLoad(!load);
        }
        setCardDetails(newData)
    }
    return (
        <>
            <div className='w-[95vw] mx-auto h-[90vh] mt-5 '>
                <div className="text-end flex items-center justify-end">
                    <div className='mr-2'>
                        <label htmlFor="filter"></label>

                        <select
                            id="filter"
                            name="filter"
                            value={filter}
                            onChange={changeHandler}
                            className="outline p-1"
                        >

                            <option>identification_number</option>
                            <option>name</option>
                            <option>last_name</option>
                            <option>date_of_birth</option>
                        </select>
                    </div>
                    <input type="text" className='border-2 border-black outline-none p-1 w-[20vw]' placeholder={`Filter by ${filter}`} onChange={handleFilter} />
                </div>
                <DataTable title="Thai ID Card details" fixedHeader columns={columns} data={cardDetails} pagination customStyles={tableHeaderStyle}></DataTable>
            </div>

            {modal ? <UpdateModal setModal={setModal} handleUpdate={handleUpdate} formData={formData} handleChange={handleChange} /> : <></>}

            
            
        </>
    )
}

export default AllCards