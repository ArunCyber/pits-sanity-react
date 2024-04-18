import '../App.css';
import {  Routes,Route } from 'react-router-dom';
import { Home, Contact, Services, SinglePost, About } from '../pages';
import createClient from "../Client"; 
import { React, useState, useEffect }  from "react";
import { Footer, Nav } from '../components';

const Router = () => {
  const[navData, setNav] = useState([]);
  const[footerData, setFooterData] = useState([]);

  useEffect(() => {
      createClient.fetch(`*[_type=="settings"]{
          _createdAt,
          menu[],
          footer[]
          
        }`).then((data) => {
          setNav(data[0].menu.links);
          setFooterData(data[0].footer);
        })
      .catch(console.error);
  },[])

  return (
    <>
      <Nav menu ={navData}></Nav>
      <Routes>
          <Route path='/pits-sanity-react/' element={<Home menu ={navData}></Home>}>Home</Route>
          <Route path='/pits-sanity-react/services' element={<Services></Services>}>Services</Route>
          <Route path='/pits-sanity-react/contact' element={<Contact></Contact>}>Contact</Route>
          <Route path='/pits-sanity-react/about-us' element={<About></About>}>About Us</Route>
      </Routes>
      <Footer footer ={footerData}></Footer>
    </>
   
  );
}

export default Router;

