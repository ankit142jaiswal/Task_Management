import React from 'react'
import { Link, useLocation } from 'react-router-dom';


function DetailViewDeffered() {
    const location = useLocation();

    const accepttask=()=>{
        if (window.submittedList.push(window.defferedList[location.state.index])){
            window.alert("Task has been Submitted Successfully !!");
            window.defferedList.splice(location.state.index,1);
        }
        if (window.defferedList == []){
            window.alert("Task current Task Found !!");           
        }
    }

    const reassingtask=()=>{
        if (window.pendingList.push(window.defferedList[location.state.index])){
            window.alert("Task has been Reassinged Succesfully !!");
            window.defferedList.splice(location.state.index,1);
        }
        if (window.defferedList == []){
            window.alert("Task current Task Found !!");           
        }
    }
  return (
    <div className='container mt-5'>
         <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-11'>
            <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                <h1 style={{ textAlign: "center" }}>Detail View of Completed Task </h1>


            </div>
            <hr />
            <div className='mb-3'>
                {
                    window.defferedList[location.state.index] != [] ?
                        //         // data.filter((item) => ((item.title.toLowerCase().includes(search.toLowerCase())) || (item.description.toLowerCase().includes(search.toLowerCase()))))
                        //        data.map((i, index) => {

                        //             return (
                        <>
                            <div className='mb-3 row border p-5' style={{
                                fontSize: "larger", backgroundColor: "white", fontWeight: "bolder",
                                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                            }} >
                                <div className='col-11 text-start '>
                                            <div className='row'>
                                                <div className='col-auto text-start'>
                                                    {location.state.index + 1}.
                                                </div>
                                                <div className='col-11'>
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            Title
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].title}<br />
                                                        </div>
                                                    </div>
                                                        <hr />
                                                    <div className='row'>

                                                        <div className='col-3'>
                                                            Description
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].description} <br />
                                                        </div>
                                                    </div>
                                                        <hr />
                                                    <div className='row'>

                                                        <div className='col-3'>
                                                            Date of Assingment
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].startdate} <br />
                                                        </div>
                                                    </div>
                                                        <hr />
                                                    <div className='row'>

                                                        <div className='col-3'>
                                                            Date of Submission
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].enddate} <br />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            Department
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].department}  <br />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            Employee
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].employee}  <br />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            Email
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].email}  <br />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='row'>

                                                        <div className='col-3'>
                                                            File

                                                        </div>

                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].uploadfile} <br />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            Priority

                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.defferedList[location.state.index].priority} <br />
                                                        </div>


                                                    </div>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                    <div className='row justify-content-center mt-5'>

                                    <div className='col-auto '>
                                        <Link to={'/'} className="btn btn-info">Back</Link>
                                    </div>
                                    <div className='col-auto'>
                                        <Link to={'/'} className="btn btn-success" type='button' onClick={accepttask}>Submit Task</Link>
                                    </div>
                                    <div className='col-auto'>
                                        <Link to={'/'} className="btn btn-danger" type='button' onClick={reassingtask}>Reassing Task</Link>
                                    </div>
                                    </div>

                            </div>

                        </>
                        //     )
                        // }) 
                        : <div>
                            <div className='row mb-3 border p-3' style={{ fontSize: "larger", backgroundColor: "white",
                                 fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }} >
                                <p>
                                    No Data Found !!
                                </p>
                            </div>
                        </div>}

</div>
</div>

            </div>
        </div>
  )
}

export default DetailViewDeffered