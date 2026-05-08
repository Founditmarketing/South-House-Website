import { motion } from 'motion/react';
import { Award, CheckCircle, Shield, Briefcase, UserCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-neutral-base pt-20">
      {/* Hero */}
      <section className="relative bg-primary text-white py-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tennessee-landscape.webp"
            alt="East Tennessee landscape"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-xs font-bold text-gold">
               <span className="h-px w-8 bg-gold"></span>
               <span>The Firm Profile</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
               Built on <span className="text-gold italic">14+ Years</span> of Excellence.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-400 leading-relaxed italic max-w-2xl">
              "Growth should never come at the expense of client care. At SouthHouse, you aren't a number — you're a partner."
            </p>
            <div className="mt-12 flex items-center space-x-4">
               <div className="w-12 h-1 bg-gold"></div>
               <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Steven Sorhus, CPA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Owner Detail */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-24 items-center !py-32">
        <div className="relative group">
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-slate-800 bg-secondary flex flex-col justify-between aspect-[4/5]">
            <img
              src="/images/handshake.webp"
              alt="Professional handshake representing client partnership"
              className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            <div className="relative z-10 p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold mb-6">Principal</p>
              <p className="text-4xl font-black text-white leading-tight tracking-tight">Steven<br/>Sorhus<br/><span className="text-gold italic">CPA</span></p>
            </div>
            <div className="relative z-10 space-y-4 p-10">
              {[
                { label: "Education", value: "Master of Accountancy" },
                { label: "University", value: "Truman State University" },
                { label: "Licensed", value: "Certified Public Accountant" },
                { label: "Founded", value: "August 2011" },
                { label: "Remote Since", value: "2017" },
              ].map((item) => (
                <div key={item.label} className="border-b border-slate-700/50 pb-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="space-y-10">
          <div className="inline-block px-4 py-1 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
            Principal Background
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Steven Sorhus, <span className="text-gold">CPA</span></h2>
          <div className="space-y-8 text-lg text-slate-400 leading-relaxed font-medium">
            <p>
              SouthHouse — translated from the Norwegian <em>Sørhus</em> — is named after its founder. Steven began his career in 2008 after earning a Master of Accountancy from Truman State University, where he obtained his CPA license and gained experience with international clients and municipalities.
            </p>
            <p>
              In August 2011, he founded SouthHouse CPA LLC with a clear mission: provide exceptional, personalized service where all work is personally performed by Steven — no back-office delegation, no answering services. Every phone call and email goes directly to him.
            </p>
            <p>
              The firm began in the basement of Steven's Kirksville, Missouri home, grew into a professional farm office in northeast Missouri, and since 2017 has operated fully remotely — serving clients from St. Kitts, Scotland, and now Tennessee.
            </p>
            <p className="border-l-2 border-slate-700 pl-6 italic">
              "These experiences have reinforced our core values of flexibility, adaptability, and gratitude toward our loyal clients."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
            <div className="flex items-center space-x-4 p-6 bg-secondary border border-slate-700">
              <Shield className="text-gold shrink-0" size={24} />
              <span className="font-bold uppercase tracking-widest text-xs">Fully Certified CPA</span>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-secondary border border-slate-700">
              <Globe className="text-accent shrink-0" size={24} />
              <span className="font-bold uppercase tracking-widest text-xs">Nationwide Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Ethos */}
      <section className="bg-primary/50 text-white py-32 border-t border-slate-800">
        <div className="section-container !py-0">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold-accent text-xs block mb-4">Values & Integrity</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">The Modern Standard of Accounting.</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Direct Access",
                desc: "No receptionists, no answering services. All calls and emails go directly to Steven Sorhus — ensuring every inquiry receives a prompt, thoughtful response.",
                icon: <Shield size={40} className="text-gold" />
              },
              {
                title: "Personal Execution",
                desc: "All work is personally performed by Steven. No back-office delegation. Every engagement gets the accuracy, confidentiality, and consistency of a single expert.",
                icon: <Briefcase size={40} className="text-gold" />
              },
              {
                title: "Fee Transparency",
                desc: "Clear, upfront billing with no surprises. Fees remain consistent year-over-year — adjusted only for changes in complexity or modest inflation.",
                icon: <UserCheck size={40} className="text-gold" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-secondary p-10 border border-slate-700 space-y-8 flex flex-col group hover:border-gold/30 transition-all duration-300">
                <div className="p-4 bg-primary rounded-sm w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed italic text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership CTA */}
      <section className="bg-neutral-base py-32 text-center border-t border-slate-800">
        <div className="section-container !py-0">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Ready to Partner with <br/><span className="text-gold">Steven Sorhus?</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Schedule a free initial consultation. All work is personally performed by Steven — no delegation, no surprises.
          </p>
          <a href="https://www.calendly.com/sorhuscpa" target="_blank" rel="noopener noreferrer" className="btn-gold px-12 py-6 text-xl inline-flex items-center group">
            Schedule Free Consultation
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <CheckCircle className="ml-3 text-primary" size={24} />
            </motion.span>
          </a>
        </div>
      </section>
    </div>
  );
}
