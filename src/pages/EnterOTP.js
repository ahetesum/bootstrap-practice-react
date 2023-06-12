import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterOTP=()=>{

    const [otp,setOtp]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const navigator= useNavigate();

    useEffect(()=>{
       const phone=localStorage.getItem("PHONE_NUMBER");
       console.log(phone)
       setPhoneNumber(phone);
    });

    const handleOTPLogin=()=>{
        const reqBody={
            mobile:phoneNumber,
            OTP:otp
        };
        console.log(reqBody)
        fetch('http://localhost:7007/api/v1/auth/login',
        { method: 'POST',  headers: {
            'Content-Type': 'application/json'
          }, body:JSON.stringify(reqBody)}).then((response)=>{
            response.json().then(data=>{
                    if(data && data.token)
                    {
                        console.log(data)
           
                        localStorage.setItem("USER_TOKEN",data.token);

                        navigator('/employee-list');
                    }
            });
        });
    }

    return(
        <div className="container mt-5 col-md-4">
            <div class="form-group">
                <label for="enterOTP">Enter OTP</label>
                <input type="number" value={otp} class="form-control" onChange={(e)=>setOtp(e.target.value)} id="enterOTP" aria-describedby="emailHelp" placeholder="Enter OTP"  />
            </div>
            <button type="button" onClick={()=>handleOTPLogin()} class="btn btn-primary">Login</button>
        </div>
    );
}

export default EnterOTP;