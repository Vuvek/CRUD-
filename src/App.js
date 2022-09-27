import "./App.css";
import { HomePage } from "./screens/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmp from "./screens/Employee/AddEmployee";
import ViewEmployee from "./screens/Employee/ViewEmployee";
import { ViewParticularEmployee } from "./components/employee";
import { Navigation } from "./components/nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<ViewEmployee />} />
          <Route path="/add" element={<AddEmp />} />
          <Route path="/view/:id" element={<ViewParticularEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
