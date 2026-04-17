import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Process from './pages/Process';
import Requirements from './pages/Requirements';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#0C0C0C] overflow-x-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}