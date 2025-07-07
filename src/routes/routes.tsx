import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/:id" element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
}
