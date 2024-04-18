import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Footer, Nav } from './components';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
        <Nav></Nav>
        <Router></Router>
        <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
