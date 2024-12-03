import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioCem from './pages/InicioCem';
import Navbar from './components/Navbar';
import Canasta from'./pages/Canasta';
import ReporteSimat from './pages/ReporteSimat';
import Mobiliario from './pages/Mobiliario';
import CostoTotalCanasta from './pages/CostoTotalCanasta'
import Gratuidad from './pages/Gratuidad';
import NovedadesPae from './pages/NovedadesPae';
import ReportePae from './pages/ReportePae';
import AportesCem from './pages/AportesCem';
import CostosCem from './pages/CostosCem';

import Footer from './pages/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <InicioCem />
      <Canasta />
      <ReporteSimat/>
      <Mobiliario/>
      <CostoTotalCanasta/>
      <Gratuidad/>
      <NovedadesPae/>
      <ReportePae/>
      <AportesCem/>
      <CostosCem/>

      <Footer/>


    </Router>
  );
}

export default App;
