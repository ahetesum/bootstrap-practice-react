import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const EmployeeList=()=>{

    const [employees,setEmployees] = useState([]);

    const navigator= useNavigate();

    useEffect(()=>{
        getEmployees();
    },[])

    const getEmployees=()=>{
        const token = localStorage.getItem('USER_TOKEN');
        fetch('http://localhost:7007/api/v1/employee?limit=10&page=0&sort=desc',{ method: 'GET',  headers: {
            'Content-Type': 'application/json',
            'x-access-token':token
          }}).then((response)=>{
            response.json().then(data=>{
                    if(data)
                    {
                        console.log(data)
                        setEmployees(data)
                        //navigator('/enter-otp');
                    }
            });
        });
    }


    return(
        <>
        <div className="container mt-5">
            <div className="row">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Birth Date</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((item)=>{

                            return (
                                    <tr>
                                    <th scope="row">{item.firstName + " "+ item.lastName}</th>
                                    <td>{item.salary}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.designation}</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-success">Edit</button>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                        </div></td>
                                    </tr>
                            );
                        })
                    }
                
                
                </tbody>
                </table>
            </div>
        </div>
        </>
    );
}


export default EmployeeList;