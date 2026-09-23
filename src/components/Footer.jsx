export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Industry Voices', href: '#testimonials' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="bg-[#0A1410] border-t border-[#162A22] pt-20 pb-8 relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#0B5A3E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#F4941C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio (5 spans) */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-md">
                <img 
                  src="/logo.png" 
                  alt="Ajicon Logo" 
                  className="w-full h-full object-contain scale-125" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden w-full h-full bg-[#E6F0EC] text-[#0B5A3E] rounded-xl font-black items-center justify-center text-sm">AJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter leading-none">
                  AJICON<span className="text-[#F4941C]">.</span>
                </span>
                <span className="text-[10px] font-bold text-[#BCD4CA] uppercase tracking-widest leading-none mt-1.5">
                  Industries Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 font-medium leading-relaxed max-w-sm mb-6">
              Leading manufacturers of high-density biomass briquettes and pellets. Powering India's industrial sector with sustainable, high-GCV solid fuels to reduce carbon footprints and optimize thermal efficiency.
            </p>
            <span className="inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 text-xs font-bold text-[#BCD4CA] tracking-wider uppercase">
              CIN: U40109MP2022PTC059968
            </span>
          </div>

          {/* Column 2: Quick Links (3 spans) */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Quick Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-stone-400 hover:text-[#F4941C] text-sm font-semibold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-stone-600 rounded-full group-hover:bg-[#F4941C] transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (4 spans) */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Corporate Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0B5A3E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-stone-400 text-sm font-medium leading-relaxed">
                  60, Ground Floor, Burhani Market, Naharpura, Dhanmandi, Ratlam, Madhya Pradesh - 457001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0B5A3E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+916267651653" className="text-stone-400 hover:text-[#F4941C] text-sm font-medium transition-colors">
                  +91 62676 51653
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0B5A3E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ajicon.com" className="text-stone-400 hover:text-[#F4941C] text-sm font-medium transition-colors">
                  info@ajicon.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Developer Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <p className="text-stone-500 text-xs font-semibold order-2 lg:order-1">
            &copy; {currentYear} Ajicon Industries Private Limited. All rights reserved.
          </p>
          
          {/* 🟢 NEW: Highlighted Developer Signature Badge */}
          <div className="order-1 lg:order-2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 border border-[#0B5A3E]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#F4941C]/40 hover:bg-[#0B5A3E]/10 transition-all duration-500 group">
             
             {/* Animated Node */}
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4941C] opacity-40 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4941C]"></span>
             </span>
             
             {/* Title */}
             <span className="text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 group-hover:text-stone-300 transition-colors">
               Engineered By
             </span>
             
             {/* Name with Dynamic Gradient Hover */}
             <a 
               href="https://murtaza-info.vercel.app" 
               target="_blank" 
               rel="noreferrer" 
               className="text-xs font-black bg-gradient-to-r from-white to-stone-400 group-hover:from-[#F4941C] group-hover:to-white bg-clip-text text-transparent transition-all duration-500"
             >
                Murtaza Dawoodjeewala
             </a>
             
             {/* Divider */}
             <span className="w-px h-3 bg-white/10"></span>
             
             {/* Contact Number with Icon */}
             <a 
               href="tel:+918208266645" 
               className="text-[11px] font-bold text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
             >
                <svg className="w-3 h-3 text-[#0B5A3E] group-hover:text-[#F4941C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                8208266645
             </a>
          </div>

          <div className="flex items-center gap-6 order-3">
            <a href="#" className="text-stone-500 hover:text-white text-xs font-semibold transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-500 hover:text-white text-xs font-semibold transition-colors">Terms of Trade</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}