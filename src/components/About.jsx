import { useState } from 'react';

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeHistoryYear, setActiveHistoryYear] = useState('2010');

  const stats = [
    { value: "15+", label: "Years Experience", description: "In Biomass manufacturing & supply chains" },
    { value: "72,000+ MT", label: "Production Per Year", description: "High-capacity heavy solid fuel" },
    { value: "65+", label: "Team Members", description: "Skilled industrial & logistical experts" },
    { value: "20+", label: "Happy Clients", description: "Large scale factories & heavy boilers" }
  ];

  const milestones = {
    '2010': {
      title: "Our Inception (Seven Access)",
      desc: "Our journey began in 2010 under the name Seven Access, establishing our early roots in Madhya Pradesh's emerging renewable energy sector, focusing on local agricultural residue collection and distribution.",
      impact: "Laid groundwork for regional agro-procurement networks."
    },
    '2022': {
      title: "Incorporation of Ajicon Industries",
      desc: "Driven by steady growth, an expanding client base, and the need to fulfill heavy industrial needs, we officially incorporated as Ajicon Industries Private Limited. A strategic step to align our long-term vision with professional and regulatory standards.",
      impact: "Transitioned to advanced multi-state operational capabilities."
    },
    'Present': {
      title: "Market Leadership",
      desc: "Today, we operate 5 advanced manufacturing units and serve clients across more than four states, delivering consistent, high-quality biomass briquettes that help industries scale efficiency while lowering carbon footprints.",
      impact: "Scaling automated production to serve India's green transition."
    }
  };

  const processingSteps = [
    {
      title: "Sustainable Agro-Sourcing",
      subtitle: "Procurement Phase",
      desc: "We partner with agricultural communities around Ratlam and Malwa to purchase raw, natural byproduct materials (such as mustard, soya, soybean, and cotton stalk), transforming farm-level waste into reliable farmer revenue.",
      metric: "150+ Local Farmers Supported",
    },
    {
      title: "Automated Sieving & Sorting",
      subtitle: "Material Prep Phase",
      desc: "Incoming agro-residues are fed into large automated screening systems to sift out dust, soil, and debris, ensuring only high-fiber, non-clinker biocompounds advance.",
      metric: "Mesh sizes < 3mm to 5mm",
    },
    {
      title: "Thermal Rotary Dehumidification",
      subtitle: "Moisture Control Phase",
      desc: "The organic fibers run through high-volume rotary dryer drums. This step is critical: we lower moisture content strictly below 8-10% to ensure optimal GCV and smoke-free burning.",
      metric: "< 8-10% target moisture limit",
    },
    {
      title: "Extrusion & Heavy Compacting",
      subtitle: "Thermal Compression",
      desc: "Huge mechanical briquetting presses subject the material to high compression without chemical binders. Natural lignins melt under friction, bonding the fibers into 90mm cylinders.",
      metric: "> 1.25 g/cm³ High Density",
    },
    {
      title: "Dynamic Lab Quality & Dispatch",
      subtitle: "Batch testing & Logistics",
      desc: "Every cohort undergoes physical tests for GCV calorific output, ash residue, and strength. Approved bio-coal logs are then stack-stored and loaded for nationwide road dispatch.",
      metric: "GCV & Ash Verification Certified",
    }
  ];

  const team = [
    { 
      name: "Shabbir Kaba", 
      role: "Founder", 
      initials: "SK",
      image: "/founder.jpg", 
      bio: "The visionary behind our origins, bringing years of pioneering insight to India’s renewable and biomass conversion landscape." 
    },
    { 
      name: "Ali Akbar", 
      role: "CEO", 
      initials: "AA",
      image: "/ceo.jpg", 
      bio: "Driving multi-state expansion, industrial logistics compliance, and strategic multi-ton contract executions with top-tier brands." 
    },
    { 
      name: "Jugal Jaat", 
      role: "Director", 
      initials: "JJ",
      image: "/director.jpg", 
      bio: "Guiding plant automation, malwa agro-sourcing networks, engineering calibration, and massive production scales." 
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-[#BCD4CA]/30 relative overflow-hidden">
      
      {/* Decorative Natural Blob */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-[#0B5A3E]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid 1: Vision & Photo Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-5 relative h-[480px] md:h-[560px] w-full">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#0A1410] border border-[#BCD4CA] shadow-2xl overflow-hidden group">
              <img 
                src="image_6.png" 
                alt="AJICON INDUSTRIES advanced 5-unit biomass and bio-coal processing plant"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#0B5A3E]/95 border border-[#BCD4CA]/30 backdrop-blur-md p-5 rounded-2xl text-white shadow-xl">
                <span className="text-[10px] font-black uppercase text-[#F4941C] tracking-widest block mb-1">Our Infrastructure</span>
                <h4 className="text-base sm:text-lg font-black leading-tight">5 Advanced Manufacturing Units</h4>
                <p className="text-xs text-stone-200 mt-2">Operating high-volume screeners, de-humidifiers, and press systems in Madhya Pradesh with nationwide logistic ties.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 max-w-2xl text-left">
            <span className="text-[#0B5A3E] text-xs font-black uppercase tracking-[0.2em] bg-[#E6F0EC] px-4 py-1.5 rounded-full border border-[#B3D1C5]">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1C16] mt-4 mb-6 tracking-tight">
              We Are Leaders in the Industrial Biomass Market
            </h2>
            <p className="text-[#32453D] font-semibold text-base mb-4 leading-relaxed">
              Ajicon Industries Private Limited is a leading name in the biomass energy sector, committed to providing sustainable, high-efficiency, and bulk solid fuel solutions across India.
            </p>
            <p className="text-sm text-[#4E6259] leading-relaxed mb-8 font-medium">
              We specialize in collecting agro-industrial residues and engineering them into robust, high-caliber bio-coal briquettes, pellets, and fuels. This circular system enables industrial power, smelting, casting, and brick plants to immediately cut imported coal dependence, lower fuel costs, and earn carbon-neutral offsets. We handle end-to-end logistics with major road transportation routes.
            </p>

            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E1ECE7] mb-8">
              <div className="flex gap-2 border-b border-[#BCD4CA]/30 pb-3 mb-4">
                {Object.keys(milestones).map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveHistoryYear(year)}
                    className={`px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                      activeHistoryYear === year
                        ? 'bg-[#0B5A3E] text-white shadow-sm'
                        : 'text-[#4E6259] hover:bg-[#EBF3F0]'
                    }`}
                  >
                    {year === '2010' ? '2010 Startup' : year === '2022' ? '2022 Incorporated' : 'Our Scale Today'}
                  </button>
                ))}
              </div>
              <div className="animate-fade-in text-left">
                <h4 className="text-sm font-black text-[#0D1C16] mb-1">{milestones[activeHistoryYear].title}</h4>
                <p className="text-xs text-[#4E6259] font-medium leading-relaxed mb-2">{milestones[activeHistoryYear].desc}</p>
                <span className="text-[10px] font-extrabold text-[#0B5A3E] bg-[#E6F0EC] px-2 py-1 rounded">
                  🌱 Focus: {milestones[activeHistoryYear].impact}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Industrial Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#FAF7F2] border border-[#E1ECE7] p-6 rounded-2xl text-center group hover:border-[#BCD4CA] hover:bg-white hover:shadow-lg transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-black text-[#0D1C16] tracking-tight group-hover:text-[#0B5A3E] transition-colors">{stat.value}</p>
              <p className="text-xs font-black text-[#F4941C] uppercase tracking-wider mt-1">{stat.label}</p>
              <p className="text-[10px] text-[#4E6259] mt-2 font-bold leading-normal">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Section 3: Connected Pipeline Flow Component */}
        <div className="bg-[#FAF7F2] border border-[#BCD4CA]/50 rounded-[2.5rem] p-6 md:p-12 mb-24 shadow-sm relative overflow-hidden">
          
          {/* Blueprint Grid Background (Subtle Isometric Tech Aesthetic) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <span className="text-[#F4941C] text-[10px] font-black uppercase tracking-[0.2em] bg-[#FDF2E2] px-3.5 py-1.5 rounded-lg border border-[#FADCB3]">
              Facility Process Flow
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D1C16] mt-4 mb-4 tracking-tight leading-tight">
              The Biomass Assembly Line
            </h3>
            <p className="text-sm sm:text-base text-[#4E6259] font-semibold">
              Trace the exact structural pathway we employ at our Ratlam facility to engineer raw agro-waste into calibrated solid fuel.
            </p>
          </div>

          {/* Interactive Pipeline Track */}
          <div className="relative z-10 max-w-5xl mx-auto mb-12 hidden md:block">
            {/* Base Background Track */}
            <div className="absolute top-6 left-0 w-full h-1.5 bg-[#E1ECE7] rounded-full" />
            
            {/* Animated Active Track (Fills up based on current step) */}
            <div 
              className="absolute top-6 left-0 h-1.5 bg-[#0B5A3E] rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${(activeStep / (processingSteps.length - 1)) * 100}%` }}
            >
              {/* Pulsing Energy Node on the leading edge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-[#F4941C] rounded-full shadow-[0_0_12px_rgba(244,148,28,0.8)] animate-pulse" />
            </div>

            <div className="relative flex justify-between">
              {processingSteps.map((step, idx) => {
                const isCompleted = idx <= activeStep;
                const isActive = idx === activeStep;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group focus:outline-none w-32 relative"
                  >
                    {/* Pipeline Node */}
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-black transition-all duration-500 z-10 mb-4 border-2 shadow-sm
                        ${isActive 
                          ? 'bg-[#0B5A3E] text-white border-[#0B5A3E] scale-110 shadow-[#0B5A3E]/30' 
                          : isCompleted 
                            ? 'bg-[#0B5A3E] text-white border-[#0B5A3E]' 
                            : 'bg-white text-[#4E6259] border-[#BCD4CA] group-hover:border-[#0B5A3E]'
                        }
                      `}
                    >
                      {idx + 1}
                    </div>
                    {/* Label below node */}
                    <div className={`text-center transition-all duration-300 ${isActive ? 'translate-y-1' : ''}`}>
                      <p className={`text-[10px] font-black uppercase tracking-wider leading-none mb-1 
                        ${isActive ? 'text-[#F4941C]' : 'text-[#475C53]'}`}
                      >
                        {step.subtitle}
                      </p>
                      <p className={`text-xs font-bold leading-tight
                        ${isActive ? 'text-[#0D1C16]' : 'text-[#4E6259]'}`}
                      >
                        {step.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Steps (Visible only on small screens) */}
          <div className="md:hidden flex overflow-x-auto gap-3 pb-4 mb-6 relative z-10 snap-x">
            {processingSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all border flex-shrink-0 snap-start
                  ${activeStep === idx 
                    ? 'bg-white border-[#0B5A3E] shadow-sm text-[#0B5A3E]' 
                    : 'bg-white/50 border-transparent text-[#4E6259]'
                  }
                `}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm
                  ${activeStep === idx ? 'bg-[#0B5A3E] text-white' : 'bg-[#E1ECE7] text-[#4E6259]'}
                `}>
                  {idx + 1}
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-wider leading-none opacity-60 mb-0.5">{step.subtitle}</p>
                  <p className="text-xs font-extrabold leading-tight">{step.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Blueprint Dashboard Panel */}
          <div className="relative z-10 max-w-5xl mx-auto bg-white border border-[#BCD4CA] shadow-xl shadow-[#0B5A3E]/5 rounded-[2rem] overflow-hidden">
            <div className="grid md:grid-cols-12 min-h-[220px]">
              
              {/* Left Data Side */}
              <div className="md:col-span-8 p-8 sm:p-10 flex flex-col justify-center transition-all duration-500 ease-in-out">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4941C] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F4941C]"></span>
                  </span>
                  <span className="text-[#0B5A3E] text-[10px] font-black uppercase tracking-widest border border-[#BCD4CA] px-2 py-0.5 rounded bg-[#E6F0EC]">
                    Phase 0{activeStep + 1} Active
                  </span>
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-black text-[#0D1C16] mb-4 leading-tight">
                  {processingSteps[activeStep].title}
                </h4>
                <p className="text-sm sm:text-base text-[#4E6259] font-medium leading-relaxed max-w-xl">
                  {processingSteps[activeStep].desc}
                </p>
              </div>
              
              {/* Right Metric Cutaway */}
              <div className="md:col-span-4 bg-[#0A1410] text-white p-8 sm:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#BCD4CA]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B5A3E]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <span className="text-[10px] font-black uppercase text-[#8FAFA1] tracking-widest block mb-2 relative z-10">
                  Target Specification
                </span>
                <span className="text-xl sm:text-2xl font-black text-white leading-tight relative z-10 mb-6">
                  {processingSteps[activeStep].metric}
                </span>
                
                <div className="w-full bg-white/10 rounded-full h-1.5 relative z-10 overflow-hidden">
                  <div className="bg-[#F4941C] h-1.5 rounded-full w-full animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
                <div className="mt-3 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-[#8FAFA1] relative z-10">
                  <span>System Link</span>
                  <span className="text-emerald-400">Online</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 4: Leadership Team Component */}
        <div>
          <div className="max-w-2xl mb-12 text-left animate-fade-in">
            <span className="text-[#0B5A3E] text-xs font-black uppercase tracking-wider bg-[#E6F0EC] px-3.5 py-1.5 rounded-full border border-[#B3D1C5]">
              Leadership Team
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0D1C16] mt-4 tracking-tight leading-tight">
              Promoting Sustainable Energy Security
            </h3>
            <p className="text-sm font-semibold text-[#4E6259] mt-1 leading-relaxed">
              Our board combines deep specialized agronomic byproduct Networks with decades of heavy manufacturing and procurement logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, idx) => (
              <div key={idx} className="bg-white border border-[#E1ECE7] rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center group overflow-hidden">
                <div className="relative w-full h-80 sm:h-96 bg-[#E6F0EC] border-b border-[#E1ECE7] overflow-hidden flex-shrink-0">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center font-black text-[#0B5A3E] text-5xl">
                    {person.initials}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow items-center justify-center">
                  <h4 className="text-xl font-black text-[#0D1C16] leading-tight group-hover:text-[#0B5A3E] transition-colors">
                    {person.name}
                  </h4>
                  <p className="text-xs font-black text-[#F4941C] uppercase tracking-[0.15em] mt-2 mb-4">
                    {person.role}
                  </p>
                  <div className="w-10 h-0.5 bg-[#BCD4CA]/50 mb-4 rounded-full"></div>
                  <p className="text-sm font-semibold text-[#4E6259] leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}