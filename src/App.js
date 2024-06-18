import React from 'react';
import './App.css';
import CustomerRoutes from './Routes/CustomerRoutes';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>} ></Route>
      </Routes>
    
    
    </div>
  );
}

export default App;
