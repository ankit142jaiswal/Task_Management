import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Departments from '../components/Departments';

function AddEmployee() {
    const [name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [joiningdate, setJoiningDate] = useState("");  
    const [picture, setPicture] = useState("");
    const [contact , setContact]=useState("");
    
   
    const navigate = useNavigate();

    const collectData=(e)=>{
        e.preventDefault();
        const data = { name,email, bio, joiningdate, department, picture, contact };
        if (window.employeeList.push(data)) {
            window.alert("Employee Details has been Added Successfully !!")
            console.log(window.employeeList);
            navigate('/teammember', { state: { data: data } });
        }
        else {
            window.alert("Enter valid Credential !!")
        }
    }

    const departments = Departments;
    const [department ,setDepartment] = useState([]);
    // const [employee, setEmployee] = useState([]);
    // const [employeename , setEmployeeName] = useState([]);
     
    const [departmentname , setDepartmentName ]= useState([]);
    const changeDepartment=(e)=>{
        setDepartment(e.target.value);
        setDepartmentName(departments.find((item)=> item.name === e.target.value).employee)
    }

  

     
  return (
    <div className='container mt-5 ' >
    <div className='row'>
        <div className='col-1'></div>
        <div className='col-11'>
            <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                <h1 style={{ textAlign: "center" }}>Add New Employee Detail </h1>
            </div>
            <hr />
            <form>
                <div className='row p-5' style={{ textAlign: "center", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>

                    <div className="mb-3 row">
                        <div className='col-1'></div>
                        <div className='col-2  text-start'>
                            <label htmlFor="name" className="form-label">Name</label>
                        </div>
                        <div className='col-1'>:</div>
                        <div className='col-6' >

                            <input type="text" className="form-control" id="name" placeholder='enter employee name here' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                    </div>
                    <div className="mb-3 row">
                        <div className='col-1'></div>
                        <div className='col-2  text-start'>
                            <label htmlFor="contact" className="form-label">Contact</label>
                        </div>
                        <div className='col-1'>:</div>
                        <div className='col-6' >

                            <input type="tel" className="form-control" id="Contact" placeholder='enter employee contact number here' value={contact} onChange={(e) => setContact(e.target.value)} />
                        </div>

                    </div>
                    <div className="mb-3 row">
                        <div className='col-1'></div>
                        <div className='col-2  text-start'>
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className='col-1'>:</div>
                        <div className='col-6' >

                            <input type="text" className="form-control" id="email" placeholder='enter employee email here' value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    
                   <div className="mb-3 row">
                        <div className='col-1'></div>
                        <div className='col-2 text-start'>
                            <label htmlFor="joiningdate" className="form-label">Date of Joining</label>
                        </div>
                        <div className='col-1'>:</div>
                        <div className='col-2'>

                            <input type="date" className="form-control" id="joiningdate" value={joiningdate} onChange={(e)=>setJoiningDate(e.target.value)} />
                        </div>

                    </div>
                 

                    <div className='mb-3 row'>
                        <div className='col-1'></div>
                        <div className='col-2 text-start'>

                            <label htmlFor="bio" className="form-label">Bio</label>
                        </div>
                        <div className='col-1'>:</div>
                        <div className='col-6'>

                            <textarea type="bio" className="form-control" id="bio" placeholder='Free textfield' rows="4" value={bio} onChange={(e) => setBio(e.target.value)} />
                        </div>
                    </div>

                    <div className='mb-3 row'>
                        <div className='col-1'></div>

                        <div className='col-2 text-start'>
                            <label htmlFor="picture" className="form-label">Picture</label>

                        </div>
                        <div className='col-1'>:</div>
                        <div className='col-6'>
                            <input className="form-control" type="file" id="" value={picture} onChange={(e) => setPicture(e.target.value)} />
                        </div>
                    </div>


                   
                    <div className='mb-3 row'>
                        <div className='col-4'></div>
                        <div className='col-auto'>

                            <Link to='/' className="btn btn-info">Cancel</Link>
                        </div>
                        <div className='col-auto'>
                            <button type="button" className="btn btn-success" onClick={collectData}>Add Employee </button>

                        </div>

                    </div>
                </div>
            </form >
        </div>
    </div>
</div>

  )
}

export default AddEmployee