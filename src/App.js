import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './Shop/Shop'
import Header from './Header/Header'
import Snowboards from './Grouped/Snowboards/Snowboards' 
import Pants from './Grouped/Pants/Pants' 
import Jackets from './Grouped/Jackets/Jackets' 
import Goggles from './Grouped/Goggles/Goggles' 
import Gloves from './Grouped/Gloves/Gloves' 
import Boots from './Grouped/Boots/Boots';
import Bindings from './Grouped/Bindings/Bindings';
import Beanie from './Grouped/Beanie/Beanie';
import Home from './Home/Home'
import Login from './LoginLogout/Login'
import Create from './LoginLogout/Create'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Home /> </>} />
        <Route path='/login' element={<><Header /> <Login /></>} />
        <Route path='/createaccount' element={<><Header /> <Create /></>} />
        <Route path='/shop' element={<><Header /> <Shop /></>} />
        <Route path='/shop/snowboards' element={<><Header /> <Snowboards /></>} />
        <Route path='/shop/pants' element={<><Header /> <Pants /></>} />
        <Route path='/shop/jackets' element={<><Header /> <Jackets /></>} />
        <Route path='/shop/goggles' element={<><Header /> <Goggles /></>} />
        <Route path='/shop/gloves' element={<><Header /> <Gloves /></>} />
        <Route path='/shop/boots' element={<><Header /> <Boots /></>} />
        <Route path='/shop/bindings' element={<><Header /> <Bindings /></>} />
        <Route path='/shop/beanies' element={<><Header /> <Beanie /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
