import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import EnterOTP from "./pages/EnterOTP";
import GetOTP from "./pages/GetOTP";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HelloWorld></HelloWorld> 
     {/* 
     <EnterOTP /> */}
    </div>
  );
}

export default App;
