export default function Hero() {
  return (
    // Natural off-white/warm sand background with a bright, energetic, natural vibe
    // ADDED ID="HOME" HERE:
    <div id="home" className="relative min-h-screen bg-[#FAF7F2] overflow-hidden flex items-center pt-28 pb-16">
      
      {/* 1. Natural Bio-Atmosphere & Flow (Vibrant, high-contrast organic glows) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0B5A3E]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-[#F4941C]/15 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mighty Bioenergy Typography & Focus */}
          <div className="lg:col-span-7 max-w-3xl relative z-20 text-left">
            
            {/* Stamp-style badge utilizing BiofuelCircle style colors */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#E6F0EC] border border-[#B3D1C5] text-[#0B5A3E] text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4941C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4941C]"></span>
              </span>
              Ajicon Industries • Trusted Biomass & Bio-Coal Brand
            </div>
            
            {/* Headline utilizing Rich Deep Forest Green & Bright Saffron/Orange */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0D1C16] tracking-tight leading-[1.05] mb-6">
              Accelerating Industrial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5A3E] via-[#0E8A5E] to-[#F4941C]">
                Green Transition.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-[#32453D] mb-8 leading-relaxed max-w-xl font-semibold">
              India’s premium heavy-density biomass briquettes, Bio-Coal, and pellets. Custom-manufactured from natural agricultural byproduct to supply high-calorie, CO2-neutral heat to high-pressure industrial boilers and furnaces.
            </p>
            
            {/* Highly Active Action Buttons with high-contrast Forest & Marigold hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#products" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-extrabold text-white bg-[#0B5A3E] rounded-full hover:bg-[#08422E] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#0B5A3E]/10 group"
              >
                Our Bio-Energy Products
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-extrabold text-[#0B5A3E] bg-[#FAF7F2] hover:bg-[#EBF3F0] hover:border-[#0B5A3E] border-2 border-[#BCD4CA] rounded-full active:scale-95 transition-all duration-300 shadow-sm"
              >
                Request Bulk Quote
              </a>
            </div>

            {/* Industrial Trust Metrics tinted with warm saffron and forest tones */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#BCD4CA]/50 max-w-lg">
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#F4941C] tracking-tight">&gt; 4000</p>
                <p className="text-[10px] sm:text-xs font-extrabold text-[#475C53] uppercase tracking-wider mt-1">kcal/kg Calorific</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#0B5A3E] tracking-tight">90mm</p>
                <p className="text-[10px] sm:text-xs font-extrabold text-[#475C53] uppercase tracking-wider mt-1">Dense Diameter</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#475C53] tracking-tight">&lt; 5%</p>
                <p className="text-[10px] sm:text-xs font-extrabold text-[#4E6259] uppercase tracking-wider mt-1">Ash residue</p>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Plant & Natural Visual Area (5 spans) */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[560px] w-full mt-8 lg:mt-0">
            
            {/* Grounded & Natural Industrial image with thick Forest Green and Saffron accents */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#0A1410] border border-[#BCD4CA] shadow-2xl overflow-hidden group">
              <img 
                src="image_1.png" 
                alt="AJICON INDUSTRIES high-capacity biomass pellet and bio-coal briquette manufacturing facility in Ratlam, India, showing piles of agricultural waste and stacks of natural cylindrical briquette fuel being loaded"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              {/* Natural gradient overlay that bridges into off-white screen edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1410] via-transparent to-transparent"></div>
              
              {/* Industrial facility badge (Vibrant Forest & Saffron stamp) */}
              <div className="absolute top-6 left-6 bg-[#0B5A3E]/95 border border-[#F4941C]/30 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-black text-[#F4941C] tracking-widest uppercase shadow-md">
                RATLAM, M.P. FACILITY
              </div>
            </div>

            {/* Float Overlay #1: Sustainable Standard (High-contrast Forest & Cream) */}
            <div className="absolute bottom-6 -left-6 z-20 bg-white border border-[#BCD4CA] p-5 rounded-2xl shadow-xl max-w-[220px] md:max-w-xs hover:-translate-y-1.5 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F0EC] flex items-center justify-center text-[#0B5A3E] border border-[#BCD4CA]/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636m12.728 12.728L12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#475C53] uppercase tracking-wider">Sustainable Bio-Energy</p>
                  <p className="text-xs md:text-sm font-black text-[#0D1C16] leading-tight">Co2-Neutral Industrial Fuel</p>
                </div>
              </div>
            </div>

            {/* Float Overlay #2: Raw specifications (Vibrant Saffron/Marigold stamp) */}
            <div className="absolute -top-4 -right-2 z-20 bg-[#F4941C] border border-[#D1760E] text-white p-4 rounded-xl shadow-2xl max-w-[150px] hover:scale-105 transition-transform duration-300">
              <p className="text-[9px] font-extrabold text-[#FAF7F2]/85 uppercase tracking-widest mb-1">Heavy Density</p>
              <p className="text-base font-black tracking-tight leading-none">90mm Cylinder</p>
              <p className="text-[10px] text-[#FAF7F2] mt-1.5 font-bold">Boiler fuel standard</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}