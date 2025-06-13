import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import logo from './logo.svg';
import './App.css';


function App() {
  const handleClick = () => {
    alert('¡Gracias por visitar nuestra app!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>¡Bienvenido a Mi Aplicación React!</h1>
        <p>
          Esta es mi segunda pagina en React <code></code> 
        </p>
        <button onClick={handleClick} className="App-button">
          Haz clic aquí
        </button>
        <a
          className="App-link"
          href="https://es.react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React (documentación en español)
        </a>
      </header>
    </div>
  );
}

export default App;
