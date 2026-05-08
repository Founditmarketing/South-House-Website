import { motion } from 'motion/react';
import { Shield, Calculator, FileText, Briefcase, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceDetails = [
    {
      id: "business",
      title: "Business Tax Preparation",
      icon: <Briefcase size={40} className="text-gold" />,
      who: "LLCs, S-Corps, Corporations, and the Self-Employed.",
      what: [
        "Federal & State Income Tax Filing",
        "Strategic Deduction Identification",
        "Estimated Tax Calculations",
        "Multi-state Compliance Preparation",
        "Audit Support & Representation"
      ],
      why: "16 years of expertise means we understand the tax code's nuances. We proactively hunt for savings that others miss."
    },
    {
      id: "individual",
      title: "Individual Tax Preparation",
      icon: <UserCheckIcon size={40} className="text-gold" />,
      who: "Employees, Investors, Families, and High-Net-Worth Individuals.",
      what: [
        "Complex 1040 Filings",
        "Investment Income Reporting (Capital Gains, Crypto)",
        "Schedule C & E Expertise",
        "Retirement Contribution Optimization",
        "Refund Trajectory Planning"
      ],
      why: "Personalized attention ensures no stone is left unturned. We treat your personal taxes with the same rigor as a corporate audit."
    },
    {
      id: "bookkeeping",
      title: "Bookkeeping & Accounting",
      icon: <FileText size={40} className="text-gold" />,
      who: "Growing businesses needing reliable financial visibility.",
      what: [
        "Monthly Transaction Reconciliation",
        "Financial Statement Generation (P&L, Balance Sheet)",
        "Accounts Payable/Receivable Management",
        "Payroll Integration & Compliance",
        "Real-time Access via Tax Dome Portal"
      ],
      why: "Accuracy is non-negotiable. We provide the hard data you need to make confident, strategic business decisions."
    },
    {
      id: "planning",
      title: "Tax Planning & Strategy",
      icon: <Calculator size={40} className="text-gold" />,
      who: "Owners and individuals looking to minimize multi-year liabilities.",
      what: [
        "Quarterly Strategic Reviews",
        "Entity Choice Consulting (LLC vs S-Corp)",
        "Deduction Timing Strategies",
        "Estate & Legacy Planning",
        "Exit Strategy Tax Minimization"
      ],
      why: "Wealth shouldn't be lost to poor planning. We are proactive, not reactive, ensuring your long-term goals are realized."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-neutral-base pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-32 border-b border-slate-800">
        <div className="section-container flex flex-col lg:flex-row items-center gap-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-xs font-bold text-gold">
               <span className="h-px w-8 bg-gold"></span>
               <span>Our Practice Areas</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight"
            >
              Strategic <span className="text-gold">CPA</span> Solutions.
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Serving individuals and businesses nationwide with 14+ years of meticulous expertise and a partner-led approach.
            </p>
          </div>
          <div className="bg-secondary p-12 rounded-sm border border-slate-700 flex-grow text-center shadow-2xl">
             <Calculator size={80} className="text-gold mx-auto mb-6" />
             <div className="space-y-2">
                <p className="text-5xl font-bold text-white tracking-tighter italic">Nationwide</p>
                <p className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">U.S. & International Service</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container space-y-40 !py-32">
        {serviceDetails.map((service, index) => (
          <motion.div 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row gap-20 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-5/12 space-y-10">
              <div className="p-4 bg-secondary border border-slate-700 w-fit">
                {service.icon}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">{service.title}</h2>
              <div className="p-5 border-l-4 border-gold bg-gold/5">
                <p className="text-sm font-bold text-gold uppercase tracking-widest">Target Audience:</p>
                <p className="text-lg text-white font-medium italic">{service.who}</p>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                {service.why}
              </p>
              <div className="pt-4">
                 <Link to="/contact" className="btn-gold inline-flex items-center">
                    Initiate Engagement <Zap className="ml-2" size={18} />
                 </Link>
              </div>
            </div>

            <div className="lg:w-7/12 bg-secondary p-8 md:p-16 rounded-sm shadow-2xl border border-slate-700 flex flex-col h-full relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {service.icon}
               </div>
               <h3 className="text-2xl font-bold mb-10 text-white flex items-center uppercase tracking-widest">
                 <CheckCircle className="text-gold mr-4" /> 
                 Scope of work
               </h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 flex-grow">
                 {service.what.map((item, i) => (
                   <li key={i} className="flex items-start">
                     <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 mr-4 shrink-0"></div>
                     <span className="text-lg text-slate-300 leading-tight font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="mt-16 p-8 bg-primary/40 rounded-sm border border-slate-800">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-3">Workflow Philosophy</p>
                  <p className="text-slate-400 italic text-sm">Strategic Onboarding → Asset Review → Annual Performance → Quarterly Adjustments</p>
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Tax Dome Section */}
      <section className="bg-primary py-32 border-t border-slate-800">
        <div className="section-container flex flex-col lg:flex-row items-center gap-24 text-white !py-0">
          <div className="lg:w-1/2">
             <div className="inline-block px-4 py-2 bg-accent/20 text-accent font-bold uppercase tracking-[0.2em] text-[10px] rounded-sm mb-8 border border-accent/30">
               Integrated Infrastructure
             </div>
             <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tight">The <span className="text-gold italic">Tax Dome</span> Advantage.</h2>
             <p className="text-2xl text-slate-400 leading-relaxed italic mb-12 font-medium">
               "Modern accounting shouldn't be a game of phone tag. We utilize Tax Dome to provide our clients with a secure, real-time window into their financial health."
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "AES-256 Encryption",
                  "Digital E-Signatures",
                  "Real-time Tracking",
                  "Messaging Hub",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-secondary border border-slate-700">
                    <CheckCircle className="text-gold" size={20} />
                    <span className="font-bold uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
             </div>
             <div className="flex items-center gap-6">
                <a 
                  href="https://southhousecpa.taxdome.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold !bg-white !text-primary inline-flex items-center font-extrabold"
                >
                  Access Client Portal <ExternalLink size={20} className="ml-2" />
                </a>
             </div>
          </div>
          <div className="lg:w-1/2 relative group">
             <div className="aspect-video bg-secondary rounded-sm overflow-hidden border border-slate-700 shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/tax_dashboard/1000/600" 
                  alt="Tax Dome Portal View" 
                  className="w-full h-full object-cover opacity-30 filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-accent px-8 py-6 rounded-sm shadow-2xl border border-blue-400">
                <p className="text-4xl font-black italic mb-1 text-white uppercase tracking-tighter">SECURE</p>
                <p className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-80">Full ISO Compliance</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 text-center bg-neutral-base border-t border-slate-800">
         <div className="section-container !py-0">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight">Strategy over <span className="text-gold">Transactions.</span></h2>
            <p className="text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium italic">
               "Every business ecosystem is unique. Let's talk about your specific trajectory and build an accounting plan that scales with you."
            </p>
            <Link to="/contact" className="btn-secondary px-16 py-6 text-xl">
               Initiate a Strategic Session
            </Link>
         </div>
      </section>
    </div>
  );
}

function UserCheckIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}
