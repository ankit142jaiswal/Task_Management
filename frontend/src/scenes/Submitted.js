import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Submitted() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const detailview = (index) => {
        navigate('/detailviewsubmitted', { state: { index: index } });

    }
 
     const deletetask = (index) => {

        if (window.submittedList.splice(index, 1)) {
            window.alert('Task has been Deleted Successfully !!')
        }
        if (window.submittedList == []) {
            window.alert("No Current Task Inprogress !!")
        }
        navigate('/')
    }
    const edittask = (index) => {
        navigate('/edittasksubmitted', { state: { index: index } });

    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-11'>
                    <div className='mb-3 row p-3  ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                        <h1 style={{ textAlign: "center" }}>Submitted Task <hr /></h1>


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
                                <Link to={'/addtask'} className='btn bg-info ' style={{fontWeight:"bold"}} ><img src="add.svg" alt="" /> Add Task</Link>
                            </div>

                        </div>

                    </div>
                    <hr />
                    <div className='mb-3'>
                        {
                            window.submittedList.length != 0 ?
                            window.submittedList.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase()))
                            || (item.department.toLowerCase().includes(search.toLowerCase())) || (item.employee.toLowerCase().includes(search.toLowerCase()))
                        ))
                                .map((i, index) => {

                                    return (
                                        <>
                                            <div className='mb-3 row border p-4 ' style={{
                                                fontSize: "larger", backgroundColor: "white", fontWeight: "bolder",
                                                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                            }} >
                                              
                                                                    <div className='col-auto'>
                                                                        {index + 1}.
                                                                    </div>
                                                                    <div className='col-9'>
                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Title:
                                                                            </div>
                                                                            <div className='col-auto'>
                                                                                {i.title}

                                                                            </div>
                                                                        </div>

                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Description:
                                                                            </div>
                                                                                <div className='col-auto'>
                                                                                    {i.description}
                                                                                </div>

                                                                        </div>

                                                                    </div>

                                                               
                                                <div className='col-auto'>
                                                    <button className='btn bg-info  mt-2'
                                                        onClick={() => detailview(index)}
                                                    ><img src="viewmore.svg" alt="" /></button>
                                                </div>
                                                <div className='col-auto'>
                                                    <button className='btn bg-danger mt-2'
                                                        onClick={() => deletetask(index)}
                                                    ><img src="delete.svg" alt="" /></button>
                                                </div>
                                                <div className='col-auto'>
                                                    <button className='btn bg-warning mt-2'
                                                        onClick={() => edittask(index)}
                                                    ><img src="edit.svg" alt="" /></button>
                                                </div>
                                            </div>

                                        </>
                                    )
                                }) : <div>
                                    <div className='row mb-3 border p-3 justify-content-center ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >
                                        
                                            No Current Submitted TasK !!
                                        
                                    </div>
                                </div>}



                    </div>



                </div>
            </div>

        </div>

    )
}

export default Submitted