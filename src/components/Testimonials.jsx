import { useState, useEffect } from 'react';

export default function Testimonials() {
  // Hardcoded your actual live reviews as the default state! 
  // This guarantees zero layout shift and 100% uptime even if the API proxy fails.
  const [reviews, setReviews] = useState([
    {
      id: "g1",
      author_name: "Mohammed Tambawala",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWegMeoTjZgo8G7PsNYg42JlO6xWlRNg4nj_e-7M2CTJEOFHGfQ=s128-c0x00000000-cc-rp-mo-ba2",
      rating: 5,
      text: "Excellent quality biomass briquettes, biomass pellets, and husk briquettes! They burn efficiently, are eco-friendly, and a great alternative to conventional fuels. Highly recommended!",
      relative_time_description: "11 months ago"
    },
    {
      id: "g2",
      author_name: "Salman Rang wala",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJ-bs10R5d-CSA_AE-xBNFyPyqxtzjj5Q-7iWpMg6KQDrXpVw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Ajicon Industries Pvt. Ltd. is a reputed and dependable manufacturer and supplier of biomass briquettes... Their products maintain high calorific value, consistent quality, and low moisture content, making them ideal for industrial applications and steam generation.",
      relative_time_description: "11 months ago"
    },
    {
      id: "g3",
      author_name: "Anchor Tr LLC",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIcwriTIecv4EIAZgRkZ-NFWgpLXSFL2n81o0r7DFH40XOEZg=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "We’ve been sourcing biomass pellets and briquettes, husk pellets, and bio coal from Ajicon Industries Pvt. Ltd. for quite some time now, and the quality has always been consistent. Their biomass pellets burn efficiently and help us maintain a clean and sustainable energy process.",
      relative_time_description: "11 months ago"
    },
    {
      id: "g4",
      author_name: "Sunil Rai",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUqWRGC_4keMkFKJ3Bxqj8HSr2qCwM39sLH7BFj4hvPc1DRl8Q=s128-c0x00000000-cc-rp-mo-ba4",
      rating: 5,
      text: "Ajicon Industries is a reputed and committed supplier with a strong supply chain network across India. I have tested their services for large-scale biomass briquette and pellet supplies and found their performance to be excellent.",
      relative_time_description: "11 months ago"
    },
    {
      id: "g5",
      author_name: "Akash Rao",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocL8bxLE_4-7Fk93iUjef11RXbyPqfHVOsCMW8aE2osRKVp2jg=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "The briquettes are high-quality, efficient, and produce minimal emissions. The company's commitment to sustainability and environmental responsibility is evident in their production process and products.",
      relative_time_description: "11 months ago"
    }
  ]);

  // 🟢 LIVE API FETCH LOGIC (Using a more reliable proxy)
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const placeId = "ChIJndkwi0b_YzkRnNbjZ-0KxKA";
        const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; 
        
        if (!apiKey) return;

        // The direct Google URL
        const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
        
        // Swapped to allorigins.win raw proxy to bypass strict CORS blocks
        const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(googleUrl)}`;
        
        const response = await fetch(proxiedUrl);
        const data = await response.json();
        
        if(data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Live fetch failed, defaulting to reliable fallback state.", error);
      }
    };
    fetchGoogleReviews();
  }, []);

  // Duplicate array for infinite scroll
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-[#BCD4CA]/30 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#0B5A3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-[#F4941C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#0B5A3E] text-xs font-black uppercase tracking-[0.2em] bg-[#E6F0EC] px-4 py-1.5 rounded-full border border-[#B3D1C5]">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1C16] mt-4 mb-6 tracking-tight">
            Proven on the Factory Floor
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xl font-black text-[#0D1C16]">5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#F4941C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-base sm:text-lg text-[#4E6259] font-medium leading-relaxed">
            Based on verified Google Reviews from industrial plant managers, engineers, and procurement heads who rely on our biofuels.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-hidden py-4">
        
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-[scrollLeft_50s_linear_infinite] hover:[animation-play-state:paused] items-stretch gap-6 px-6">
          {marqueeReviews.map((review, index) => (
            <div 
              key={`${review.id || index}-${index}`} 
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] border border-[#E1ECE7] rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#BCD4CA] transition-all duration-300 relative group flex flex-col justify-between cursor-pointer"
            >
              {/* Massive Decorative Quote Mark */}
              <svg 
                className="absolute top-6 right-6 w-12 h-12 md:w-16 md:h-16 text-[#0B5A3E]/5 group-hover:text-[#0B5A3E]/10 transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F4941C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#32453D] font-semibold leading-relaxed mb-8 relative z-10 text-sm sm:text-base whitespace-normal line-clamp-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-[#E1ECE7] pt-6">
                <div className="flex items-center gap-4">
                  {review.profile_photo_url ? (
                    <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full object-cover border border-[#BCD4CA]/40" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#E6F0EC] border border-[#BCD4CA]/40 flex items-center justify-center font-black text-[#0B5A3E] text-lg flex-shrink-0">
                      {getInitials(review.author_name)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-black text-[#0D1C16] leading-tight max-w-[150px] truncate" title={review.author_name}>{review.author_name}</h4>
                    <p className="text-xs text-[#4E6259] font-semibold mt-0.5">{review.relative_time_description}</p>
                  </div>
                </div>
                
                {/* Colorful Google G Logo */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
      `}} />
    </section>
  );
}