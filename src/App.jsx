import Navbar from './components/nav/Navbar';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Price from './pages/Price';
import ContactUs from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Footer from './components/footer/Footer';

function App() {

  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price" element={<Price />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
