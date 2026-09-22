import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Shrinks the pill slightly when scrolling down for a dynamic feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🟢 NEW: Watches the URL and scrolls to the exact section when navigating across pages
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small timeout ensures the HomePage has fully rendered before attempting to scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If there is no hash (e.g., clicking "Home" or "Careers"), snap to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Updated to use 'path' instead of 'href' to work with React Router
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'About', path: '/#about' },
    { name: 'Industry Voices', path: '/#testimonials' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      
      <nav 
        className={`pointer-events-auto w-full transition-all duration-500 ease-out flex justify-between items-center rounded-full border border-white/40 backdrop-blur-xl
          ${scrolled ? 'max-w-4xl bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-2 px-3' : 'max-w-6xl bg-white/60 shadow-lg py-3 px-4'}
        `}
      >
        {/* Logo Area - Converted to React Router Link */}
        <Link to="/" className="flex items-center gap-2 pl-2 md:pl-4 cursor-pointer transition-transform active:scale-95">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/logo.png"   
              alt="Ajicon Industries Pvt. Ltd. Logo" 
              className="w-full h-full object-contain scale-[1.4] md:scale-[2.0] origin-center"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-10 h-10 rounded-full bg-[#0B5A3E] items-center justify-center shadow-inner text-white font-bold text-xs">
              AJ
            </div>
          </div>
          
          <div className="flex flex-col text-left ml-2 md:ml-4 relative z-10">
            <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">
              AJICON<span className="text-[#F4941C]">.</span>
            </span>
            <span className="text-[0.6rem] font-bold text-[#475C53] uppercase tracking-wider leading-none mt-1">
              Industries Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Links - Converted to React Router Links */}
        <div className="hidden md:flex items-center space-x-1 bg-slate-900/5 p-1 rounded-full border border-slate-900/5">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-300 shadow-sm shadow-transparent hover:shadow-slate-200/50"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-2 pr-1">
          {/* Desktop CTA - Converted to React Router Link */}
          <Link 
            to="/#contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#0B5A3E] rounded-full hover:bg-[#08422E] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-[#0B5A3E]/20"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white rounded-full shadow-sm border border-slate-100 text-slate-800 focus:outline-none transition-transform active:scale-95 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
            <span className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'mt-1'}`} />
            <span className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'mt-1 translate-y-0.5'}`} />
          </button>
        </div>
      </nav>

      {/* Floating Mobile Menu Card */}
      <div 
        className={`absolute top-24 left-4 right-4 max-w-md mx-auto pointer-events-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top 
          ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[2rem] p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 rounded-2xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-lg transition-all active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100 my-2 mx-4"></div>
          <Link 
            to="/#contact" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-4 rounded-2xl text-white bg-[#0B5A3E] hover:bg-[#08422E] font-bold text-lg shadow-md transition-all active:scale-95"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}