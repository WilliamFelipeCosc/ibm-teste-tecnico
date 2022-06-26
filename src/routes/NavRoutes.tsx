import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

const NavRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<BookDetails />} path="/details" />
    </Routes>
  </BrowserRouter>
);

export default NavRoutes;
