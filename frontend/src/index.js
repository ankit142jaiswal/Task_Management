import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.pendingList = [];
window.inprogressList = [];
window.completedList = [];
window.submittedList = [];
window.defferedList = [];

window.employeeList = [
  
  {
    name: "Ankit Chand Jaiswal",
    contact: "9369643611",
    email: "ankit@dfreenovelish.com",
    department: "Frontend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {
    name: "Bhavna  Sharma",
    contact: "7081256512",
    email: "bhavna@dfreenovelish.com",
    department: "Frontend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },

  {
    name: "Anushka Agarwal",
    contact: "7668304030",
    email: "anushka@dfreenovelish.com",
    department: "Frontend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {
    name: "Mugdha",
    contact: "790323316",
    email: "mugdha@dfreenovelish.com",
    department: "Frontend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {
    name: "Priyanshu Agarwal",
    contact: "9760780866",
    email: "priyanshu@dfreenovelish.com",
    department: "Frontend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {
    name: "Siddharth Upadhyay",
    contact: "7607442264",
    email: "siddharth@dfreenovelish.com",
    department: "Frontend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  }


  ,
  {
    name: "Rajiv Singh",
    contact: "8429882233",
    email: "rajiv@dfreenovelish.com",
    department: "Backend Developer",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {
    name: "Aryaman Dhoundiyal",
    contact: "9958281983",
    email: "aryaman@dfreenovelish.com",
    department: "Backend Developer",

    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {


    name: "Shubham Singh",
    contact: "9643059661",
    email: "shubham@dfreenovelish.com",
    department: "Research Associate",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",

  },
  {
    name: "Himanshu Sharma",
    contact: "96257997233",
    email: "himanshu@dfreenovelish.com",
    department: "Business Developemnt",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },
  {
    name: "Abhishek Sharma",
    contact: "8077123594",
    email: "abhishek@dfreenovelish.com",
    joiningdate: "13-05-2024",
    department: "Business Developemnt",

    bio: "",
    picture: "",
  },
  {
    name: "Divya",
    contact: "8860386282",
    email: "diya@dfreenovelish.com",
    joiningdate: "13-05-2024",
    department: "Business Developemnt",

    bio: "",
    picture: "",
  },
  {
    name: "Yashvika Gupta",
    contact: "9125349631",
    email: "yashvika@dfreenovelish.com",
    department: "Business Developemnt",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  }

  ,
  {
    name: "Harsirat Kaur",
    contact: "7023533730",
    email: "harsirat@dfreenovelish.com",
    department: "HR Department",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",

  },
  {
    name: "Pratibha Rana",
    contact: "8130469756",
    department: "HR Department",
    email: "pratibha@dfreenovelish.com",
    joiningdate: "13-05-2024",
    bio: "",
    picture: "",
  },


];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
