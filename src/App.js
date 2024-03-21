import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav></Nav>
        <Routes>
          <Route path='/pits-sanity-react/' element={<Home></Home>}>Home</Route>
          <Route path='/pits-sanity-react/services' element={<Services></Services>}>Services</Route>
          <Route path='/pits-sanity-react/contact' element={<Contact></Contact>}>Contact</Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
