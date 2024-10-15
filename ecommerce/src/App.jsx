import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from"./pages/Products";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import NavBar from "./component/Navbar";
import Footer from "./component/footer";
import AddtoCart from "./pages/AddtoCart";
import ContactToCEO from "./pages/ContactToCEO";
import ContactToHR from "./pages/ContacttoHR"
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import UserAuth from "./context/UserAuth";



function App() {
  return (
    <>
    <UserAuth>

   
      <NavBar />
     
      <Routes>
      <Route path="/login" element={<Login/>}/>

      <Route path="/signup" element={<Signup/>}/>
  
        <Route path="/" element={<Home />} />
        <Route path="/products/:categories?" element={<Products />} />
       <Route path="/categories" element={<Categories/>}/>
       <Route path="/addtocart" element={<AddtoCart/>}/>

        <Route path="/contacts" element={<Contact />}>
          <Route path="ceo" element={<ContactToCEO />}></Route>
          <Route path="hr" element={<ContactToHR />}></Route>
        </Route>

        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route element={<PrivateRoute/>} > 
          <Route path="/cart" element={<AddtoCart />} />
        </Route>
        
      </Routes>
      </UserAuth>
      <Footer/>
     
      
    </>
  );
}

export default App;
