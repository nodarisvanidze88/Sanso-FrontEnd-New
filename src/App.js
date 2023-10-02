import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/GeneralComponents&Functions/NavBar/NavBar"
import CustomersPage from "./Components/Pages/CustomersPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/customers" element={<CustomersPage />} />
        {/*<Route path="/almasystemsmodels" element={<CreateAlmaSystemModelsTable />} />
        <Route path="/hpmodels" element={<CreateHPModelsTable />} />
        <Route path="/techpersons" element={<CreateTechnicalPersonTable />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
