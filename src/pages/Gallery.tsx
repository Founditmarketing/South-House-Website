import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, Landmark, Briefcase, ExternalLink, CalendarDays, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    id: "fraud",
    icon: <ShieldAlert size={40} className="text-gold" />,
    category: "Security Alert",
    title: "Fraud & Phishing",
    description:
      "As a business owner you will be uniquely targeted for phishing attacks and compliance scams. These can vary from suspicious emails to legitimate-looking letters and notices.",
    points: [
      "The IRS initiates contact only through official mail via the U.S. Postal Service — never by phone, text, or email first.",
      "Never send money using Western Union, gift cards, or cryptocurrency in response to an IRS \"demand.\"",
      "When you register a new business, your filing becomes public record. Scammers monitor these filings and send official-looking letters to new owners using state symbols and \"compliance\" language.",
      "Federal workplace posters required by law are available free at dol.gov — you do not need to pay for them.",
      "If you receive any suspicious notice, forward it to Steven before responding. He can quickly confirm whether something is genuine or fraudulent.",
    ],
    quote: "If you receive any communication that appears to be from the IRS or a state compliance agency, please reach out to me before responding.",
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
    points: [
      "Unexpected IRS notices are common and often stem from processing delays, not errors on your return.",
      "SouthHouse CPA can respond to notices on your behalf and represent you before the IRS.",
      "Many IRS issues can be resolved without any penalties if addressed promptly and correctly.",
      "If you receive an IRS notice, do not ignore it — contact Steven immediately for guidance.",
    ],
    quote: "I've reviewed countless legitimate IRS communications and can quickly confirm whether something is genuine or requires action.",
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
    points: [
      "Non-refundable credits can only offset your tax liability — if you don't owe enough tax, the unused portion may be lost (or carried forward for a limited time).",
      "The solar credit can carry forward 20+ years; the EV credit cannot be carried forward at all.",
      "The Advanced Premium Tax Credit (APTC) for healthcare can become a repayment burden if your income ends up higher than estimated.",
      "Don't take on costly projects solely to qualify for a credit — if the underlying decision isn't sound, the credit won't make it worthwhile.",
      "If a credit would be the nudge that pushes you to one side of a good decision, contact Steven to estimate the actual tax impact first.",
    ],
    quote: "If it's not a good idea for you to meet the requirements of a credit, don't do it. Don't chase research expenses solely to qualify for the R&D Credit.",
    cta: "Schedule Consultation",
    ctaHref: "https://www.calendly.com/sorhuscpa",
    external: true,
  },
  {
    id: "small-business",
    icon: <Briefcase size={40} className="text-gold" />,
    category: "Small Business",
    title: "Best Practices for New Business Owners",
    description:
      "General advice all small business owners should know regarding the handling of company funds, distributions, and financial reporting.",
    points: [
      "Keep business and personal funds completely separate — mixing them is one of the most common causes of small business failure.",
      "Maintain at least one month's worth of operating capital if it typically takes 30 days to collect payment.",
      "S-Corporation owners are required by law to pay themselves a reasonable salary — don't rely solely on distributions.",
      "Distributions should be made at management's discretion based on excess earnings — never to simply satisfy personal expenses.",
      "Pass-through entities are taxed on profits, not distributions — you may owe tax on income retained in the business.",
      "A good manager knows when to cut losses: avoid the sunk cost fallacy.",
      "Timely, accurate financial reports allow you to identify cost overruns and anticipate future cash needs before they become problems.",
    ],
    quote: "In my experience, mixing personal wants with fiduciary responsibility is one of the most common causes of small business failure.",
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
        <div className="absolute inset-0 z-0">
          <img
            src="/images/resources-hero.webp"
            alt="Reference library"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
        </div>
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
              "Informed clients make better decisions. Here's what every business owner and individual taxpayer should know — straight from Steven."
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

      {/* Resources */}
      <section className="section-container space-y-40 !py-32">
        {resources.map((res, index) => (
          <motion.div
            key={res.id}
            id={res.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row gap-20 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Left: intro */}
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
              <blockquote className="border-l-4 border-gold pl-6 italic text-slate-300 text-base font-medium leading-relaxed">
                "{res.quote}"
                <footer className="mt-3 text-gold text-[10px] font-bold uppercase tracking-[0.3em] not-italic">— Steven Sorhus, CPA</footer>
              </blockquote>
              <div className="pt-2">
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

            {/* Right: bullet points */}
            <div className="lg:w-7/12 bg-secondary p-10 md:p-14 shadow-2xl border border-slate-700 flex flex-col relative overflow-hidden group hover:border-gold/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50"></div>
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {res.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-10">What You Should Know</h3>
              <ul className="space-y-6 flex-grow">
                {res.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <CheckCircle size={18} className="text-gold shrink-0 mt-1" />
                    <span className="text-slate-300 font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 bg-primary/40 border border-slate-800">
                <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-2">Steven's Approach</p>
                <p className="text-slate-400 italic text-sm">
                  All guidance is personally provided by Steven Sorhus, CPA — direct access, no intermediaries, no receptionists.
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
              "Reach out directly. Every call and email goes to Steven — not a receptionist, not an answering service."
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
