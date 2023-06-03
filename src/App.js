import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthRoutes from "./routes/AuthRoutes";
import UnauthRoutes from "./routes/UnauthRoutes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          {AuthRoutes}
          {UnauthRoutes}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
