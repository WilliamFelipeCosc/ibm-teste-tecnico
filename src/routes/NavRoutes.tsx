import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

const NavRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route path="/details/:id" element={<BookDetails />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default NavRoutes;
