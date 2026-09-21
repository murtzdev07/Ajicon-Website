import { useState } from 'react';

export default function Products({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');
  
  // Interactive GCV & Carbon Offset Calculator States
  const [currentCoalConsumption, setCurrentCoalConsumption] = useState(50); // tons/month
  const CO2_FACTOR_COAL = 2.42; // tons of CO2 per ton of coal
  const CO2_FACTOR_BIOMASS = 0.08; // tons of CO2 per ton of biomass
  
  const estimatedBiomassNeeded = Math.round(currentCoalConsumption * 1.15); // biomass has slightly lower GCV than standard coal
  const carbonSavings = Math.round((currentCoalConsumption * CO2_FACTOR_COAL) - (estimatedBiomassNeeded * CO2_FACTOR_BIOMASS));

  const categories = [
    { id: 'all', name: 'All Bio-Fuels' },
    { id: 'briquettes', name: 'Biomass Briquettes' },
    { id: 'pellets', name: 'Bio-Pellets' },
  ];

  const products = [
    {
      id: 1,
      category: 'pellets',
      name: "Agro Waste Pellets",
      tagline: "Eco-Friendly Micro Fuel",
      description: "High-efficiency micro pellets (6mm - 8mm) made from natural agricultural residues. Engineered for optimal thermal use in automatic burner feeding systems and furnaces with strict moisture and density controls.",
      calorific: 4100, // GCV: 4100±200
      calorificTolerance: "4100 ± 200",
      diameter: "6mm - 8mm",
      ash: 8, // ASH: 8±2%
      ashTolerance: "8 ± 2",
      moisture: 8, // MOISTURE: 8±2%
      moistureTolerance: "8 ± 2",
      bulkDensity: "1.1 - 1.2 g/cm³",
      environmentalImpact: "Replaces high-sulfur lignite.",
      materials: "Natural Agro-Waste Residues",
      features: ["Sized for automatic feeder systems", "100% natural agro binding", "Low sulfur emissions"],
      image: "agrowastepellets.png", 
      alt: "AJICON INDUSTRIES premium 6mm - 8mm Agro Waste Pellets for industrial boilers and stoves"
    },
    {
      id: 2,
      category: 'pellets',
      name: "Pinewood Pellets",
      tagline: "Ultra-Premium Grade Micro Fuel",
      description: "Exceptional quality pellets made from premium pine and wood shavings. Delivers dense thermal energy with exceptionally low ash and moisture, perfect for robotic feeders and high-performance biomass applications.",
      calorific: 4300, // GCV: 4300±200
      calorificTolerance: "4300 ± 200",
      diameter: "6mm - 8mm",
      ash: 4, // ASH: 4±2%
      ashTolerance: "4 ± 2",
      moisture: 4, // MOISTURE: 4±2%
      moistureTolerance: "4 ± 2",
      bulkDensity: "1.25 g/cm³",
      environmentalImpact: "Ultra-low ash direct fossil replacement.",
      materials: "Pure Pine Wood & Shavings",
      features: ["Rapid, high-temp ignite", "Ultra-low ash residue (<6.0%)", "Excellent structural integrity"],
      image: "pinewoodpellets.png", 
      alt: "Highly compacted light-brown Pinewood Pellets manufactured by Ajicon"
    },
    {
      id: 3,
      category: 'briquettes',
      name: "Groundnut Briquettes",
      tagline: "High-Heat 90mm Cylinders",
      description: "Robust 90mm cylindrical biofuels manufactured from groundnut shells. High natural oil and cellulose content generates impressive heat retention, making it a heavy favorite for processing and casting setups.",
      calorific: 4000, // GCV: 4000±200
      calorificTolerance: "4000 ± 200",
      diameter: "90 mm (Cylinder)",
      ash: 8, // ASH: 8±2%
      ashTolerance: "8 ± 2",
      moisture: 8, // MOISTURE: 8±2%
      moistureTolerance: "8 ± 2",
      bulkDensity: "1.3 g/cm³",
      environmentalImpact: "Converts groundnut husk waste to energy.",
      materials: "Groundnut Shells & Pods",
      features: ["Exceptional heat retention", "Bulk loose supply available", "Zero binder/additive compaction"],
      image: "groundnutbriq.png", 
      alt: "Heavy stack of Ajicon Groundnut shell 90mm cylindrical biomass briquettes at industrial site"
    },
    {
      id: 4,
      category: 'briquettes',
      name: "Mustard Briquettes",
      tagline: "Proven Bulk Boiler Fuel",
      description: "One of the most widely used industrial biofuels, made from mustard crop husks. Delivers reliable, steady burn times at a highly cost-effective price point, perfect for large-scale production plants and continuous operations.",
      calorific: 3500, // GCV: 3500±200
      calorificTolerance: "3500 ± 200",
      diameter: "90 mm (Cylinder)",
      ash: 10, // ASH: 10±2%
      ashTolerance: "10 ± 2",
      moisture: 10, // MOISTURE: 10±2%
      moistureTolerance: "10 ± 2",
      bulkDensity: "1.2 g/cm³",
      environmentalImpact: "High volume natural bio-fuel crop source.",
      materials: "Natural Mustard Husk",
      features: ["High availability in Malwa region", "No chemical binders", "Ideal for constant-load boilers"],
      image: "image_3.png", 
      alt: "Ajicon 90mm cylindrical Mustard Briquettes stack at Ratlam plant"
    },
    {
      id: 5,
      category: 'briquettes',
      name: "Sawdust Briquettes",
      tagline: "Calibrated 90mm Timber Fuels",
      description: "Premium briquettes manufactured from wood dust and sawmill residues. Features an excellent dense binding, delivering reliable, low-sparking thermal heat for manufacturing kilns, boilers, and furnaces.",
      calorific: 4000, // GCV: 4000±200
      calorificTolerance: "4000 ± 200",
      diameter: "90 mm (Cylinder)",
      ash: 8, // ASH: 8±2%
      ashTolerance: "8 ± 2",
      moisture: 8, // MOISTURE: 8±2%
      moistureTolerance: "8 ± 2",
      bulkDensity: "1.25 g/cm³",
      environmentalImpact: "Saves natural forests via timber-byproduct cycle.",
      materials: "Wood Shavings & Sawdust",
      features: ["Stable, high-density extrusion", "Low sparking pattern in furnaces", "Low relative ash content"],
      image: "image_1.png", 
      alt: "Cylindrical high-pressure compact Wood Sawdust Briquettes from Ajicon"
    },
    {
      id: 6,
      category: 'briquettes',
      name: "Soyabean Briquettes",
      tagline: "Eco Agriculture Co-Product",
      description: "Uniform 90mm cylindrical White Coal biofuels produced from soja crop husks. Provides highly demanded natural heat across Madhya Pradesh industrial belts to efficiently lower dependency on standard steam coal.",
      calorific: 3400, // GCV: 3400±200
      calorificTolerance: "3400 ± 200",
      diameter: "90 mm",
      ash: 12, // ASH: 12±2%
      ashTolerance: "12 ± 2",
      moisture: 12, // MOISTURE: 12±2%
      moistureTolerance: "12 ± 2",
      bulkDensity: "1.2 g/cm³",
      environmentalImpact: "Utilizes vast regional soja crop waste.",
      materials: "Pure Soya Husk",
      features: ["High bulk loading availability", "Smooth burning, lower smoke levels", "Robust road dispatch bulk options"],
      image: "image_2.png", 
      alt: "White Coal Soya husk biomass briquette logs ready for dispatch by Ajicon"
    },
    {
      id: 7,
      category: 'briquettes',
      name: "Corncub Briquettes",
      tagline: "High-Dignity Agro Compactions",
      description: "Calibrated 90mm biofuels pressed from natural corn cob residues. Utilizes the robust fiber density of cobs to ensure a consistent slow burn, replacing lignite and coal.",
      calorific: 3600, // GCV: 3600±200
      calorificTolerance: "3600 ± 200",
      diameter: "90 mm (Cylinder)",
      ash: 10, // ASH: 10±2%
      ashTolerance: "10 ± 2",
      moisture: 10, // MOISTURE: 10±2%
      moistureTolerance: "10 ± 2",
      bulkDensity: "1.2 g/cm³",
      environmentalImpact: "Direct reuse of cob waste.",
      materials: "Compacted Corn Cobs",
      features: ["Excellent density and shape", "Steady-rate heating GCV performance", "Low trace slagging"],
      image: "image_5.png", 
      alt: "Natural high-pressure pressed Corncob cylinder briquette fuel at plant stockpiles"
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-[#FAF7F2] border-t border-[#BCD4CA]/30 relative">
      {/* Decorative Natural Blob */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-[#0B5A3E]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#F4941C] text-xs font-black uppercase tracking-[0.2em] bg-[#FDF2E2] px-4 py-1.5 rounded-full border border-[#FADCB3]">
            Our Thermal Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1C16] mt-4 mb-6 tracking-tight">
            Advanced Fuel Specifications
          </h2>
          <p className="text-base sm:text-lg text-[#32453D] font-medium leading-relaxed">
            Every block, briquette, and pellet we manufacture is heavy-press tested to meet the rigorous thermal demands of Indian industrial standards, ensuring consistent calorie delivery and smoother furnace operation.
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-14">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all active:scale-95 duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0B5A3E] text-white border-[#0B5A3E] shadow-lg shadow-[#0B5A3E]/15'
                  : 'bg-white text-[#32453D] border-[#E1ECE7] hover:border-[#BCD4CA] hover:bg-[#EBF3F0]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="flex flex-col bg-white border border-[#E1ECE7] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Product Visual Area */}
              <div className="relative h-64 overflow-hidden bg-[#0A1410]">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlapping Badges */}
                <div className="absolute top-4 left-4 bg-[#0B5A3E] border border-[#BCD4CA]/30 text-white font-extrabold text-[9px] tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  Quality Certified • Ratlam
                </div>
                
                <div className="absolute bottom-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-[#0D1C16] border border-white/20">
                  ⚡ {product.calorificTolerance} kcal/kg
                </div>
              </div>

              {/* Content, Stats, and Details */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-[#F4941C] uppercase tracking-widest">{product.tagline}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0D1C16] mt-1 mb-3 group-hover:text-[#0B5A3E] transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#4E6259] leading-relaxed mb-6 font-medium">
                    {product.description}
                  </p>

                  {/* Specification Meters */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-xs font-extrabold mb-1.5">
                        <span className="text-[#32453D] uppercase tracking-wider">Gross Calorific Value (GCV)</span>
                        <span className="text-[#F4941C] font-black">{product.calorificTolerance} kcal/kg</span>
                      </div>
                      <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#F4941C] h-full rounded-full transition-all duration-1000 animate-slide-right" 
                          style={{ width: `${(product.calorific / 5000) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-extrabold mb-1.5">
                        <span className="text-[#32453D] uppercase tracking-wider">Moisture Content</span>
                        <span className="text-[#0B5A3E] font-black">{product.moistureTolerance}%</span>
                      </div>
                      <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#0B5A3E] h-full rounded-full transition-all duration-1000" 
                          style={{ width: `${100 - (product.moisture * 5)}%` }} // Lower moisture gets a better/fuller score
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-extrabold mb-1.5">
                        <span className="text-[#32453D] uppercase tracking-wider">Ash Residue</span>
                        <span className="text-[#0D1C16] font-black">{product.ashTolerance}%</span>
                      </div>
                      <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#4E6259] h-full rounded-full transition-all duration-1000" 
                          style={{ width: `${100 - (product.ash * 5)}%` }} // Lower ash gets a better/fuller score
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6 bg-[#FAF7F2] p-4 rounded-xl border border-[#E1ECE7]/40">
                    {product.features.map((feat, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs font-bold text-[#32453D]">
                        <svg className="w-4 h-4 text-[#0B5A3E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Infrastructure spec tags & Button */}
                <div>
                  <div className="flex justify-between items-center text-xs border-t border-[#E1ECE7]/60 pt-4 mb-5">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-[#475C53] tracking-widest block font-sans">Resource Base</span>
                      <span className="font-extrabold text-[#0B5A3E]">{product.materials}</span>
                    </div>
                    <div className="text-right font-sans">
                      <span className="text-[10px] font-extrabold uppercase text-[#475C53] tracking-widest block">Thickness / Size</span>
                      <span className="font-extrabold text-[#0D1C16]">{product.diameter}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      if (onSelectProduct) onSelectProduct(product.name);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-center py-4 text-xs font-extrabold bg-[#0B5A3E] hover:bg-[#08422E] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Request Bulk Price Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Calculator Overlay Container */}
        <div className="bg-white border-2 border-[#BCD4CA] rounded-[2.5rem] p-6 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4941C]/5 rounded-full blur-2xl pointer-events-none animate-pulse" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-[#0B5A3E] text-[10px] font-black uppercase tracking-[0.2em] bg-[#E6F0EC] px-3.5 py-1.5 rounded-lg border border-[#B3D1C5]">
                Environmental Switch Impact
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0D1C16] mt-4 mb-4 tracking-tight leading-tight">
                Evaluate Your Industrial Coal to Biomass Transition
              </h3>
              <p className="text-[#4E6259] font-medium leading-relaxed text-sm sm:text-base mb-6">
                Type in your factory's current monthly usage of traditional coal and immediately see the estimated equivalent biomass required, paired with your potential CO2 emission offset.
              </p>

              {/* Range Selector slider */}
              <div className="bg-[#FAF7F2] border border-[#E1ECE7] p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <label htmlFor="coalRange" className="text-xs sm:text-sm font-black text-[#0D1C16] uppercase tracking-wide">
                    Current Monthly Coal Consumption:
                  </label>
                  <span className="text-lg font-black text-[#0B5A3E] bg-[#E6F0EC] px-3.5 py-1 rounded-lg border border-[#BCD4CA]">
                    {currentCoalConsumption} Tons
                  </span>
                </div>
                <input 
                  id="coalRange"
                  type="range" 
                  min="5" 
                  max="500" 
                  value={currentCoalConsumption}
                  onChange={(e) => setCurrentCoalConsumption(Number(e.target.value))}
                  className="w-full h-2 bg-[#BCD4CA] rounded-lg appearance-none cursor-pointer accent-[#0B5A3E] focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-[#4E6259] font-bold mt-2">
                  <span>5 Tons</span>
                  <span>250 Tons</span>
                  <span>500 Tons</span>
                </div>
              </div>
            </div>

            {/* Live Estimation Output Panel */}
            <div className="bg-[#FAF7F2] border border-[#E1ECE7] rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative">
              <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md text-[10px] font-bold text-emerald-800 animate-pulse">
                • Real-time Offset Estimate
              </div>

              <div>
                <h4 className="text-sm font-black text-[#0D1C16] uppercase tracking-wider mb-6">
                  Estimate For Switching To Ajicon Fuels
                </h4>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-[#475C53] tracking-widest block">Est. Biomass Needed</span>
                    <p className="text-2xl sm:text-3xl font-black text-[#0D1C16]">{estimatedBiomassNeeded} <span className="text-xs font-extrabold text-[#475C53] uppercase">Tons</span></p>
                    <span className="text-[10px] font-bold text-[#4E6259] block mt-1">(Due to natural calorific diff)</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-[#475C53] tracking-widest block">CO2 Reduction / Month</span>
                    <p className="text-2xl sm:text-3xl font-black text-[#F4941C] flex items-center gap-1.5">
                      🌱 {carbonSavings} <span className="text-xs font-extrabold text-[#475C53] uppercase">Tons</span>
                    </p>
                    <span className="text-[10px] font-bold text-[#4E6259] block mt-1">(Avoided fossil carbon loop)</span>
                  </div>
                </div>

                <p className="text-xs font-bold text-[#4E6259] border-t border-[#E1ECE7] pt-4 leading-relaxed">
                  *Estimates assume standard carbonized materials. Exact values depend on industrial furnace setups. Consult with our engineering team for exact custom site blueprints.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="text-center w-full bg-[#F4941C] hover:bg-[#D1760E] text-white py-3 px-4 rounded-xl font-extrabold text-xs tracking-wider transition-all shadow-md active:scale-95"
                >
                  Verify Estimates With Engineers
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}