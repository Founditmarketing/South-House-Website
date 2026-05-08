import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-base border-t border-slate-800 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Reach */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/sh-logo-mark.png"
                alt="SouthHouse CPA logo"
                className="w-10 h-10 object-contain filter invert brightness-200 group-hover:brightness-[3] transition-all duration-300"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white uppercase">SouthHouse</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">CPA LLC</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              14+ years of trusted CPA leadership. Fully remote since 2017, serving clients across the U.S. and internationally.
            </p>
            <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-bold text-gold border border-gold/30 px-3 py-1">
               Founded August 2011
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors transition-colors transition-colors">Firm Profile</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors transition-colors transition-colors">Practice Areas</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors transition-colors transition-colors">Contact Principal</Link></li>
            </ul>
          </div>

          {/* Practical */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Infrastructure</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li>
                <a 
                  href="https://southhousecpa.taxdome.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-accent hover:text-white transition-colors"
                >
                  <span>Client Portal Login</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>Secure Cloud Storage</li>
              <li>256-bit Encryption</li>
              <li>Multi-State Filing Engine</li>
              <li>Paperless Integration</li>
            </ul>
          </div>

          {/* Hub */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Headquarters</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-gold shrink-0" size={18} />
                <span>463 Old Hen Valley Rd,<br />Oliver Springs, TN 37840</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gold shrink-0" size={18} />
                <a href="tel:6609889011" className="hover:text-gold transition-colors font-bold text-white tracking-widest">(660) 988-9011</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gold shrink-0" size={18} />
                <a href="mailto:southhousecpa@gmail.com" className="hover:text-gold transition-colors break-all">southhousecpa@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
          <p>© {currentYear} SouthHouse CPA LLC. Founded August 2011.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="https://southhousecpa.taxdome.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Client Portal</a>
            <a href="https://www.calendly.com/sorhuscpa" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Schedule</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
