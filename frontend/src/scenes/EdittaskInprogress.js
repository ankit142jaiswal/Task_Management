import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Departments from '../components/Departments';


function EdittaskInprogress() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const [priority, setPriority] = useState("");
    const [uploadfile, setUploadfile] = useState("");
    const [team, setTeam] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    // const [data, setData] = useState([]);
    const showdata = () => {

        if (window.inprogressList[location.state.index] != []) {
            setTitle(window.inprogressList[location.state.index].title);
            setDescription(window.inprogressList[location.state.index].description);
            setStartDate(window.inprogressList[location.state.index].startdate);
            setEndDate(window.inprogressList[location.state.index].enddate);
            setPriority(window.inprogressList[location.state.index].priority);
            setUploadfile(window.inprogressList[location.state.index].uploadfile);
            setDepartment(window.inprogressList[location.state.index].department);
            setEmployee(window.inprogressList[location.state.index].employee);

            
        }
    }

    useEffect(() => {
        showdata()
    }, []);



    const collectData = (e) => {
        e.preventDefault();
        const data = { title, description, startdate, enddate, priority, department, employee };
        if (location.state.index > -1 && location.state.index < window.inprogressList.length) {
            window.inprogressList.splice(location.state.index, 1, data);
            window.alert("Task has Updated Successfully !!")
            console.log(window.inprogressList);
            navigate('/', { state: { data: data } });
        }
        else {
            window.alert("Enter valid Credential !!")
        }
    }

    
    const [department ,setDepartment] = useState([]);
    const [employee, setEmployee] = useState([]);
    const departments = Departments
    const [departmentname , setDepartmentName ]= useState([]);
    const changeDepartment=(e)=>{
        setDepartment(e.target.value);
        setDepartmentName(departments.find((item)=> item.name === e.target.value).employee)
    }
    return (

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-11'>
                    <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                        <h1 style={{ textAlign: "center" }}>Edit Inprogress Task </h1>
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

                                    <select className="form-select" id='employee' value={employee} onChange={(e) => setEmployee([e.target.value])}  >
                                        <option selected >Employee</option>
                                        {
                                            departmentname.map( (item)=>[
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

                                    <input type="date" className="form-control" id="startdate" value={startdate} onChange={(e) => setStartDate(e.target.value)} />
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

                                    <Link to='/' className="btn btn-info">Back</Link>
                                </div>
                                <div className='col-auto'>
                                    <button type="button" className="btn btn-success" onClick={collectData}>Save Changes</button>

                                </div>

                            </div>
                        </div>

                    </form >
                </div>
            </div>
        </div>
    )
}

export default EdittaskInprogress