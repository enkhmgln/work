import React from 'react'
import LoginPage from './Pages/LoginPage';
import DataFetcher from './Pages/DataPage';
import PrivateRoutes from './Components/PrivateRoutes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route element={<DataFetcher/>} path='/data'/>
      </Route>
      <Route element={<LoginPage/>} path='/'/>
    </Routes>
  );
}

export default App;
