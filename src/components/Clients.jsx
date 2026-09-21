export default function Clients() {
  // Client list mapping to localized image assets directly inside your root public/ folder
  const clients = [
    { id: 1, name: 'Reliance Industries Limited', src: '/reliance.jpg' },
    { id: 2, name: 'Thermax', src: '/thermax.jpg' },
    { id: 3, name: 'Aditya Birla GRASIM', src: '/aditya_birla.jpg' },
    { id: 4, name: 'Saint-Gobain', src: '/saint_gobain.png' },
    { id: 5, name: 'Bridgestone', src: '/bridgestone.png' },
    { id: 6, name: 'LANXESS', src: '/lanxess.png' },
    { id: 7, name: 'NTPC', src: '/ntpc.png' },
    { id: 8, name: 'CEAT', src: '/ceat.png' },
    { id: 9, name: 'UWC', src: '/uwc.png' },
    { id: 10, name: 'ZEEL', src: '/zeel.jpg' },
    { id: 11, name: 'Shubham Foods', src: '/shubham_foods.jpg' },
    { id: 12, name: 'Shankar', src: '/shankar.png' },
    { id: 13, name: 'Gufic Biosciences Limited', src: '/guffix.jpg' },
    { id: 14, name: 'The Packaging People', src: '/packaging_people.png' },
    { id: 15, name: 'Pratibha', src: '/pratibha.png' },
    { id: 16, name: 'Ralson Tyres', src: '/ralson.jpg' },
  ];

  // We duplicate the array to create a seamless infinite scrolling loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 bg-white border-t border-[#BCD4CA]/30 overflow-hidden relative">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <span className="text-[#F4941C] text-xs font-black uppercase tracking-[0.2em] bg-[#FDF2E2] px-4 py-1.5 rounded-full border border-[#FADCB3]">
          Our Happy Clients
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0D1C16] mt-4 tracking-tight">
          Trusted by Industrial Leaders
        </h2>
        <p className="text-sm text-[#4E6259] font-medium mt-3 max-w-2xl mx-auto">
          Powering the boilers, kilns, and manufacturing plants of India's most respected corporations.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-hidden bg-[#FAF7F2] border-y border-[#BCD4CA]/40 py-10">
        
        {/* Left & Right Gradient Fades for a smooth entrance/exit effect */}
        <div className="absolute left-0 top-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused] items-center">
          {marqueeClients.map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              // Changed: Removed grayscale and opacity classes, added hover:scale-110 for the pop-up effect
              className="flex items-center justify-center px-10 sm:px-14 transition-transform duration-300 hover:scale-110 cursor-pointer min-w-[160px]"
            >
              {/* Changed: Applied a strict bounding box (w-32 h-12 md:w-40 md:h-16) to force uniform logo sizes */}
              <img 
                src={client.src} 
                alt={`${client.name} Logo`} 
                className="w-70 h-70 md:w-40 md:h-16 scale-180 object-contain mix-blend-multiply"
                onError={(e) => {
                  // If the public image can't be found, hide the image and show the text badge
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
              {/* Seamless Fallback Text Badge (hidden by default, renders only if image is missing) */}
              <span className="hidden text-base sm:text-lg font-black text-[#0D1C16] tracking-tighter whitespace-nowrap bg-white/50 border border-[#E1ECE7] px-4 py-2 rounded-xl">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Injecting the custom keyframes for the marquee animation directly into the component */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}