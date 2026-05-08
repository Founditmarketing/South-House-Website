import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary border-b border-slate-700 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link text-sm uppercase tracking-widest ${location.pathname === link.path ? 'text-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-6">
              <a href="tel:6609889011" className="text-white font-semibold text-sm hover:text-gold transition-colors">(660) 988-9011</a>
              <Link to="/contact" className="btn-primary">
                Contact Steven
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-secondary border-b border-slate-700 overflow-hidden"
          >
            <div className="px-6 py-12 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-3xl font-black uppercase tracking-tight ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-slate-700 space-y-8">
                <a href="tel:6609889011" className="btn-gold w-full flex justify-center items-center py-6 text-xl">
                  <Phone size={24} className="mr-3" />
                  <span>Connect Direct</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
