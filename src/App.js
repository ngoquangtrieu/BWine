import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ageContext } from "./context/AgeContext";
import CheckAge from "./components/CheckAge";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import SinglePage from "./pages/SinglePage";


function App() {
  const {state} = useContext(ageContext)
  const {checkBig} = state
  if(checkBig){
   return <CheckAge />
  }
  else{
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/About" element={<AboutPage />}/>
          <Route path="/Products" element={<ProductsPage />}/>
          <Route path="/Cart" element={<CartPage />}/>
          <Route path="/Products/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </>
    )
  }
}

export default App;
