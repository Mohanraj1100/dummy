import Header from './header';
import Nav from './leftside';
import './App.css';
import MainContent from './rightside'
import Footer from './footer';
import { useState } from 'react';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom';
import Addcart from './addcart';

function App() {
  const [Products, setProducts] = useState([]);
  const newSelectProducts = [...Products];

  const products = [
    { id: 1, image: require("./images copy/shoe1.webp"), alt: "image 1", desc: "SPORTS", brand: "Nike", rate: "800rs", size: 8 },
    { id: 2, image: require("./images copy/shoe2.jpeg"), alt: "image 2", desc: "MODERN", brand: "Adidas", rate: "1000rs", size: 7 },
    { id: 3, image: require("./images copy/shoe3.webp"), alt: "image 3", desc: "CASUAL", brand: "Reebok", rate: "900rs", size: 9 },
    { id: 4, image: require("./images copy/shoe4.webp"), alt: "image 4", desc: "MODERN", brand: "Bata", rate: "1200rs", size: 8 },
    { id: 5, image: require("./images copy/shoe5.webp"), alt: "image 5", desc: "FORMAL", brand: "Nike", rate: "1000rs", size: 10 },
    { id: 6, image: require("./images copy/shoe6.jpeg"), alt: "image 6", desc: "MODERN", brand: "Woodland", rate: "800rs", size: 7 },
    { id: 7, image: require("./images copy/shoe7.jpeg"), alt: "image 7", desc: "SPORTS", brand: "Bata", rate: "1000rs", size: 9 },
    { id: 8, image: require("./images copy/shoe8.jpeg"), alt: "image 8", desc: "MODERN", brand: "Reebok", rate: "650rs", size: 8 },
    { id: 9, image: require("./images copy/shoe9.jpeg"), alt: "image 9", desc: "CASUAL", brand: "Nike", rate: "700rs", size: 10 },
    { id: 10, image: require("./images copy/shoe10.jpeg"), alt: "image 10", desc: "FORMAL", brand: "Adidas", rate: "900rs", size: 7 },
  ]

  const btn = (item) => {
    const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      return true
    }
    return false
  }

  const addTocart = (item) => {
    // props.newCartItems = [...props.cartItems];
    const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      // props.newCartItems.splice(item.id,1);
      newSelectProducts.splice(newSelectProducts.findIndex(cartitem => cartitem.id === item.id), 1)
    } else {
      newSelectProducts.push({ ...item });
    }
    setProducts(newSelectProducts);
  };
  return (

    <Switch>
      <div className='App'>
        <Header count={newSelectProducts.length}></Header>
        <div className='body'>
          <Nav className='left'></Nav>
          <Routes>
            <Route exact path='/addcart' element={<Addcart newSelectProducts={newSelectProducts} setProducts={setProducts} ></Addcart>}>
            </Route>
            <Route exact path='/' element={
              <MainContent className='right' products={products} addTocart={addTocart} btn={btn}>
              </MainContent>}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
