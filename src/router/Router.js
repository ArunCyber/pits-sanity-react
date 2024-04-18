import '../App.css';
import {  Routes,Route } from 'react-router-dom';
import { Home, Contact, Services, SinglePost } from '../pages';

function Router() {
  return (
    <Routes>
        <Route path='/pits-sanity-react/' element={<Home></Home>}>Home</Route>
        <Route path='/pits-sanity-react/services' element={<Services></Services>}>Services</Route>
        <Route path='/pits-sanity-react/contact' element={<Contact></Contact>}>Contact</Route>
        {/* <Route path='/pits-sanity-react/:slug' element={<SinglePost></SinglePost>}>SinglePost</Route> */}
    </Routes>
  );
}

export default Router;

