import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function TaskManagement() {

    //Pending
    const [search, setSearch] = useState("");
    const location = useLocation();
    // const [ data, setData]= useState();
    const navigate = useNavigate();
    useEffect(() => {
        // setData(location.state.data);

        console.log(window.pendingList);
    }, [])


    const detailviewpending = (index) => {
        navigate('/detailviewpending', { state: { index: index } });

    }


    //Inprogress

    const detailviewinprogress = (index) => {
        navigate('/detailviewinprogress', { state: { index: index } });

    }



    //completed
    const detailviewcompleted = (index) => {
        navigate('/detailviewcompleted', { state: { index: index } });

    }




    //submitted
    const detailviewsubmitted = (index) => {
        navigate('/detailviewsubmitted', { state: { index: index } });

    }


    //Deffered
    const detailviewdeffered = (index) => {
        navigate('/detailviewdeffered', { state: { index: index } });

    }



    return (
        <div className='container mt-2  '>
            <div className='row  '>
                <div className='col-1'></div>
                <div className='col-11  '>

                    <div className='mb-3 row p-3 justify-content-center ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>

                        {/* <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}> */}
                        <h1 style={{ textAlign: "center" }}>Dashboard <hr /></h1>
                        <div className='row mb-3 justify-content-around '>

                           
                            {/*  */}
                            <div className='col-auto pt-1'>
                                Search 
                            </div>
                            <div className='col-8'>
                                <input type="text" className='form-control' id='searchInput' placeholder='Keyword Search' style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px", fontWeight:"bold" }}
                                    value={search} onChange={(e) => { setSearch(e.target.value) }}
                                />
                            </div>
                           
                           
                            <div className='col-auto'>
                                <Link to={'/addtask'} className='btn bg-info' style={{fontWeight:"bold"}}><img src="add.svg" alt="?"/> ADD TASK</Link>
                            </div>

                        </div>

                        {/* </div> */}
                        <div className='row justify-content-between'>
                            <hr />

                            
                            <Link className='btn col-auto p-4 m-1 mb-3 text-info justify-content-center' to={'/pending'} style={{ width: "220px",  fontWeight:"bold", fontSize:"large",
                                 boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                    <div className='row justify-content-center'>Pending Task</div>
                                    <hr />
                                    <div className='row justify-content-center'>
                                        {
                                            window.pendingList.length != 0 ?
                                                window.pendingList.length : ""
                                        }</div>
                            </Link>
                                

                            <Link className='btn col-auto p-4 m-1 mb-3 text-warning justify-content-center' to={'/inprogress'} style={{ width: "220px",fontWeight:"bold", fontSize:"large", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                <div className='row justify-content-center'>InProgress task </div>

                                <hr />  <div className='row justify-content-center'>
                                    {
                                        window.inprogressList.length != 0 ?
                                            window.inprogressList.length : ""
                                    }</div>
                            </Link>
                            <Link className='btn col-auto p-4 m-1 mb-3 text-primary justify-content-center' to={'/completed'} style={{ width: "220px",fontWeight:"bold", fontSize:"large", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                <div className='row justify-content-center'> Completed Task
                                </div>
                                <hr /> <div className='row justify-content-center'>
                                    {
                                        window.completedList.length != 0 ?
                                            window.completedList.length : " "
                                    }</div>
                            </Link>


                            <Link className='btn col-auto p-4 m-1 mb-3 text-success justify-content-center' to={'/submitted'} style={{ width: "220px",fontWeight:"bold", fontSize:"large", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                <div className='row justify-content-center'>

                                    Submitted task
                                </div>
                                <hr /> <div className='row justify-content-center' >
                                    {
                                        window.submittedList.length != 0 ?
                                            window.submittedList.length : ""
                                    }</div>
                            </Link>

                            <Link className='btn col-auto p-4 m-1 mb-3 text-danger justify-content-center' to={'/deffered'} style={{ width: "220px",fontWeight:"bold", fontSize:"large", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                <div
                                    className='row justify-content-center'>

                                    Deffered Task
                                </div>
                                <hr />
                                <div className='row justify-content-center'>
                                    {
                                        window.defferedList.length != 0 ?
                                            window.defferedList.length : " "
                                    }</div>
                            </Link>

                            <hr />
                        </div>
                        <div className='row justify-content-center' >
                            <div className='row justify-content-between'>
                                <div className=' col-6 p-4  mb-3 ' style={{width:"555px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>

                                    <div className=' row justify-content-between text-info '>
                                        <div className='col-auto'>
                                            Pending task
                                        </div>
                                        <div className='col-auto'>

                                            {
                                                window.pendingList.length != 0 ?
                                                "Task:" + window.pendingList.length : "No Task"


                                            }
                                        </div>
                                    </div>

                                    <hr />

                                    <div className=' col-12 p-3 mb-3 overflow-auto' style={{ height: "120px" }}>
                                        {
                                            window.pendingList.length != 0 ?
                                                window.pendingList.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase())) || (item.department.toLowerCase().includes(search.toLowerCase())) || (item.employee.toLowerCase().includes(search.toLowerCase()))))
                                                    .map((i, index) => {

                                                        return (
                                                            <>
                                                                <div className='mb-3 row border p-4  ' style={{

                                                                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                                                }} >
                                                                    <div className='col-auto'>
                                                                        {index + 1}.
                                                                    </div>
                                                                    <div className='col-8'>
                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Title:
                                                                            </div>
                                                                            <div className='col-auto'>
                                                                                {i.title}
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div className='col-auto mt-1'>
                                                                        <button className='btn bg-info '
                                                                            onClick={() => detailviewpending(index)}
                                                                        ><img src="viewmore.svg" alt="" /></button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    }) : <div>
                                                    <div className='row mb-3 border p-3 justify-content-center  text-info' style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >

                                                        No Current Pending Task !!

                                                    </div>
                                                </div>
                                        }</div>
                                </div>
                                {/* <hr />
                            </div>

                            <div className='row'> */}
                                <div className=' col-6 p-4  mb-3 ' style={{width:"555px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>


                                    <div className=' row justify-content-between text-warning '>
                                        <div className='col-auto'>
                                            InProgress task
                                        </div>
                                        <div className='col-auto'>

                                            {
                                                window.inprogressList.length != 0 ?
                                                    "Task:" + window.inprogressList.length : "No Task"


                                            }
                                        </div>
                                    </div> <hr />
                                    <div className=' col-12 p-3 mb-3 overflow-auto' style={{ height: "120px" }}>
                                        {
                                            window.inprogressList.length != 0 ?
                                                window.inprogressList.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase())) || (item.department.toLowerCase().includes(search.toLowerCase())) || (item.employee.toLowerCase().includes(search.toLowerCase()))))
                                                    .map((i, index) => {

                                                        return (
                                                            <>
                                                                <div className='mb-3 row border p-4 text-start' style={{

                                                                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                                                }} >

                                                                    <div className='col-auto'>
                                                                        {index + 1}.
                                                                    </div>
                                                                    <div className='col-8'>
                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Title:
                                                                            </div>
                                                                            <div className='col-auto'>
                                                                                {i.title}

                                                                            </div>
                                                                        </div>                                                                        
                                                                    </div>

                                                                    <div className='col-auto mt-1'>
                                                                        <button className='btn bg-info mx-1'
                                                                            onClick={() => detailviewinprogress(index)}
                                                                        ><img src="viewmore.svg" alt="" /></button>

                                                                        {/* <button className='btn bg-danger text-white mx-1 '
                                                                            onClick={() => deletetaskinprogress(index)}
                                                                        >Delete Task</button>

                                                                        <button className='btn bg-warning text-white mx-1'
                                                                            onClick={() => edittaskinprogress(index)}
                                                                        >Edit Task</button> */}
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    }) : <div>
                                                    <div className='row mb-3 border p-3 justify-content-center text-warning' style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >

                                                        No Current Inprogress Task !!

                                                    </div>
                                                </div>
                                        }</div>
                                </div>
                                <hr />
                            </div>
                            <div className='row justify-content-between'>
                                <div className=' col-6 p-4  mb-3' style={{width:"555px", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>


                                    <div className=' row justify-content-between text-primary '>
                                        <div className='col-auto'>
                                            Completed Task
                                        </div>
                                        <div className='col-auto'>

                                            {
                                                window.completedList.length != 0 ?
                                                    "Task:" + window.completedList.length : "No Task"


                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className=' col-12 p-3 mb-3 overflow-auto' style={{ height: "120px" }}>
                                        {
                                            window.completedList.length != 0 ?
                                                window.completedList.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase()))|| (item.department.toLowerCase().includes(search.toLowerCase())) || (item.employee.toLowerCase().includes(search.toLowerCase()))))
                                                    .map((i, index) => {

                                                        return (
                                                            <>
                                                                <div className='mb-3 row border p-4' style={{
                                                                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                                                }} >


                                                                    <div className='col-auto'>
                                                                        {index + 1}.
                                                                    </div>
                                                                    <div className='col-8'>
                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Title:
                                                                            </div>
                                                                            <div className='col-auto'>
                                                                                {i.title}

                                                                            </div>
                                                                        </div>
                                                                      
                                                                    </div>



                                                                    <div className='col-auto mt-1'>
                                                                        <button className='btn bg-info mx-1'
                                                                            onClick={() => detailviewcompleted(index)}
                                                                        ><img src="viewmore.svg" alt="" /></button>

                                                                        {/* <button className='btn bg-danger text-white mx-1'
                                                                            onClick={() => deletetaskcompleted(index)}
                                                                        >Delete Task</button>

                                                                        <button className='btn bg-warning text-white mx-1'
                                                                            onClick={() => edittaskcompleted(index)}
                                                                        >Edit Task</button> */}
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    }) : <div>
                                                    <div className='row mb-3 border p-3 justify-content-center text-primary' 
                                                    
                                                    style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}
                                                     >

                                                        No Current Completed Task !!

                                                    </div>
                                                </div>
                                        }</div>
                                </div>
                                {/* <hr />
                            </div>
                            <div className='row'> */}


                                <div className=' col-6 p-4  mb-3' style={{ width:"555px",boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                    <div className=' row justify-content-between text-success '>
                                        <div className='col-auto'>

                                            Submitted Task
                                        </div>
                                        <div className='col-auto'>

                                            {
                                                window.submittedList.length != 0 ?
                                                    "Task:" + window.submittedList.length : "No Task"


                                            }
                                        </div>
                                    </div>
                                    <hr />

                                    <div className=' col-12 p-3 mb-3 overflow-auto' style={{ height: "120px" }}>
                                        {
                                            window.submittedList.length != 0 ?
                                                window.submittedList.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase())) || (item.department.toLowerCase().includes(search.toLowerCase())) || (item.employee.toLowerCase().includes(search.toLowerCase()))))
                                                    .map((i, index) => {

                                                        return (
                                                            <>
                                                                <div className='mb-3 row border p-4' style={{
                                                                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                                                }} >


                                                                    <div className='col-auto'>
                                                                        {index + 1}.
                                                                    </div>
                                                                    <div className='col-8'>
                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Title:
                                                                            </div>
                                                                            <div className='col-auto'>
                                                                                {i.title}

                                                                            </div>
                                                                        </div>
                                                                       
                                                                    </div>


                                                                    <div className='col-auto mt-1'>
                                                                        <button className='btn bg-info  mx-1'
                                                                            onClick={() => detailviewsubmitted(index)}
                                                                        ><img src="viewmore.svg" alt="" /></button>

                                                                        {/* <button className='btn bg-danger text-white mx-1'
                                                                            onClick={() => deletetasksubmitted(index)}
                                                                        >Delete Task</button>

                                                                        <button className='btn bg-warning text-white mx-1'
                                                                            onClick={() => edittasksubmitted(index)}
                                                                        >Edit Task</button> */}
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    }) : <div>
                                                    <div className='row mb-3 border  p-3 justify-content-center 
                                                      text-success
                                                     ' 
                                                    
                                                    style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}
                                                     >

                                                        No Current Submitted Task !!

                                                    </div>
                                                </div>
                                        }</div>
                                </div>
                                <hr />

                            </div>
                            <div className='row'>

                                <div className=' col-12 p-4  mb-3' style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                                    <div className=' row justify-content-between  text-danger'>
                                        <div className='col-auto'>

                                            Deffered Task
                                        </div>
                                        <div className='col-auto'>

                                            {
                                                window.defferedList.length != 0 ?
                                                    "Task:" + window.defferedList.length : "No Task"


                                            }
                                        </div>
                                    </div>

                                    <hr />
                                    <div className=' col-12 p-3 mb-3 overflow-auto' style={{ height: "120px" }}>
                                        {
                                            window.defferedList.length != 0 ?

                                                window.defferedList.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase())) || (item.department.toLowerCase().includes(search.toLowerCase())) || (item.employee.toLowerCase().includes(search.toLowerCase()))))
                                                    .map((i, index) => {

                                                        return (
                                                            <>
                                                                <div className='mb-3 row border p-4' style={{
                                                                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                                                }} >


                                                                    <div className='col-auto'>
                                                                        {index + 1}.
                                                                    </div>
                                                                    <div className='col-10'>
                                                                        <div className='row'>
                                                                            <div className='col-auto'>
                                                                                Title:
                                                                            </div>
                                                                            <div className='col-auto'>
                                                                                {i.title}

                                                                            </div>
                                                                        </div>                                                                       

                                                                    </div>



                                                                    <div className='col-auto mt-1'>
                                                                        <button className='btn bg-info mx-1  '
                                                                            onClick={() => detailviewdeffered(index)}
                                                                        ><img src="viewmore.svg" alt="" /></button>

                                                                        {/* <button className='btn bg-danger text-white mx-1'
                                                                                onClick={() => deletetaskdeffered(index)}
                                                                            >Delete Task</button>

                                                                            <button className='btn bg-warning text-white mx-1'
                                                                                onClick={() => edittaskdeffered(index)}
                                                                            >Edit Task</button> */}
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    })
                                                :
                                                <div>
                                                    <div className='row mb-3 border p-3 justify-content-center  text-danger' style={{ boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >

                                                        No Current Deffered Task !!

                                                    </div>
                                                </div>
                                        }</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManagement