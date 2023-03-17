import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./Pages/LoginPage";
import DataPage from "./Pages/DataPage";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            {/* <ProtectedRoutes path="/" element={<LoginPage />} />  */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/data" element={<DataPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
