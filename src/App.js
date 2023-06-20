import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import LoginUser from './stories/LoginUser';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import OlvideClave from './stories/OlvideClave';
import RegistroAbogado from './stories/RegistroAbogado';
import RegistroCliente from './stories/RegistroCliente';
import { Header } from './stories/Header';
import SeleccionAbogado from './stories/SeleccionAbogado';


function App() {

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route exact path="/olvideclave" element={<OlvideClave/>} />
          <Route exact path="/" element={<LoginUser />} />
          <Route exact path="/registroabogado" element={<RegistroAbogado/>} />
          <Route exact path="/registrocliente" element={<RegistroCliente/>} />
          <Route exact path="/seleccionabogado" element={<SeleccionAbogado/>} />
        </Routes>
      </BrowserRouter>
    </div>
   
  
  );
}

export default App;
