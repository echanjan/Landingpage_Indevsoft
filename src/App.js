// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Body from './Components/Body';
import Form from './Components/Forms';
import Footer from './Components/Footer';
import './App.css'; // CSS para estilizar

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Función para mostrar el formulario
  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  // Función para ocultar el formulario
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="App">
      <Header onContactClick={handleShowForm} /> {/* Pasa la función al Header */}
      <HeroSection />
      <Body onContactClick={handleShowForm} />
      {isFormVisible && <Form onClose={handleCloseForm} />} {/* Muestra el Form condicionalmente */}
      <Footer />
    </div>
  );
}

export default App;
