import { useState } from 'react';

export default function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  
  // Official Ajicon Operations WhatsApp Number (Include country code, no + or spaces)
  const WHATSAPP_NUMBER = "916267651653";

  // Pre-configured B2B Industrial Queries
  const quickReplies = [
    "Hi, I'd like to request a bulk price quote.",
    "What is your Minimum Order Quantity (MOQ)?",
    "Can we arrange a fuel testing sample for our plant?",
    "Do you handle logistics and delivery to our site?",
    "I need technical specs on moisture and GCV."
  ];

  // Function to route the message directly to WhatsApp
  const sendToWhatsApp = (text) => {
    if (!text.trim()) return;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setCustomMessage(''); // Clear input
    setIsOpen(false); // Optional: close chat after sending
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp(customMessage);
  };

  return (
    <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50 flex flex-col items-start">
      
      {/* The Chat Window */}
      <div 
        className={`bg-white w-[340px] sm:w-[380px] rounded-3xl shadow-2xl border border-[#E1ECE7] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-left mb-4
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20 pointer-events-none absolute bottom-12 left-0'}
        `}
      >
        {/* Chat Header */}
        <div className="bg-[#0B5A3E] p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
              <img src="/logo.png" alt="Ajicon Logo" className="w-full h-full object-contain scale-125" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hidden w-full h-full bg-[#E6F0EC] text-[#0B5A3E] rounded-full font-black items-center justify-center text-xs">AJ</span>
            </div>
            <div>
              <h3 className="text-white font-black text-sm tracking-wide">Ajicon Support Desk</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Online • Replies instantly</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Body & Quick Replies */}
        <div className="bg-[#FAF7F2] p-5 h-[320px] overflow-y-auto custom-scrollbar flex flex-col gap-4">
          
          {/* Incoming Welcome Message */}
          <div className="flex items-end gap-2">
            <div className="w-6 h-6 bg-[#E6F0EC] rounded-full flex-shrink-0 flex items-center justify-center border border-[#BCD4CA]">
              <span className="text-[8px] font-black text-[#0B5A3E]">AJ</span>
            </div>
            <div className="bg-white border border-[#E1ECE7] p-3.5 rounded-2xl rounded-bl-none shadow-sm max-w-[85%]">
              <p className="text-sm font-semibold text-[#32453D] leading-relaxed">
                Hello! 👋 Welcome to Ajicon Industries. How can our engineering or logistics team assist your plant today?
              </p>
            </div>
          </div>

          {/* Prompt / Separator */}
          <div className="text-center mt-2">
            <span className="text-[10px] font-bold text-[#8AA197] uppercase tracking-widest">Select a quick inquiry</span>
          </div>

          {/* Automated Quick Reply Buttons */}
          <div className="flex flex-col gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => sendToWhatsApp(reply)}
                className="text-left bg-white border border-[#BCD4CA]/60 hover:border-[#0B5A3E] hover:bg-[#E6F0EC] text-[#0B5A3E] p-3 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input Area */}
        <div className="p-4 bg-white border-t border-[#E1ECE7]">
          <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Type your custom message..."
              className="flex-grow bg-[#FAF7F2] border border-[#BCD4CA]/50 focus:border-[#0B5A3E] focus:ring-1 focus:ring-[#0B5A3E] rounded-full px-4 py-2.5 text-sm font-medium text-[#0D1C16] outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!customMessage.trim()}
              className="w-10 h-10 bg-[#0B5A3E] hover:bg-[#F4941C] disabled:bg-[#BCD4CA] text-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors shadow-md disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[9px] font-bold text-[#8AA197] flex items-center justify-center gap-1">
              <svg className="w-3 h-3 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Secured by WhatsApp Web
            </span>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white shadow-xl shadow-[#128C7E]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50 relative group"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Unread notification dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#F4941C] border-2 border-[#FAF7F2] rounded-full animate-pulse"></span>
        )}
        
        {isOpen ? (
          // Close Icon
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // WhatsApp Icon
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>

    </div>
  );
}