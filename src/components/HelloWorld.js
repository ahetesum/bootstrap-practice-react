import React from "react";

const HelloWorld=()=>{
    return(
        <div>
          <div class="container mt-5">
            <div class="row mt-5">
                <div class="col-md-4"  style={{backgroundColor:"red"}}>
                    One of three columns
                </div>
                <div class="col-md" style={{backgroundColor:"green"}}>
                    One of three columns
                </div>
            </div>
            <div class="row mt-5    ">
                <div class="col-sm"  style={{backgroundColor:"red"}}>
                    One of three columns
                </div>
                <div class="col-sm" style={{backgroundColor:"blue"}}>
                    One of three columns
                </div>
                <div class="col-sm" style={{backgroundColor:"green"}}>
                    One of three columns
                </div>
            </div>
          </div>
          
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </div>
    );
}
export default HelloWorld;