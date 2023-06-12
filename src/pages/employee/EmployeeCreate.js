import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const EmployeeCreate=()=>{

    const navigator= useNavigate();


    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [designation,setDesignation]=useState('');
    const [dob,setDOB]=useState('');
    const [empId,setEMPID]=useState('');
    const [salary,setSalary]=useState('');

    const createUser=()=>{
        console.log('create user API');
        if(phoneNumber===''|| email==='' || dob==='' || firstName==='')
        {
            alert('Please enter the feilds');
            return;
        }
        const userObj={};
        userObj.mobile= phoneNumber;
        userObj.email= email;
        userObj.employee={};
        userObj.employee.firstName=firstName;
        userObj.employee.lastName=lastName;
        userObj.employee.designation=designation;
        userObj.employee.dob=dob;
        userObj.employee.empId=empId;
        userObj.employee.salary=salary;
        console.log(userObj);

        fetch('http://localhost:7007/api/v1/auth/register',
        { method: 'POST',  headers: {
            'Content-Type': 'application/json'
          }, body:JSON.stringify(userObj)}
        ).then((response)=>{
            response.json().then(data=>{
                    console.log(data)
                    navigator('/employee-list')
            })
        });

    }

    return(
        <>
        <div className="container mt-5 col-md-10">
            <div className="row">
                <div class="form-group col-md-6">
                    <label for="phoneNumber">Enter Phone</label>
                    <input type="tel" class="form-control" id="phoneNumber" 
                    value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                    aria-describedby="emailHelp" placeholder="Enter Phone" />
                </div>
                <div class="form-group col-md-6">
                    <label for="email">Enter Email</label>
                    <input type="email" class="form-control" id="email" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
            </div>
  
            <div className="row">
                <div class="form-group col-md-6">
                    <label for="firstName">Enter First Name</label>
                    <input type="text" class="form-control" id="firstName" 
                    value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                    aria-describedby="firstName" placeholder="Enter First Name" />
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">Enter Last Name</label>
                    <input type="text" class="form-control" id="lastName" 
                    value={lastName} onChange={(e)=>setLastName(e.target.value)}
                    aria-describedby="lastName" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-md-6">
                    <label for="designation">Enter Designation</label>
                    <input type="text" class="form-control" id="designation" 
                    value={designation} onChange={(e)=>setDesignation(e.target.value)}
                    aria-describedby="designation" placeholder="Enter Designation" />
                </div>
                <div class="form-group col-md-6">
                    <label for="dob">Enter DOB</label>
                    <input type="date" class="form-control" id="dob" 
                    value={dob} onChange={(e)=>setDOB(e.target.value)}
                    aria-describedby="dob" placeholder="Enter Date of Birth" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-md-6">
                    <label for="salary">Enter Salary</label>
                    <input type="number" class="form-control" id="salary" 
                    value={salary} onChange={(e)=>setSalary(e.target.value)}
                    aria-describedby="salary" placeholder="Enter Salary" />
                </div>
                <div class="form-group col-md-6">
                    <label for="empid">Enter Employee Id</label>
                    <input type="text" class="form-control" id="empid" 
                    value={empId} onChange={(e)=>setEMPID(e.target.value)}
                    aria-describedby="empid" placeholder="Enter Employee Id" />
                </div>
            </div>
            <div className="row col-md-6">
            <button type="button" onClick={()=>createUser()}  class="btn btn-success">Create</button>
            <button type="button"  onClick={()=>navigator('/employee-list')} class="btn btn-danger ml-5">Cancel</button>

            </div>
        </div>
        </>
    );
}


export default EmployeeCreate;