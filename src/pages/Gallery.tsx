import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, Landmark, Briefcase, ExternalLink, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    id: "fraud",
    icon: <ShieldAlert size={40} className="text-gold" />,
    category: "Security Alert",
    title: "Fraud & Phishing",
    description:
      "As a business owner you will be uniquely targeted for phishing attacks and compliance scams. These can vary from suspicious emails to legitimate-looking letters and notices.",
    body:
      "SouthHouse CPA stays current on the latest IRS impersonation scams, state tax authority fraud, and business email compromise tactics. If you receive an unexpected notice or unsolicited contact claiming to be from the IRS, do not respond — call us first.",
    cta: "Contact Steven",
    ctaHref: "/contact",
    external: false,
  },
  {
    id: "irs",
    icon: <Landmark size={40} className="text-gold" />,
    category: "IRS Guidance",
    title: "IRS Issues",
    description:
      "The IRS is underfunded and understaffed and has been for years. This has caused delays, unexpected notices, and difficulties in contacting them.",
    body:
      "Navigating IRS correspondence can be stressful and confusing. SouthHouse CPA can represent you before the IRS, respond to notices on your behalf, and help resolve issues ranging from account discrepancies to full audits — all with direct principal involvement.",
    cta: "Schedule Consultation",
    ctaHref: "https://www.calendly.com/sorhuscpa",
    external: true,
  },
  {
    id: "tax-credits",
    icon: <AlertTriangle size={40} className="text-gold" />,
    category: "Planning Advisory",
    title: "Tax Credits",
    description:
      "Tax credits are wonderful incentives and rewards, but should be embarked upon with caution. Non-tax considerations need to be prioritized when making long-term and costly decisions.",
    body:
      "From R&D credits to energy efficiency incentives and hiring credits, the tax code offers legitimate opportunities to reduce your liability. However, aggressive credit strategies can attract scrutiny. SouthHouse evaluates each opportunity with a risk-adjusted lens.",
    cta: "Schedule Consultation",
    ctaHref: "https://www.calendly.com/sorhuscpa",
    external: true,
  },
  {
    id: "small-business",
    icon: <Briefcase size={40} className="text-gold" />,
    category: "Small Business",
    title: "Advice for New Business Owners",
    description:
      "General advice all small business owners should know regarding the handling of company funds and distributions.",
    body:
      "From entity selection (LLC vs. S-Corp) to separating business and personal finances, setting up payroll correctly, and understanding estimated tax obligations — SouthHouse CPA provides practical, jargon-free guidance to help new owners build strong financial foundations from day one.",
    cta: "Schedule Consultation",
    ctaHref: "https://www.calendly.com/sorhuscpa",
    external: true,
  },
];

export default function Gallery() {
  return (
    <div className="flex flex-col w-full bg-neutral-base pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-32 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] -z-0"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-gold">
               <span className="h-px w-8 bg-gold"></span>
               <span>Knowledge Base</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-tight"
            >
              Resources &amp; <span className="text-gold italic">Guidance.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl italic">
              "Informed clients make better decisions. Here's what every business owner and individual taxpayer should know."
            </p>
            <div className="mt-10">
              <a
                href="https://www.calendly.com/sorhuscpa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-5 text-lg inline-flex items-center gap-3 font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <CalendarDays size={20} />
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-container space-y-32 !py-32">
        {resources.map((res, index) => (
          <motion.div
            key={res.id}
            id={res.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row gap-20 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-5/12 space-y-8">
              <div className="p-4 bg-secondary border border-slate-700 w-fit">
                {res.icon}
              </div>
              <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-gold border border-gold/30">
                {res.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">{res.title}</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
                {res.description}
              </p>
              <div className="pt-4">
                {res.external ? (
                  <a
                    href={res.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2"
                  >
                    {res.cta} <ExternalLink size={16} />
                  </a>
                ) : (
                  <Link to={res.ctaHref} className="btn-gold inline-flex items-center gap-2">
                    {res.cta}
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:w-7/12 bg-secondary p-10 md:p-14 shadow-2xl border border-slate-700 flex flex-col relative overflow-hidden group hover:border-gold/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50"></div>
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {res.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-8">What You Should Know</h3>
              <p className="text-lg text-slate-300 leading-relaxed font-medium flex-grow">
                {res.body}
              </p>
              <div className="mt-12 p-6 bg-primary/40 border border-slate-800">
                <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-2">SouthHouse Approach</p>
                <p className="text-slate-400 italic text-sm">
                  All guidance is personally provided by Steven Sorhus, CPA — with direct access, no intermediaries.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-neutral-base py-32 text-center border-t border-slate-800">
         <div className="section-container !py-0">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight leading-tight">Have a Specific <br/><span className="text-gold">Question?</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium italic">
              "Reach out directly. Every call and email goes to Steven \u2014 not a receptionist, not an answering service."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://www.calendly.com/sorhuscpa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-12 py-6 text-xl inline-flex items-center gap-3"
              >
                <CalendarDays size={22} /> Schedule Free Consultation
              </a>
              <a href="tel:6609889011" className="btn-secondary px-10 py-6 text-xl">
                (660) 988-9011
              </a>
            </div>
         </div>
      </section>
    </div>
  );
}
