import './assets/css/app.css';


import HomePage from 'pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from 'pages/Detail';
import Cart from 'pages/Cart';
import Congratulations from 'pages/Congratulations';
import NotFound from 'pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage />} ></Route>
      <Route path="/categories/:idc" element={<Details />} ></Route>
      <Route path="/cart" element={<Cart />} ></Route>
      <Route path="/congratulations" element={<Congratulations />} ></Route>
      <Route path="*" element={<NotFound />} ></Route>

      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
