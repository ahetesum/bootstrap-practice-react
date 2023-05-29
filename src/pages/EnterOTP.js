import React from "react";

const EnterOTP=()=>{
    return(
        <div className="container mt-5 col-md-4">
            <div class="form-group">
                <label for="enterOTP">Enter OTP</label>
                <input type="number" class="form-control" id="enterOTP" aria-describedby="emailHelp" placeholder="Enter OTP" />
            </div>
            <button type="button" class="btn btn-primary">Login</button>
        </div>
    );
}

export default EnterOTP;