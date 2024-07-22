import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import ProductsList from './components/Product/ProductsList';
import CartContextProvider from './context/CartContextProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
   <>
   <CartContextProvider>
    <Header />
    <ProductsList />
    <Cart />
   </CartContextProvider>
   </>
  );
}

export default App;
