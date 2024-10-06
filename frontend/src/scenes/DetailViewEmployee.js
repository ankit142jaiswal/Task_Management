import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function DetailViewEmployee() {

    const location = useLocation();

  
    return (
        <div className='container mt-5'>

            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-11'>
                    <div className='mb-3 row p-3 ' style={{ fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
                        <h1 style={{ textAlign: "center" }}>Employee Detail  </h1>


                    </div>
                    <hr />
                    <div className='mb-3'>
                        {
                            
                            window.employeeList[location.state.index]  != [] ?                          
                            
                            <>
                                    <div className='mb-3 row border p-5' style={{
                                        fontSize: "larger", backgroundColor: "white", fontWeight: "bolder",
                                        boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                    }} >
                                        <div className='col-11 text-start '>
                                            <div className='row'>
                                                <div className='col-auto text-start'>
                                                    {location.state.index  + 1}.
                                                </div>
                                                <div className='col-11'>
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            <img src="profile.svg" alt="" style={{ height: "200px" }} />
                                                            <br />
                                                        </div>
                                                        <div className='col-9'>
                                                            <div className='row'>
                                                                <div className='col-3'>
                                                                    Name
                                                                </div>
                                                                <div className='col-auto'> :</div>
                                                                <div className='col-auto'>
                                                                    {window.employeeList[location.state.index].name}<br />
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className='row'>
                                                                <div className='col-3'>
                                                                    Contact
                                                                </div>
                                                                <div className='col-auto'> :</div>
                                                                <div className='col-auto'>
                                                                    {window.employeeList[location.state.index].contact}<br />
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className='row'>
                                                                <div className='col-3'>
                                                                    Email
                                                                </div>
                                                                <div className='col-auto'>:</div>
                                                                <div className='col-auto'>
                                                                    {window.employeeList[location.state.index].email}<br />
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className='row'>
                                                                <div className='col-3'>
                                                                    Date of Joining
                                                                </div>
                                                                <div className='col-auto'>:</div>
                                                                <div className='col-auto'>
                                                                    {window.employeeList[location.state.index].joiningdate} <br />
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='row'>
                                                        <div className='col-3'>
                                                            Department
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.employeeList[location.state.index].department}  <br />
                                                        </div>
                                                    </div>
                                                    <hr />









                                                    <div className='row'>

                                                        <div className='col-3'>
                                                            Boi
                                                        </div>
                                                        <div className='col-auto'>:</div>
                                                        <div className='col-auto'>
                                                            {window.employeeList[location.state.index].bio} <br />
                                                        </div>
                                                    </div>
                                                    <hr />



                                                </div>
                                            </div>
                                        </div>
                                        <div className='row justify-content-center mt-5'>

                                            <div className='col-auto '>
                                                <Link to={'/teammember'} className="btn btn-info">Back</Link>
                                            </div>
                                           
                                        </div>

                                    </div>

                                </>
                                
                             
                                : <div>
                                    <div className='row mb-3 border p-3' style={{
                                        fontSize: "larger", backgroundColor: "white",
                                        fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px"
                                    }} >
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

export default DetailViewEmployee