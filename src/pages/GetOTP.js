import React from "react";

const GetOTP=()=>{
    return(
        <div className="container mt-5 col-md-4">
            <div class="form-group">
                <label for="phoneNumber">Enter Phone</label>
                <input type="tel" class="form-control" id="phoneNumber" aria-describedby="emailHelp" placeholder="Enter Phone" />
            </div>
            <button type="button" class="btn btn-primary">Get OTP</button>
        </div>
    );
}

export default GetOTP;