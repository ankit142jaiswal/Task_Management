import React from 'react'

function Sidebar1() {
  return (
    
    <div className="container p-0 m-0 d-flex h-100 fixed-bottom" style={{width:"200px", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark ">
        <Link to={'/admin'} className="p-0 btn text-white font" >
          <h1>
              User 
            </h1>
        <hr />
        </Link>
        <ul className="nav-item p-0">
          <li className="nav mb-1">
            <Link to={'/'} className='btn text-white' >              
              Dashboard
            </Link>
          </li>
          <li className="nav mb-1">
            <Link to={'/pending'} className='btn text-white'>             
              Pending Task
              </Link>
          </li>
          <li className="nav mb-1">
            <Link to={'/inprogress'} className='btn text-white'>
              In Progress Task
            </Link>
          </li>
          <li className="nav mb-1">
            <Link to={'/completed'}  className='btn text-white'>
    
              Completed Task 
            </Link>
          </li>
          <li className="nav mb-1">
            <Link to={'/submitted'}  className='btn text-white'>
           
              Submitted Task
            </Link>
          </li>
          <li className="nav mb-1">
            <Link to={'/deffered'}  className='btn text-white'>             
              Deffered Task
            </Link>
          </li>                      
        </ul>
        
      </div>      
    </div>



  )
}

export default Sidebar1