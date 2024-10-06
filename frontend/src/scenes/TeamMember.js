import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TeamMember() {

   
    const navigate = useNavigate();
   
    const [search, setSearch] = useState("");

    const viewprofile = (index)=>{
        navigate('/detailviewemployee', { state: { index: index } });

    }
    const editprofile = (index)=>{
        navigate('/editemployee', { state: { index: index } });

    }
    const deleteprofile =(index)=>{
        if (window.employeeList.splice(index, 1)) {
            window.alert('Employee Detail has been Deleted Successfully !!')
        }
        if (window.employeeList == []) {
            window.alert("No Current Employee Avilable !!")
        }
        navigate('/teammember')

    }

   



    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-11'>
                    <div className='mb-3 row p-3  ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                        <h1 style={{ textAlign: "center" }}>Team Member <hr /></h1>


                        <div className='row mb-3 justify-content-around'>
                      
                                                             

                            <div className='col-auto pt-1'>
                                Search
                            </div>

                            <div className='col-8'>
                                <input type="text" className='form-control' id='searchInput' placeholder='Keyword Search'  style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px", fontWeight:"bold" }}
                                    value={search} onChange={(e) => { setSearch(e.target.value) }}
                                />
                            </div>


                            <div className='col-auto'>
                                <Link to={'/addemployee'} className='btn bg-info' style={{fontWeight:"bold"}} ><img src="add.svg" alt="" /> Add Employee</Link>
                            </div>

                        </div>

                    </div>
                    <hr />
                    <div className='mb-3'>
                        {
                            window.employeeList.length != 0 ?
                            window.employeeList.filter((item) => ((item.name.toLowerCase().includes(search.toLowerCase()))|| (item.department.toLowerCase().includes(search.toLowerCase())) || (item.email.toLowerCase().includes(search.toLowerCase())) || (item.bio.toLowerCase().includes(search.toLowerCase()))))
                                .map((i, index) => {

                                    return (
                                        <>
                                            <div className='mb-3 row border p-4' style={{
                                                fontSize: "larger", backgroundColor: "white", fontWeight: "bolder",
                                                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                            }} >
                                             
                                                        <div className='col-auto'>
                                                            {index + 1}.
                                                        </div>
                                                        <div className='col-auto' >
                                                           <img src="profile.svg" alt="" style={{height:"60px"}} />
                                                        </div>
                                                        <div className='col-8'>
                                                            

                                                            <div className='row'>
                                                                <div className='col-auto'>
                                                                    Name:
                                                                </div>
                                                                <div className='col-auto'>
                                                                    {i.name}
                                                                </div>
                                                            </div>

                                                            <div className='row'>
                                                                <div className='col-auto'>
                                                                    Email:
                                                                </div>
                                                                <div className='col-auto'>
                                                                    {i.email}
                                                                </div>

                                                            </div>

                                                        </div>

                                                <div className='col-auto'>
                                                    <button className='btn bg-info mt-2'
                                                        onClick={() => viewprofile(index)}
                                                    ><img src="viewmore.svg" alt="" /></button>
                                                </div>
                                                <div className='col-auto'>
                                                    <button className='btn bg-danger mt-2'
                                                        onClick={() => deleteprofile(index)}
                                                    ><img src="delete.svg" alt="" /></button>
                                                </div>
                                                <div className='col-auto'>
                                                    <button className='btn bg-warning mt-2'
                                                        onClick={() => editprofile(index)}
                                                    ><img src="edit.svg" alt=""/></button>
                                                </div> 
                                            </div>

                                        </>
                                    )
                                }) : <div>
                                    <div className='row mb-3 border p-3 justify-content-center ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >
                                       
                                            No Current Pending Task !!
                                        
                                    </div>
                                </div>}



                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TeamMember