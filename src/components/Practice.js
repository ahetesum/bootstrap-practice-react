import React from "react";

const Practice=()=>{
    return(
        <div className="container mt-5" style={{backgroundColor:'red'}}>
            Register
            <div className="row"  style={{backgroundColor:'green'}} >
                Green
            </div>
            <div className="row"  style={{backgroundColor:'yellow'}} >
                <div className="col-md-2 offset-3">Half column</div>
                <div style={{backgroundColor:'blue'}} className="col-md-2 ">
                    <div className="row">
                        <div className="col-md-4"  style={{backgroundColor:'green'}} >
                            Green
                        </div>
                        <div className="col-md-4"  style={{backgroundColor:'red'}} >
                            Red
                        </div>
                        <div className="col-md-4"  style={{backgroundColor:'yellow'}} >
                            Yellow Yellow
                        </div>
                    </div>
                    </div>
                <div style={{backgroundColor:'grey'}} className="col-md-2">Half column</div>
            </div>

        </div>
    )
}

export default Practice;