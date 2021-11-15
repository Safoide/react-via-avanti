import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from './components/HeaderTop';
import Header from './components/Header';
import BurguerMenu from './components/BurguerMenu';
import Footer from './components/Footer';
import Tienda from './components/Tienda';
import Producto from './components/Producto';
import Admin from './components/Admin';

function App() {
    return (
        <Router>
            <HeaderTop/>
            <Header/>
            <BurguerMenu/>
            
            <main class="main">
                <Routes>
                    <Route path='/tienda' element={<Tienda/>} />
                    <Route path='/sweater-popis' element={<Producto/>} />
                    <Route path='/admin' element={<Admin/>} />
                </Routes>
            </main>

            <Footer/>
        </Router>
    );
}

export default App;
