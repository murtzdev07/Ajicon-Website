import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBot from './components/WhatsAppBot';
import AdminDashboard from './components/AdminDashboard'; // Import it

// 1. We group all the landing page sections into one block
const HomePage = ({ selectedProduct, setSelectedProduct }) => (
  <>
    <Hero />
    <Products onSelectProduct={setSelectedProduct} />
    <About />
    <Clients />
    <Testimonials />
    <Contact selectedProduct={selectedProduct} />
  </>
);

function App() {
  const [selectedProduct, setSelectedProduct] = useState('Agro Waste pellets');

  return (
    <Router>
      <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#E6F0EC]">
        {/* Navbar stays at the top of EVERY page */}
        <Navbar />
        
        {/* The router swaps the content between the Home Page and the Careers Page */}
        <Routes>
          <Route 
            path="/" 
            element={<HomePage selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />} 
          />
          <Route 
            path="/careers" 
            element={<Careers />} 
          />
          <Route path="/admin-portal" 
          element={<AdminDashboard />} 
          /> 
        </Routes>

        {/* Footer and floating widgets stay at the bottom of EVERY page */}
        <Footer />
        <ScrollToTop />
        <WhatsAppBot />
      </div>
    </Router>
  );
}

export default App;