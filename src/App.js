import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import Practice from "./components/Practice";
import EnterOTP from "./pages/EnterOTP";
import GetOTP from "./pages/GetOTP";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/employee/EmployeeList";
import EmployeeCreate from "./pages/employee/EmployeeCreate";
import EmployeeUpdate from "./pages/employee/EmployeeUpdate";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="enter-otp" element={<EnterOTP/>} ></Route>
        <Route path="/" element={<GetOTP/>} ></Route>
        <Route path="/employee-list" element={<EmployeeList/>} ></Route>
        <Route path="/employee-create" element={<EmployeeCreate/>} ></Route>
        <Route path="/employee-update" element={<EmployeeUpdate/>} ></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
