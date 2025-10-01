import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Admin from "./pages/Dasboard/Admin";
import AdminLayout from "./layouts/AdminLayout ";
import Pdb from "./pages/PDB-Perikanan/Pdb";
import Ppb2025 from "./pages/PPB/Ppb2025";
import UsulanPpb2026 from "./pages/Usulan-PPB/UsulanPpb2026.jsx";

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem("token");
  const loginTime = sessionStorage.getItem("loginTime");

  // Maksimal 3 jam (10800000 ms)
  const isExpired =
    loginTime && Date.now() - parseInt(loginTime) > 3 * 60 * 60 * 1000;

  if (!token || isExpired) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("loginTime");
    return <Navigate to="/signin" replace />;
  }

  return children;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route to admin */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<Admin />} />
            <Route path="pdb-perikanan" element={<Pdb />} />
            <Route
              path="pokdakan-penerima-bantuan-2025"
              element={<Ppb2025 />}
            />
            <Route
              path="usulan-pokdakan-penerima-bantuan-2026"
              element={<UsulanPpb2026 />}
            />
          </Route>

          {/* Default redirect */}
          <Route
            path="/"
            element={<Navigate to="/admin/dashboard" replace />}
          />

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
