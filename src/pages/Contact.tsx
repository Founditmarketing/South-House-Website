import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Shield, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Business Tax Prep',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const subject = encodeURIComponent(`SouthHouse CPA Inquiry - ${data.get('service')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message')}`
    );
    window.location.href = `mailto:southhousecpa@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col w-full bg-neutral-base pt-20">
      {/* Hero */}
      <section className="relative bg-primary text-white py-32 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tax-documents.webp"
            alt="Professional tax documentation"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-gold">
               <span className="h-px w-8 bg-gold"></span>
               <span>Engagement Inquiries</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-tight"
            >
              Direct <span className="text-gold italic">Contact.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl italic">
              "When you reach out, you're initiating a direct dialogue with the principal — no receptionists, no answering services."
            </p>
            <div className="mt-10">
              <a
                href="https://www.calendly.com/sorhuscpa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-5 text-lg inline-flex items-center font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-24 !py-32">
        {/* Contact Form */}
        <div className="space-y-12">
          <div className="bg-secondary p-10 md:p-16 border border-slate-700 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
            <h2 className="text-3xl font-black mb-10 text-white uppercase tracking-tight">Strategic Consultation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold block">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-primary border border-slate-700 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold block">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-primary border border-slate-700 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold block">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-primary border border-slate-700 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
                    placeholder="(660) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold block">Practice Area</label>
                  <select 
                    className="w-full bg-primary border border-slate-700 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Business Tax Prep</option>
                    <option>Individual Tax Prep</option>
                    <option>Ongoing Bookkeeping</option>
                    <option>Strategic Tax Planning</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gold block">Inquiry Details</label>
                <textarea 
                  required
                  rows={6}
                  className="w-full bg-primary border border-slate-700 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm resize-none"
                  placeholder="Tell us about your current financial landscape and objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-gold w-full py-6 text-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Send Strategic Inquiry
              </button>
              
              <p className="text-[10px] text-slate-500 text-center font-bold uppercase tracking-[0.2em] pt-4">
                <Shield size={12} className="inline mr-2" /> All inquiries are encrypted and handled with 100% confidentiality.
              </p>
            </form>
          </div>
        </div>

        {/* Contact Info & Details */}
        <div className="flex flex-col space-y-16">
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">The <span className="text-gold">Headquarters.</span></h2>
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center border border-slate-700 shrink-0">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-2">Location</p>
                  <p className="text-2xl text-white font-medium">463 Old Hen Valley Rd,<br />Oliver Springs, TN 37840</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center border border-slate-700 shrink-0">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-2">Direct Line</p>
                  <a href="tel:6609889011" className="text-2xl text-white font-medium hover:text-gold transition-colors tracking-widest">(660) 988-9011</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center border border-slate-700 shrink-0">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-2">Secure Email</p>
                  <a href="mailto:southhousecpa@gmail.com" className="text-2xl text-white font-medium hover:text-gold transition-colors break-all">southhousecpa@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary p-12 border border-slate-800 rounded-sm relative overflow-hidden flex-grow shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Clock size={120} />
             </div>
             <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Engagement Windows</h3>
             <ul className="space-y-6 text-slate-400 font-medium">
                <li className="flex justify-between border-b border-slate-800 pb-4">
                   <span className="uppercase tracking-widest text-xs">Mon - Fri</span>
                   <span className="text-white">8:30 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-4">
                   <span className="uppercase tracking-widest text-xs">Sat - Sun</span>
                   <span className="text-gold uppercase text-[10px] font-bold">By Appointment</span>
                </li>
             </ul>
             <div className="mt-12 space-y-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Schedule Online</p>
                <a
                  href="https://www.calendly.com/sorhuscpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent font-bold hover:text-white transition-colors text-sm"
                >
                  calendly.com/sorhuscpa →
                </a>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-6">Existing Clients</p>
                <a
                  href="https://southhousecpa.taxdome.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent font-bold hover:text-white transition-colors text-sm"
                >
                  Client Portal Login →
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="h-[600px] w-full border-t border-slate-800 grayscale invert opacity-50 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000">
         <iframe 
          title="SouthHouse CPA LLC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.1!2d-84.0332!3d36.0465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c4e2b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s463%20Old%20Hen%20Valley%20Rd%2C%20Oliver%20Springs%2C%20TN%2037840!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Trust Quote */}
      <section className="bg-primary py-32 text-center border-t border-slate-800">
         <div className="section-container !py-0">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">Fully Remote. <br/><span className="text-gold italic">Nationally Trusted.</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto italic font-medium">
               "Operating from Tennessee, we serve clients across the U.S. and beyond — proving that even a single-member firm from rural Missouri can offer world-class service across borders."
            </p>
         </div>
      </section>
    </div>
  );
}
