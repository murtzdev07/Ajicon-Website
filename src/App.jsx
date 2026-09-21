import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials' // Add this import
import Clients from './components/Clients' // Add this import
import ScrollToTop from './components/ScrollToTop' // Add this import
import WhatsAppBot from './components/WhatsAppBot'

function App() {
  const [selectedProduct, setSelectedProduct] = useState('Agro Waste pellets'); 
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#E6F0EC]">
      <Navbar />
      <Hero />
      <Products onSelectProduct={setSelectedProduct} />
      <About />
      <Clients />
      <Testimonials /> 
      <Contact selectedProduct={selectedProduct} />
      <ScrollToTop />
      <WhatsAppBot />
    </div>
  )
}

export default App