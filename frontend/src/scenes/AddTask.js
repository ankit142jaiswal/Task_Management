import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Departments from '../components/Departments';


function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const [priority, setPriority] = useState("");
    const [uploadfile, setUploadfile] = useState("");
    const [department ,setDepartment] = useState("");
    const [employee, setEmployee] = useState("");
    const [email, setEmail] = useState("")
    // const [team, setTeam] = useState([]);
    // const [data, setData] = useState([]);
   
    const navigate = useNavigate();
    const departments = Departments;   

    const collectData = (e) => {
        e.preventDefault();
        const data = { title, description, startdate, enddate, priority, department, employee, email };
        if (window.pendingList.push(data)) {
            window.alert("Task has been Assinged Successfully !!")
            console.log(window.pendingList);
            navigate('/', { state: { data: data } });
        }
        else {
            window.alert("Enter valid Credential !!")
        }
    }
     
    const [employeename , setEmployeeName] = useState([]);
    const [employeeemail, setEmployeeEmail] = useState([])
    const changeDepartment=(e)=>{
        setDepartment(e.target.value);
        setEmployeeName(departments.find((item)=> item.name === e.target.value).employee)
    }

    const changeEmployee = (e)=>{
        setEmployee(e.target.value);
        setEmployeeEmail(employeename.find((item)=> item.name === e.target.value).email)

    }

    const changeEmail=(e)=>{
        setEmail(e.target.value);
    }



    return (

        <div className='container mt-5 ' >
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-11'>
                    <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                        <h1 style={{ textAlign: "center" }}>Assing New Task </h1>
                    </div>
                    <form>
                        <div className='row p-5' style={{ textAlign: "center", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>

                            <div className="mb-3 row">
                                <div className='col-1'></div>
                                <div className='col-2  text-start'>

                                    <label htmlFor="title" className="form-label">Title</label>
                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-6' >

                                    <input type="text" className="form-control" id="title" placeholder='enter title here' value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>

                            </div>
                            <div className='mb-3 row'>
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>
                                    <label htmlFor="team" className="form-label">Department</label>

                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-auto'>

                                    <select className="form-select" id='department' value={department} onChange={changeDepartment}  >
                                        <option selected >Department</option>
                                        {
                                            departments.map((item) =>(
                                                <option value={item.name}>{item.name}</option>
                                            ))
                                        }
                                       
                                    </select>
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>
                                    <label htmlFor="team" className="form-label">Employee</label>

                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-auto'>

                                    <select className="form-select" id='employee' value={employee} onChange={changeEmployee}  >
                                        <option selected >Employee</option>
                                        {
                                            employeename.map( (item)=>[
                                                <option value={item.name}>{item.name}</option>
                                            ])
                                        }                                
                                                                               
                                    </select>
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>
                                    <label htmlFor="email" className="form-label">Email</label>

                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-auto'>

                                    <select className="form-select" id='email' value={email} onChange={changeEmail}  >
                                        <option selected >Email</option>
                                        {
                                            employeeemail.map( (item)=>[
                                                <option value={item.name}>{item.name}</option>
                                            ])
                                        }                                
                                                                               
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>
                                    <label htmlFor="startdate" className="form-label">Date of Assingment</label>
                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-2'>

                                    <input type="date" className="form-control" id="startdate" value={startdate} onChange={(e)=>setStartDate(e.target.value)} />
                                </div>

                            </div>
                            <div className="mb-3 row">
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>
                                    <label htmlFor="enddate" className="form-label">Date of Submission</label>
                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-2'>

                                    <input type="date" className="form-control" id="enddate" value={enddate} onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                            </div>

                            <div className='mb-3 row'>
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>

                                    <label htmlFor="description" className="form-label">Discription</label>
                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-6'>

                                    <textarea type="description" className="form-control" id="description" placeholder='Free textfield' rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>

                            <div className='mb-3 row'>
                                <div className='col-1'></div>

                                <div className='col-2 text-start'>
                                    <label htmlFor="formFile" className="form-label">Upload File</label>

                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-6'>
                                    <input className="form-control" type="file" id="uploadfile" value={uploadfile} onChange={(e) => setUploadfile(e.target.value)} />
                                </div>
                            </div>


                            <div className='mb-3 row'>
                                <div className='col-1'></div>
                                <div className='col-2 text-start'>
                                    <label htmlFor="priority" className="form-label">Priority</label>

                                </div>
                                <div className='col-1'>:</div>
                                <div className='col-auto'>

                                    <select className="form-select" id='priority' value={priority} onChange={(e) => setPriority([e.target.value])}  >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <div className='col-4'></div>
                                <div className='col-auto'>

                                    <Link to='/' className="btn btn-info">Cancel</Link>
                                </div>
                                <div className='col-auto'>
                                    <button type="button" className="btn btn-success" onClick={collectData}>Assing Task </button>

                                </div>

                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </div>


    )
}

export default AddTask