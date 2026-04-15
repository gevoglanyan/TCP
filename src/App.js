import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import HowItWorks from './components/HowItWorks';
import Requirements from './components/Requirements';
import Pricing from './components/Pricing';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import CTAStrip from './components/CTAStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0C0C0C] overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Requirements />
      <Pricing />
      <Timeline />
      <FAQ />
      <CTAStrip />
      <Contact />
      <Footer />
    </div>
  );
}