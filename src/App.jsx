import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Principal from "./Pages/Principal";
import Agenda from "./Pages/Agenda";
import SatisfactionTest from "./Pages/SatisfactionTest";
import Claim from "./Pages/Claim";

export default function App() {
  return (
    <Routes>
      {/* Ruta por defecto: Home */}
      <Route path="/" element={<Home />} />
      <Route path="/principal" element={<Principal />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/encuesta-de-satisfaccion" element={<SatisfactionTest />} />
      <Route path="/claim" element={<Claim />} />
    </Routes>
  );
}