import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    question: "What is the ideal Gross Calorific Value (GCV) for industrial biomass fuel?",
    answer: "Most biomass pellets deliver a GCV between 3,000 and 4,800 kcal/kg. Premium industrial pellets sit in the higher end of this range, providing intense, sustained heat. By comparison, NTPC specifications for baseline thermal plant co-firing require a GCV of 2800–3600 kcal/kg."
  },
  {
    question: "What are the government mandates for biomass co-firing?",
    answer: "The Government of India has mandated 5% biomass co-firing for coal-based thermal power plants, with planned escalations to 7%. This policy reduces CO₂, SO₂, and NOx emissions and can be implemented with minimal boiler modification."
  },
  {
    question: "Why is moisture content critical for boiler efficiency?",
    answer: "Moisture carries no energy and steals heat to evaporate. Every extra percent of moisture cuts your usable calorific value. To maximize thermal output, premium pellets are dried below 10%, as biomass generally cannot be effectively pelletized if input moisture exceeds 12%."
  },
  {
    question: "How does ash content impact boiler maintenance?",
    answer: "Ash is the non-combustible mineral fraction that remains after burning. Premium industrial biomass pellets maintain a low ash content of 2–6%, while traditional briquettes range from 4–10% depending on the feedstock. Lower ash drastically reduces the risk of slagging, fouling, and hard clinker formation on the boiler grate."
  },
  {
    question: "How should industrial facilities store biomass pellets?",
    answer: "Because biomass pellets are small, uniform, and flow easily, they can be stored efficiently in vertical silos or dedicated biomass bunkers. However, because they are hygroscopic (moisture-absorbing), they must be strictly protected from rain and high humidity to prevent degradation of their calorific value."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\+\]/g, '') 
      }
    }))
  };

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#E1ECE7] overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Decorative Ambient Background Blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0B5A3E]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F4941C]/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Expanded Container Width to Max-W-7xl for the Grid Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Sticky Header & CTA Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E1ECE7] shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0B5A3E] animate-pulse" />
              <span className="text-[#0B5A3E] text-[10px] font-black uppercase tracking-widest">
                Technical Specifications
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1C16] mb-6 tracking-tight leading-tight">
              Combustion & Compliance Data
            </h2>
            
            <p className="text-[#4E6259] font-medium text-base sm:text-lg leading-relaxed mb-10">
              Essential operational parameters for procurement managers evaluating coal-to-biomass conversion.
            </p>

            {/* Direct Support Lead Generation Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#E1ECE7] shadow-lg shadow-[#0B5A3E]/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6F0EC] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#BCD4CA]/50 transition-colors duration-500" />
              
              <h4 className="font-black text-[#0D1C16] text-xl mb-3 relative z-10">Need exact boiler specs?</h4>
              <p className="text-sm text-[#4E6259] font-medium mb-8 leading-relaxed relative z-10">
                Connect directly with our Ratlam plant engineers to calculate your potential coal-to-biomass fuel savings and check bulk availability.
              </p>
              
              <a 
                href="https://wa.me/916267651653?text=Hi%2C%20I%20am%20looking%20for%20technical%20details%20on%20Ajicon%20Biomass%20Pellets." 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-3 w-full bg-[#0B5A3E] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#08422E] hover:shadow-xl transition-all active:scale-95 relative z-10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.711.927 3.148.929 3.177 0 5.767-2.587 5.769-5.766 0-3.181-2.586-5.769-5.769-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                </svg>
                Chat with an Engineer
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FAQ Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, index) => {
              const isActive = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden transition-all duration-500 ease-out rounded-3xl group ${
                    isActive 
                      ? 'bg-white shadow-2xl shadow-[#0B5A3E]/10 border border-[#BCD4CA]' 
                      : 'bg-white/60 backdrop-blur-md border border-[#E1ECE7] hover:bg-white hover:border-[#BCD4CA]/60 hover:shadow-md'
                  }`}
                >
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 ease-out ${
                      isActive ? 'bg-[#0B5A3E] opacity-100' : 'bg-transparent opacity-0 group-hover:bg-[#E6F0EC] group-hover:opacity-100'
                    }`} 
                  />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 sm:px-8 py-6 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    <h3 className={`font-black text-base sm:text-lg pr-6 transition-colors duration-300 ${
                      isActive ? 'text-[#0B5A3E]' : 'text-[#0D1C16] group-hover:text-[#0B5A3E]'
                    }`}>
                      {faq.question}
                    </h3>
                    
                    <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#0B5A3E] text-white shadow-inner shadow-black/20' 
                        : 'bg-[#E6F0EC] text-[#0B5A3E] group-hover:bg-[#BCD4CA]/30'
                    }`}>
                      <div className="relative w-4 h-4">
                        <span className={`absolute top-1/2 left-0 w-full h-[2.5px] rounded-full bg-current transform -translate-y-1/2 transition-transform duration-500 ease-in-out ${
                          isActive ? 'rotate-180' : 'rotate-0'
                        }`} />
                        <span className={`absolute top-0 left-1/2 w-[2.5px] h-full rounded-full bg-current transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
                          isActive ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                        }`} />
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2">
                      <div className="h-px w-full bg-gradient-to-r from-[#E1ECE7] to-transparent mb-6" />
                      <p className="text-[#4E6259] font-semibold text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}