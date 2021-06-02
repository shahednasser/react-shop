import './App.css';
import Product from './components/Product';
import products from './data/products.json'

function App() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <div className="w-full md:w-2/4 mx-auto pt-4 pb-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
