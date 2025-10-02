import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SignIn from "./Pages/Login";
import SignUp from "./Pages/Register";
import Logout from "./Pages/Logout"; 
import ProtectedRoute from "./Components/ProtectedRoute"; 

function Layout() {
  return (
    <>      <Navbar />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
