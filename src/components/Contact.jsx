import { useState, useEffect } from 'react';

export default function Contact({ selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Agro Waste pellets', // Default fallback value
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync selectedProduct state with outer props when users click cards above!
  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, product: selectedProduct }));
    }
  }, [selectedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 🟢 WEB3FORMS API INTEGRATION
      // This sends the form data directly to info@ajicon.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this string with your actual access key from Web3Forms
          access_key: "5a9c1144-cec2-4e43-b381-3530a5da9326", 
          subject: `New Bulk Supply Inquiry from ${formData.company}`,
          from_name: "Ajicon Website Portal",
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            product: selectedProduct || 'Agro Waste pellets',
            quantity: '',
            message: ''
          });
        }, 4000);
      } else {
        alert("Submission failed. Please email us directly at info@ajicon.com.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network error. Please check your connection or email info@ajicon.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-[#BCD4CA]/30 relative overflow-hidden">
      
      {/* Decorative Blur BG Orbs */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0B5A3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-[#F4941C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Get in Touch Info */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
            <span className="text-[#0B5A3E] text-xs font-black uppercase tracking-[0.2em] bg-[#E6F0EC] px-4 py-1.5 rounded-full border border-[#B3D1C5]">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1C16] mt-4 mb-6 tracking-tight leading-tight">
              Initiate Your Green Bulk Supply
            </h2>
            <p className="text-[#4E6259] font-medium leading-relaxed mb-10 text-sm sm:text-base">
              Ready to transition your boiler systems or procure high-calorific biofuels? Contact our procurement and engineering desk to request testing samples, verify load availability, or request custom supply contracts.
            </p>

            {/* Address cards */}
            <div className="space-y-6">
              
              {/* Registered Office */}
              <div className="flex gap-4 p-5 bg-white border border-[#E1ECE7] rounded-2xl shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#E6F0EC] text-[#0B5A3E] border border-[#BCD4CA]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0D1C16] uppercase tracking-wide">Registered Corporate Office</h4>
                  <p className="text-sm text-[#4E6259] font-semibold mt-1.5 leading-relaxed">
                    60, Ground Floor, Burhani Market, Naharpura, Dhanmandi, Ratlam, Madhya Pradesh, India - 457001
                  </p>
                  <p className="text-[10px] text-[#0B5A3E] font-black uppercase mt-1">CIN: U40109MP2022PTC059968</p>
                </div>
              </div>

              {/* Plant / Sourcing Info */}
              <div className="flex gap-4 p-5 bg-white border border-[#E1ECE7] rounded-2xl shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#E6F0EC] text-[#0B5A3E] border border-[#BCD4CA]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0D1C16] uppercase tracking-wide">Processing Facility Footprint</h4>
                  <p className="text-sm text-[#4E6259] font-semibold mt-1.5 leading-relaxed">
                    Operating 5 Advanced High-Capacity Sourcing & Compaction Units across Ratlam and the broader M.P. agricultural belts.
                  </p>
                </div>
              </div>

              {/* Direct Communication */}
              <div className="flex gap-4 p-5 bg-white border border-[#E1ECE7] rounded-2xl shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#FDF2E2] text-[#F4941C] border border-[#FADCB3]/45 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0D1C16] uppercase tracking-wide">Direct Operations Desk</h4>
                  <p className="text-sm font-black text-[#0B5A3E] mt-2 tracking-tight">
                    <a href="tel:+916267651653" className="hover:underline">+91 62676 51653</a>
                  </p>
                  {/* Updated Email Here */}
                  <p className="text-xs text-[#4E6259] font-semibold mt-1">
                    <a href="mailto:info@ajicon.com" className="hover:underline">info@ajicon.com</a>
                  </p>
                  <p className="text-[10px] font-bold text-[#F4941C] uppercase mt-1">Monday – Saturday • 10:00 AM – 6:30 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Custom Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#BCD4CA]/75 rounded-[2.5rem] p-6 sm:p-10 shadow-xl relative">
              
              {submitted ? (
                <div className="py-20 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-[#E6F0EC] text-[#0B5A3E] border border-[#BCD4CA]/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-[#0D1C16] mb-3">Bulk Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-[#4E6259] font-semibold max-w-md mx-auto leading-relaxed text-left">
                    Thank you. Your industrial quote request has been routed directly to the desk of Ali Akbar (CEO) & our logistics team in Ratlam. We'll analyze availability & connect within 24 hours.
                  </p>
                  <p className="text-xs text-[#BCD4CA] mt-6">Refreshing shortly...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <h3 className="text-2xl font-black text-[#0D1C16] mb-1">Request a Bulk Quote or Testing Sample</h3>
                    <p className="text-xs text-[#4E6259] font-semibold">Please fill out this spec form to ensure our logistics team prepares the accurate estimates.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Ramesh Kumar" 
                        className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-semibold"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Company / Plant Name *</label>
                      <input 
                        type="text" 
                        id="company"
                        name="company" 
                        required 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g., Malwa Processing Unit" 
                        className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com" 
                        className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-semibold"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Mobile / Contact No *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210" 
                        className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Product Interest *</label>
                      <select 
                        id="product"
                        name="product" 
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-black text-[#0D1C16]"
                      >
                        <option>Agro Waste pellets</option>
                        <option>Pinewood Pellets</option>
                        <option>Groundnut Briquettes</option>
                        <option>Mustard Briquettes</option>
                        <option>Sawdust Briquettes</option>
                        <option>Soyabean Briquettes</option>
                        <option>Corncub Briquettes</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Estimated Volume (Tons) *</label>
                      <input 
                        type="text" 
                        id="quantity"
                        name="quantity" 
                        required 
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 50 MT / Month" 
                        className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Specific Requirements / Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share exact delivery schedule, sizing, or testing requirements..." 
                      className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] transition-all font-semibold"
                    />
                  </div>

                  {/* Submit Button with Loading State */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full text-center py-4 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer
                      ${isSubmitting ? 'bg-[#4E6259] opacity-75' : 'bg-[#0B5A3E] hover:bg-[#08422E]'}`}
                  >
                    {isSubmitting ? 'Transmitting...' : 'Submit Industrial Sourcing Request'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}