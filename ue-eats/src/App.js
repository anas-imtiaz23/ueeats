import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Team from './components/Team';
import Loginn from './components/Loginn';
import Signupp from './components/Singupp'; // Ensure this is the correct component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orderr from './components/orderr';
import Contactt from './components/Contactt';
import Comment from './components/Comment';
import Burgerr from './components/Burgerr';
import Tea from './components/Tea';
import Baryani from './components/Baryani'
import Mangojuice from './components/Mango juice'
import Samosa from './components/Samosa'
import Shawarma from './components/Shawarma'
import StickyFries from './components/Sticky Fries'
import Simpleburger from './components/Simple burger'
import ColdDrinks from './components/Cold Drinks'
import Juices from './components/Juices'
import Fries from './components/Fries'
import Bananajuice from './components/Banana juice'
import Ratee from './components/Ratee'
import Footer from './components/footer/Footer';
import Services from './components/Services';
import AddCart from './components/AddCart';
import AdminPanel from './components/AdminPanel';
import Beforeorder from './components/Beforeorder'
import AppD from './components/AppD';
import ContactUs from './components/ContactUs';
import AddItem from './components/AddItem';
import { CartProvider } from "./components/Context/CartContext";
import { ItemsProvider } from "./components/Context/ItemContext";
import Recently_addeditems from './components/Recently_addeditems';
import AboutPage from './components/about_page';
import PaymentPage from './components/Payment_page';
import Video from './components/Vedio';
import Review from './components/Reviews';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <CartProvider>
      <ItemsProvider>
    <Router>
      {/* Always show Hero on the home page */}
      <Routes>
      <Route path="/" element={<><Navbar/><Hero /><Video /><Home /><Beforeorder /><Services/><Reviews/><AppD/></>} /> {/* Default route */}
      <Route path="/hero" element={<><Navbar/><Hero /><Video /><Home /><Beforeorder /><Services/><Reviews/><AppD/></>} /> {/* Default route */}
        <Route path="/Loginn" element={<><Navbar/><Loginn /></>} /> {/* Login route */}
        <Route path="/Singupp" element={<><Navbar/><Signupp /></>} /> {/* Signup route */}
        <Route path="/team" element={<><Navbar/><Team /><Services/></>} /> {/* Example route for Team */}
        <Route path="/orderr" element={<><Navbar/><Orderr/></>} /> {/* Example route for Team */}
        <Route path='/Contactt' element={<><Navbar/><Contactt/></>}/>
        <Route path='/Comment' element={<><Navbar/><Comment/></>}/>
        <Route path='/Burgerr' element={<><Navbar/><Burgerr/></>}/>
        <Route path='/Tea' element={<><Navbar/><Tea/></>}/>
        <Route path='/Baryani' element={<><Navbar/><Baryani/></>}/>
        <Route path='/Mango juice' element={<><Navbar/><Mangojuice/></>}/>
        <Route path='/Samosa' element={<><Navbar/><Samosa/></>}/>
        <Route path='/Shawarma' element={<><Navbar/><Shawarma/></>}/>
        <Route path='/Sticky Fries' element={<><Navbar/><StickyFries/></>}/>
        <Route path='/Simple burger' element={<><Navbar/><Simpleburger/></>}/>
        <Route path='/Cold Drinks' element={<><Navbar/><ColdDrinks/></>}/>
        <Route path='/Juices' element={<><Navbar/><Juices/></>}/>
        <Route path='/Fries' element={<><Navbar/><Fries/></>}/>
        <Route path='/Banana juice' element={<><Navbar/><Bananajuice/></>}/>
        <Route path='/Ratee' element={<><Navbar/><Ratee/></>}/>
        <Route path='/Services' element={<><Navbar/><Services/></>}/>
        <Route path='/AddCart' element={<><Navbar/><AddCart  name="anas"/></>}/>
        <Route path='/AdminPanel' element={<><AdminPanel/></>}/>
        <Route path='/Beforeorder' element={<><Navbar/><Beforeorder/></>}/>
        <Route path='/AdminD' element={<><AppD/></>}/>
        <Route path='/contact' element={<><ContactUs/></>}/>
        <Route path='/Add' element={<><AddItem/></>}/>
        <Route path='/Newitems' element={<><Recently_addeditems/></>}/>
        <Route path='/about' element={<><Navbar/><AboutPage/></>}/>
        <Route path='/contactus' element={<><Navbar/><ContactUs/></>}/>
        <Route path='/payment' element={<><Navbar/><PaymentPage/></>}/>
        <Route path='/before' element={<><Navbar/><Beforeorder/></>}/>
        <Route path='/vedio' element={<><Navbar/><Video/></>}/>
        <Route path='/review' element={<><Navbar/><Reviews/></>}/>
      </Routes>
      <Footer/>
    </Router>
    </ItemsProvider>
    </CartProvider>
    </>
  );
}

export default App;
