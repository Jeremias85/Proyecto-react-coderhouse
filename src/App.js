import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <CartWidget />

      </Navbar>

      <ItemListContainer saludo="Bienvenid@ a nuestro sitio web!"/> 
    </div>
  );
}

export default App;
