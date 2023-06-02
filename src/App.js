import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import Practice from "./components/Practice";
import EnterOTP from "./pages/EnterOTP";
import GetOTP from "./pages/GetOTP";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="enter-otp" element={<EnterOTP/>} ></Route>
        <Route path="/" element={<GetOTP/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
