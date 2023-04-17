import ProductList from './ProductList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [products, setProducts] = useState([]);
  // fetching the products from the API
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  })
  return (
    <div className="App">
     <h1>The Goodie Pile</h1>
     <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
