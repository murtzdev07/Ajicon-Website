import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export default function AdminDashboard() {
  // 🔴 Security & OTP State
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('ajicon_admin_auth') === 'true'
  );
  const [otp, setOtp] = useState('');
  const [expectedOtp, setExpectedOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard State
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewPdfUrl, setPreviewPdfUrl] = useState(null); // Added PDF preview state

  useEffect(() => {
    if (isAuthenticated) {
      fetchJobs();
      fetchApplications();
    }
  }, [isAuthenticated]);

  // 1. Generate and Send OTP via Web3Forms
  const handleSendEmailOTP = async (e) => {
    e.preventDefault();
    setLoadingAuth(true);
    setAuthError('');

    // Generate a random 6-digit code
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("email", "info@ajicon.com");
    formData.append("subject", `Ajicon HR Portal - Security Code: ${generatedCode}`);
    formData.append("from_name", "Ajicon Security System");
    formData.append("message", `Your administrative authorization code is: ${generatedCode}. Do not share this code with anyone.`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setExpectedOtp(generatedCode);
        setOtpSent(true);
      } else {
        setAuthError('Failed to dispatch email. Check your Web3Forms API key in .env.');
      }
    } catch (error) {
      console.error(error);
      setAuthError('Network error. Unable to connect to email servers.');
    } finally {
      setLoadingAuth(false);
    }
  };

  // 2. Verify the Client-Side OTP
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setLoadingAuth(true);
    setAuthError('');

    if (otp === expectedOtp && expectedOtp !== '') {
      sessionStorage.setItem('ajicon_admin_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setAuthError('Invalid Security Code. Please check your email and try again.');
    }
    setLoadingAuth(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ajicon_admin_auth');
    setIsAuthenticated(false);
    setOtpSent(false);
    setOtp('');
    setExpectedOtp('');
  };

  // Supabase Fetch Jobs
  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) {
      setJobs(data || []);
    } else {
      console.error('Error fetching jobs:', error);
    }
  };

  // Supabase Fetch Applications
  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) {
      setApplications(data || []);
    } else {
      console.error('Error fetching applications:', error);
    }
  };

  // Supabase Add Job
  const handleAddJob = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    try {
      const { error } = await supabase.from('jobs').insert([{
        title: formData.get('title'),
        dept: formData.get('dept'),
        location: formData.get('location'),
        type: formData.get('type')
      }]);

      if (!error) {
        e.target.reset();
        fetchJobs();
      } else {
        console.error("Error adding job: ", error);
      }
    } catch (error) {
      console.error("Error adding job: ", error);
    }
    setIsSubmitting(false);
  };

  // Supabase Delete Job
  const handleDeleteJob = async (id) => {
    if(window.confirm("Permanently delete this active job posting?")) {
      const { error } = await supabase.from('jobs').delete().eq('id', id);
      if (!error) fetchJobs();
    }
  };

  // 🔴 SECURE EMAIL OTP LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A1410] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0B5A3E]/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="bg-white p-10 rounded-[2rem] shadow-2xl w-full max-w-md relative z-10 border border-[#BCD4CA]/50 text-center">
          <div className="w-16 h-16 bg-[#E6F0EC] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-[#BCD4CA]/50">
            <span className="text-2xl font-black text-[#0B5A3E]">AJ</span>
          </div>
          <h2 className="text-2xl font-black text-[#0D1C16] mb-2 tracking-tight">Corporate Access Portal</h2>
          <p className="text-sm text-[#4E6259] font-medium mb-8">
            {otpSent ? 'Check your administrative email inbox for the 6-digit security code.' : 'Verify your administrative identity via Email OTP.'}
          </p>

          {!otpSent ? (
            <form onSubmit={handleSendEmailOTP} className="space-y-4">
              <button type="submit" disabled={loadingAuth} className="w-full bg-[#0B5A3E] disabled:bg-[#4E6259] hover:bg-[#08422E] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transition-all active:scale-95">
                {loadingAuth ? 'Transmitting Request...' : 'Send OTP to Admin Email'}
              </button>
              {authError && <p className="text-xs text-red-500 font-bold mt-2">{authError}</p>}
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4 animate-fade-in">
              <div>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="------" 
                  maxLength={6}
                  className={`w-full bg-[#FAF7F2] border ${authError ? 'border-red-500 focus:ring-red-500/30' : 'border-[#E1ECE7] focus:ring-[#0B5A3E]/30 focus:border-[#0B5A3E]'} rounded-xl px-4 py-4 text-center text-3xl font-black tracking-[0.5em] outline-none transition-all`}
                />
                {authError && <p className="text-xs text-red-500 font-bold mt-2">{authError}</p>}
              </div>
              <button type="submit" disabled={loadingAuth || otp.length !== 6} className="w-full bg-[#0B5A3E] disabled:bg-[#4E6259] hover:bg-[#08422E] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transition-all active:scale-95">
                {loadingAuth ? 'Verifying...' : 'Authenticate'}
              </button>
              <button type="button" onClick={() => { setOtpSent(false); setExpectedOtp(''); }} className="text-xs font-bold text-[#8AA197] hover:text-[#0B5A3E] mt-4">
                ← Resend Code
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // 🟢 MAIN ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-28 pb-24 font-sans relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white p-6 rounded-3xl border border-[#E1ECE7] shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0D1C16] tracking-tight">Ajicon HR Portal</h1>
            <p className="text-xs font-bold text-[#F4941C] uppercase tracking-widest mt-1">Authorized Session Active (Supabase)</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex bg-[#FAF7F2] p-1.5 rounded-xl border border-[#E1ECE7] w-full md:w-auto">
              <button onClick={() => setActiveTab('jobs')} className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-black transition-all ${activeTab === 'jobs' ? 'bg-[#0B5A3E] text-white shadow-md' : 'text-[#4E6259] hover:bg-white'}`}>Active Postings</button>
              <button onClick={() => setActiveTab('apps')} className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-black transition-all ${activeTab === 'apps' ? 'bg-[#0B5A3E] text-white shadow-md' : 'text-[#4E6259] hover:bg-white'}`}>Applicant Data</button>
            </div>
            <button onClick={handleLogout} className="hidden md:flex p-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-colors" title="Terminate Session">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </button>
          </div>
        </div>

        {/* JOBS TAB */}
        {activeTab === 'jobs' && (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 h-fit">
              <div className="bg-white p-8 rounded-[2rem] border border-[#E1ECE7] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#E6F0EC] rounded-full flex items-center justify-center text-[#0B5A3E]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <h3 className="font-black text-[#0D1C16] text-xl">Deploy Listing</h3>
                </div>
                
                <form onSubmit={handleAddJob} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-black text-[#8AA197] uppercase tracking-wider mb-2">Role Title</label>
                    <input name="title" required placeholder="e.g., Plant Manager" className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm font-semibold focus:border-[#0B5A3E] focus:ring-1 focus:ring-[#0B5A3E] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#8AA197] uppercase tracking-wider mb-2">Department</label>
                    <input name="dept" required placeholder="e.g., Operations" className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm font-semibold focus:border-[#0B5A3E] focus:ring-1 focus:ring-[#0B5A3E] outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-[#8AA197] uppercase tracking-wider mb-2">Location</label>
                      <input name="location" required defaultValue="Ratlam, MP" className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm font-semibold focus:border-[#0B5A3E] focus:ring-1 focus:ring-[#0B5A3E] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[#8AA197] uppercase tracking-wider mb-2">Contract</label>
                      <select name="type" className="w-full bg-[#FAF7F2] border border-[#E1ECE7] rounded-xl px-4 py-3 text-sm font-semibold focus:border-[#0B5A3E] focus:ring-1 focus:ring-[#0B5A3E] outline-none transition-all">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#0B5A3E] text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#08422E] shadow-lg active:scale-95 transition-all mt-4">
                    {isSubmitting ? 'Transmitting...' : 'Publish to Live Site'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid gap-4">
                {jobs.length === 0 ? (
                  <div className="bg-white p-10 rounded-[2rem] border border-dashed border-[#BCD4CA] text-center">
                    <p className="text-[#8AA197] font-bold">No active job postings. Create one to display it on the public careers page.</p>
                  </div>
                ) : (
                  jobs.map(job => (
                    <div key={job.id} className="bg-white p-6 rounded-2xl border border-[#E1ECE7] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-all group">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-black text-[#0D1C16] text-xl">{job.title}</h4>
                          <span className="bg-[#EBF3F0] text-[#0B5A3E] text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">Live</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-[#8AA197]">
                          <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> {job.dept}</span>
                          <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg> {job.location}</span>
                          <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {job.type}</span>
                        </div>
                      </div>
                      <button onClick={() => handleDeleteJob(job.id)} className="w-full sm:w-auto bg-red-50 text-red-600 hover:bg-red-500 hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm">
                        Revoke
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATIONS TAB */}
        {activeTab === 'apps' && (
          <div className="bg-white rounded-[2rem] border border-[#E1ECE7] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#FAF7F2] border-b border-[#E1ECE7]">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-[#8AA197] uppercase tracking-widest">Candidate Profile</th>
                    <th className="px-8 py-5 text-[10px] font-black text-[#8AA197] uppercase tracking-widest">Target Role</th>
                    <th className="px-8 py-5 text-[10px] font-black text-[#8AA197] uppercase tracking-widest">Contact Vector</th>
                    <th className="px-8 py-5 text-[10px] font-black text-[#8AA197] uppercase tracking-widest text-right">Status / Resume</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1ECE7]">
                  {applications.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-8 py-12 text-center text-[#8AA197] font-bold">No applications recorded in the database yet.</td>
                    </tr>
                  ) : (
                    applications.map(app => (
                      <tr key={app.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-8 py-5">
                          <p className="font-black text-[#0D1C16] text-base">{app.name}</p>
                          <p className="text-xs text-[#8AA197] font-semibold mt-0.5 truncate max-w-[200px]" title={app.message}>{app.message || "No cover letter provided."}</p>
                        </td>
                        <td className="px-8 py-5 font-bold text-[#0B5A3E]">{app.role}</td>
                        <td className="px-8 py-5">
                          <a href={`tel:${app.phone}`} className="font-bold text-[#0D1C16] hover:text-[#F4941C] transition-colors block">{app.phone}</a>
                          <a href={`mailto:${app.email}`} className="text-xs text-[#8AA197] hover:text-[#0B5A3E] font-semibold mt-0.5 block">{app.email}</a>
                        </td>
                        <td className="px-8 py-5 text-right space-y-1">
                          <div>
                            <span className="inline-flex items-center gap-1.5 bg-[#FFF4E5] text-[#F4941C] border border-[#FADCB3] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F4941C] animate-pulse"></span>
                              Pending
                            </span>
                          </div>
                          {app.resume_url && app.resume_url !== 'No file uploaded' && (
                            <div className="flex items-center justify-end gap-2 mt-1">
                              <button 
                                onClick={() => setPreviewPdfUrl(app.resume_url)}
                                className="text-[11px] font-bold text-[#0B5A3E] underline hover:text-[#F4941C] bg-transparent border-0 cursor-pointer p-0"
                              >
                                Preview PDF
                              </button>
                              <span className="text-[#8AA197]">•</span>
                              <a 
                                href={app.resume_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-[11px] font-bold text-[#8AA197] hover:text-[#0B5A3E]"
                              >
                                Open ↗
                              </a>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="bg-[#FAF7F2] border-t border-[#E1ECE7] px-8 py-4 flex justify-between items-center">
              <span className="text-xs font-bold text-[#8AA197]">Total Records: {applications.length}</span>
              <span className="text-[10px] font-black text-[#8AA197] uppercase tracking-widest">Data synced with Supabase PostgreSQL</span>
            </div>
          </div>
        )}

      </div>

      {/* INLINE PDF PREVIEW MODAL */}
      {previewPdfUrl && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-[#E1ECE7]">
            <div className="flex justify-between items-center px-6 py-4 bg-[#FAF7F2] border-b border-[#E1ECE7]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B5A3E]"></span>
                <h3 className="font-black text-sm text-[#0D1C16] uppercase tracking-wider">Candidate Resume Preview</h3>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={previewPdfUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-bold text-[#0B5A3E] hover:underline"
                >
                  Download / Full Tab ↗
                </a>
                <button 
                  onClick={() => setPreviewPdfUrl(null)}
                  className="w-8 h-8 rounded-full bg-white border border-[#E1ECE7] flex items-center justify-center text-xs font-bold text-[#4E6259] hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-100">
              <iframe 
                src={previewPdfUrl} 
                title="Resume PDF Reader" 
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}