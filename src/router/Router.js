import '../App.css';
import {  Routes,Route } from 'react-router-dom';
import { Home, Contact, Services, SinglePost, About, } from '../pages';
import createClient from "../Client"; 
import { React, useState, useEffect }  from "react";
import { Footer, Nav, PostDetail } from '../components';

const Router = () => {
  const[navData, setNav] = useState([]);
  const[footerData, setFooterData] = useState([]);

  useEffect(() => {
      createClient.fetch(`*[_type=="settings"]{
        "headerMenu": *[menu._type == 'menuSettings'][0].menu.links[] {
          ...,
          "slug" : reference->slug.current
        },
          "footerMenu": *[footer._type == 'footerSettings'][0].footer {
            ...,
        },
      }`).then((data) => {
          setNav(data[0].headerMenu);
          setFooterData(data[0].footerMenu);
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
          <Route path='/pits-sanity-react/post/:postId' element={<PostDetail></PostDetail>}></Route>
      </Routes>
      <Footer footer ={footerData}></Footer>
    </>
   
  );
}

export default Router;

