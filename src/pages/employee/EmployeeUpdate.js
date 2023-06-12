import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const EmployeeUpdate=()=>{
    const [employee,setEmployee] = useState({});
    const { id } = useParams();

    useEffect(()=>{
       // get employee details //fetch()
    },employee)


    return(
        <>
        <h1>We are in EmployeeUpdate {id}</h1>
        </>
    );
}


export default EmployeeUpdate;