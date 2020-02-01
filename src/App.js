import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import './stylesheets/main.scss'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <Footer />
      
    </div>
  );
}

export default App;
