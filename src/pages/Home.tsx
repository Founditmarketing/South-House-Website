import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Calculator, Briefcase, FileText, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-neutral-base">
      {/* Hero Section - Grand Scale */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-stretch pt-20 overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-[-10%] select-none pointer-events-none opacity-[0.03] z-0">
          <span className="text-[30vw] font-black leading-none text-white tracking-tighter">SOUTH</span>
        </div>

        <div className="lg:w-3/5 section-container flex flex-col justify-center relative z-10 !py-24 lg:!py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <div className="inline-flex items-center gap-2 mb-8 uppercase tracking-[0.4em] text-xs font-bold text-gold">
               <span className="h-px w-12 bg-gold"></span>
               <span>Professional Integrity Since 2011</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.95] tracking-tight text-white uppercase italic">
              16+ Years of <br/>Trusted CPA <br/><span className="text-gold not-italic">Leadership.</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-16 text-slate-400 max-w-2xl leading-relaxed font-medium">
              Expert tax preparation, bookkeeping, and strategic advisory for individuals and businesses nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href="https://www.calendly.com/sorhuscpa" target="_blank" rel="noopener noreferrer" className="btn-gold px-12 py-6 text-xl text-center shadow-2xl hover:scale-105 transition-transform">
                Schedule Free Consultation
              </a>
              <Link to="/services" className="btn-secondary px-12 py-6 text-xl text-center border-slate-700 hover:bg-slate-800 transition-colors">
                Practice Areas
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Massive Stats */}
        <div className="lg:w-2/5 relative flex items-center justify-center p-8 lg:p-16 overflow-hidden bg-secondary">
          <div className="absolute inset-0 z-0">
             <img
               src="/images/hero-desk.webp"
               alt="Tax documents and calculator on desk"
               className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full flex flex-col gap-10 max-w-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-primary/60 backdrop-blur-md p-10 border-l-[6px] border-gold shadow-2xl"
            >
              <div className="text-7xl font-black mb-2 italic text-white tracking-tighter">16+ YRS</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Of Professional Expertise</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-primary/60 backdrop-blur-md p-10 border-l-[6px] border-accent shadow-2xl"
            >
              <div className="text-5xl font-black mb-2 text-white tracking-tighter">NATIONWIDE</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">U.S. & International Clients</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-primary/60 backdrop-blur-md p-10 border-l-[6px] border-slate-600 shadow-2xl"
            >
              <div className="text-3xl font-black mb-2 uppercase tracking-tight text-white">Tax Dome</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Integrated Infrastructure</div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-12 right-12 flex flex-col items-end pointer-events-none opacity-10 select-none">
            <span className="text-[180px] font-black leading-none text-gold">CPA</span>
            <span className="text-sm font-bold tracking-[1.2em] uppercase text-white">SouthHouse</span>
          </div>
        </div>
      </section>

      {/* High-Impact Capabilities Segment */}
      <section className="bg-secondary/20 border-y border-slate-800 py-40">
        <div className="section-container !py-0">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">Core Competencies</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none">The Practice <br/>Overview.</h2>
            </div>
            <p className="text-xl text-slate-500 max-w-sm mb-2 font-medium">Providing precision-led accounting and tax leadership with 16+ years of verified excellence. Founded in 2011.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: "01", title: "Tax Prep & Planning", text: "Individual and business returns, proactive year-round planning, IRS notice response, and multi-state compliance.", info: "1040 / S-Corp / LLC / Schedule C" },
              { id: "02", title: "Bookkeeping & Payroll", text: "Accurate, cloud-based financial tracking and compliant payroll processing — in-house or outsourced.", info: "TaxDome Portal / Real-time Access" },
              { id: "03", title: "Business Advisory", text: "Strategic guidance on entity structure, operating capital, distributions, and scaling your business.", info: "LLC vs S-Corp / Exit Planning" },
            ].map((item) => (
              <div key={item.id} className="flex flex-col gap-8 group p-10 bg-secondary border border-slate-800 hover:border-gold/30 transition-all duration-500">
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-black text-gold/10 italic group-hover:text-gold/40 transition-colors uppercase leading-none">{item.id}</span>
                  <div className="p-2 bg-primary border border-slate-700">
                    <TrendingUp size={20} className="text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{item.title}</h3>
                  <div className="h-px w-12 bg-gold mb-6 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-lg text-slate-400 leading-relaxed font-medium mb-8">{item.text}</p>
                </div>
                <div className="mt-auto pt-4 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Focus Area</span>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{item.info}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-primary/30 py-40 border-b border-slate-800 relative">
         <div className="absolute top-0 right-0 p-32 opacity-[0.02] rotate-12 pointer-events-none">
            <span className="text-[20vw] font-black italic uppercase">Trust</span>
         </div>
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-32 items-center !py-0">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[1] tracking-tight uppercase">Strategic <br/><span className="text-gold italic">Integrity.</span></h2>
            <p className="text-2xl text-slate-400 mb-16 leading-relaxed italic font-medium max-w-xl">
              "Growth should never come at the expense of client care. Unlike larger firms, all work is personally performed by Steven Sorhus — no delegation, no surprises."
            </p>
            <div className="space-y-10">
              <div className="flex gap-8 p-10 bg-secondary border border-slate-700 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1.5 h-full bg-gold"></div>
                 <CheckCircle className="text-gold shrink-0 mt-1" size={32} />
                 <div>
                    <h4 className="text-2xl font-black mb-3 uppercase tracking-tight text-white">Direct Principal Review</h4>
                     <p className="text-lg text-slate-400 font-medium">16+ years of hands-on expertise. Every engagement is personally reviewed by Steven Sorhus for accuracy and consistency.</p>
                 </div>
              </div>
              <div className="flex gap-8 p-10 bg-secondary border border-slate-700 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>
                 <Users className="text-accent shrink-0 mt-1" size={32} />
                 <div>
                     <h4 className="text-2xl font-black mb-3 uppercase tracking-tight text-white">Fully Remote Since 2017</h4>
                     <p className="text-lg text-slate-400 font-medium">Serving clients across the U.S. and internationally via a secure, paperless cloud infrastructure through TaxDome.</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[3/4] bg-secondary border border-slate-700 shadow-2xl overflow-hidden">
               <img
                 src="/images/financial-charts.webp"
                 alt="Professional reviewing financial documents"
                 className="w-full h-full object-cover opacity-40 filter grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
             </div>
             <div className="absolute -bottom-16 -left-16 bg-gold p-12 shadow-2xl skew-x-[-6deg]">
                <p className="text-5xl font-black italic mb-1 text-primary tracking-tighter uppercase leading-none">CPA</p>
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Master of Accountancy</p>
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Call to Action */}
      <section className="bg-neutral-base py-48 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 select-none pointer-events-none opacity-[0.03] z-0">
          <span className="text-[25vw] font-black leading-none text-white tracking-tighter">CONTACT</span>
        </div>
        <div className="section-container relative z-10 !py-0">
          <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tight uppercase">Experience <br/><span className="text-gold">Accounting.</span></h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <a href="https://www.calendly.com/sorhuscpa" target="_blank" rel="noopener noreferrer" className="btn-gold px-20 py-8 text-2xl font-black uppercase tracking-widest min-w-[320px] hover:scale-105 transition-transform">
              Schedule Free Consultation
            </a>
            <a href="tel:6609889011" className="bg-transparent border-b-4 border-slate-700 text-white px-12 py-6 text-3xl font-black italic tracking-widest hover:border-gold transition-colors">
              (660) 988-9011
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
