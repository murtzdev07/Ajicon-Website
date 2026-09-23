import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Helmet } from 'react-helmet-async';

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openRoles, setOpenRoles] = useState([]);
  const [isLoadingRoles, setIsLoadingRoles] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });
        if (!error) setOpenRoles(data || []);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setIsLoadingRoles(false);
      }
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const resumeFile = formData.get('resume');

    try {
      let publicResumeUrl = 'No file uploaded';

      // 1. Upload Resume file to Supabase Free Storage bucket (~1GB free)
      if (resumeFile && resumeFile.size > 0) {
        const fileName = `${Date.now()}_${resumeFile.name.replace(/\s+/g, '_')}`;
        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);

        if (!uploadError) {
          const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(fileName);
          publicResumeUrl = urlData.publicUrl;
        }
      }

      // 2. Insert application record into Supabase PostgreSQL
      const { error: dbError } = await supabase.from('applications').insert([
        {
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          role: formData.get('role'),
          message: formData.get('message'),
          resume_url: publicResumeUrl
        }
      ]);

      if (dbError) throw dbError;

      // 3. Optional Web3Forms email notification (text summary)
      const web3Data = new FormData();
      web3Data.append("access_key", "5a9c1144-cec2-4e43-b381-3530a5da9326");
      web3Data.append("subject", `New Job Application: ${formData.get('role')} - ${formData.get('name')}`);
      web3Data.append("message", `Name: ${formData.get('name')}\nPhone: ${formData.get('phone')}\nEmail: ${formData.get('email')}\nResume: ${publicResumeUrl}`);
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: web3Data });

      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error processing application. Please check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Helmet>
      <title>Green Energy Careers | Ajicon Industries Ratlam</title>
      <meta name="description" content="Join Ajicon Industries in Ratlam. We are hiring engineers, plant managers, and logisticians to lead India's transition to sustainable industrial biomass." />
    </Helmet>
    <section id="careers" className="py-24 bg-white border-t border-[#BCD4CA]/30 relative overflow-hidden">
      
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#0B5A3E]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#0B5A3E] text-xs font-black uppercase tracking-[0.2em] bg-[#E6F0EC] px-4 py-1.5 rounded-full border border-[#B3D1C5]">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1C16] mt-4 mb-6 tracking-tight leading-tight">
            Build the Future of Green Energy
          </h2>
          <p className="text-[#4E6259] font-medium leading-relaxed text-sm sm:text-base">
            Ajicon Industries is rapidly expanding. We are looking for driven engineers, logisticians, and industry professionals who want to lead India's transition to sustainable industrial biomass.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dynamic Open Roles */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-[#0D1C16] mb-2">Current Openings</h3>
            <p className="text-sm text-[#4E6259] font-semibold mb-6">Don't see a perfect fit? Submit a general application and we'll keep your resume on file.</p>
            
            <div className="space-y-4 min-h-[200px]">
              {isLoadingRoles ? (
                // Loading Skeleton UI
                [1, 2, 3].map((skeleton) => (
                  <div key={skeleton} className="bg-[#FAF7F2] border border-[#E1ECE7] p-5 rounded-2xl animate-pulse">
                    <div className="flex justify-between items-start mb-3">
                      <div className="h-5 bg-[#BCD4CA]/50 rounded w-2/3"></div>
                      <div className="h-4 bg-[#BCD4CA]/40 rounded w-16"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-3 bg-[#BCD4CA]/30 rounded w-20"></div>
                      <div className="h-3 bg-[#BCD4CA]/30 rounded w-20"></div>
                    </div>
                  </div>
                ))
              ) : openRoles.length === 0 ? (
                // Empty State
                <div className="text-center py-10 bg-[#FAF7F2] border border-[#E1ECE7] rounded-2xl">
                  <p className="text-sm font-bold text-[#4E6259]">No open positions at the moment.</p>
                  <p className="text-xs text-[#8AA197] mt-1">Please check back later or submit a general application.</p>
                </div>
              ) : (
                // Render Live Roles from Firebase
                openRoles.map((role) => (
                  <div key={role.id} className="bg-[#FAF7F2] border border-[#E1ECE7] p-5 rounded-2xl hover:border-[#0B5A3E] hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-black text-[#0D1C16] group-hover:text-[#0B5A3E] transition-colors">{role.title}</h4>
                      <span className="bg-[#E6F0EC] text-[#0B5A3E] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{role.dept}</span>
                    </div>
                    <div className="flex gap-4 text-xs font-semibold text-[#4E6259]">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {role.type}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] border-2 border-[#BCD4CA]/75 rounded-[2.5rem] p-6 sm:p-10 shadow-xl relative">
              
              {submitted ? (
                <div className="py-16 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-[#E6F0EC] text-[#0B5A3E] border border-[#BCD4CA]/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-[#0D1C16] mb-3">Application Received!</h3>
                  <p className="text-sm text-[#4E6259] font-semibold max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in Ajicon Industries. Our HR team will review your credentials and reach out if your profile matches our current requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <h3 className="text-xl font-black text-[#0D1C16] mb-1">Submit Your Application</h3>
                    <p className="text-xs text-[#4E6259] font-semibold">Attach your CV and tell us how you can contribute to our growth.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Full Name *</label>
                      <input type="text" name="name" required placeholder="e.g., Amit Sharma" className="w-full bg-white border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] font-semibold outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Phone Number *</label>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" className="w-full bg-white border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] font-semibold outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Email Address *</label>
                      <input type="email" name="email" required placeholder="amit@example.com" className="w-full bg-white border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] font-semibold outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Applying For *</label>
                      <select name="role" className="w-full bg-white border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] font-black text-[#0D1C16] outline-none transition-all">
                        <option value="General Application">General Application</option>
                        {openRoles.map((r) => <option key={r.id} value={r.title}>{r.title}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Upload Resume / CV (PDF or Word) *</label>
                    <input 
                      type="file" 
                      name="resume" 
                      accept=".pdf,.doc,.docx"
                      required 
                      className="w-full bg-white border border-[#E1ECE7] rounded-xl px-4 py-2.5 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#E6F0EC] file:text-[#0B5A3E] hover:file:bg-[#BCD4CA]/50 transition-all cursor-pointer text-[#4E6259]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#0D1C16] uppercase tracking-wide mb-2">Cover Letter / Message</label>
                    <textarea name="message" rows="4" placeholder="Briefly describe your experience and why you are a good fit..." className="w-full bg-white border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E] font-semibold outline-none transition-all"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full text-center py-4 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer
                      ${isSubmitting ? 'bg-[#4E6259] opacity-75' : 'bg-[#0B5A3E] hover:bg-[#08422E] hover:shadow-xl'}`}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}