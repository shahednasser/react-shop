import './App.css';
import Product from './components/Product';
import products from './data/products.json'

function App() {
  return (
    <div className="w-3/4 md:w-full">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
