import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Imported SEO tools

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
import AdminDashboard from './components/AdminDashboard';
import FAQ from './components/FAQ'; // Imported FAQ component


// 1. Home Page block with injected SEO Metadata
const HomePage = ({ selectedProduct, setSelectedProduct }) => (
  <>
    <Helmet>
      <title>Ajicon Industries | Industrial Biomass Pellets & Husk Briquettes in MP</title>
      <meta name="description" content="Leading manufacturer of sustainable biomass pellets and high-CV husk briquettes in Madhya Pradesh. Partner with Ajicon for efficient industrial fuel solutions." />
      <meta name="keywords" content="Biomass pellets Ratlam, Husk briquettes Madhya Pradesh, Industrial fuel supplier MP, Ajicon Industries" />
    </Helmet>
    <Hero />
    <Products onSelectProduct={setSelectedProduct} />
    <About />
    <Clients />
    <Testimonials />
    <FAQ /> 
    <Contact selectedProduct={selectedProduct} />
  </>
);

function App() {
  const [selectedProduct, setSelectedProduct] = useState('Agro Waste pellets');

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#E6F0EC]">
          <Navbar />
          
          <Routes>
            <Route 
              path="/" 
              element={<HomePage selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />} 
            />
            <Route 
              path="/careers" 
              element={<Careers />} 
            />
            <Route 
              path="/admin-portal" 
              element={<AdminDashboard />} 
            /> 
          </Routes>

          <Footer />
          <ScrollToTop />
          <WhatsAppBot />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;