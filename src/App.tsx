import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Box, 
  Gamepad2, 
  Code2, 
  Globe, 
  ArrowRight, 
  Mail, 
  Instagram, 
  Twitter, 
  Linkedin,
  Facebook,
  Sparkles,
  Layers,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { translations, Language } from './constants';

const YeksemenebStar = ({ className = "w-full h-full" }: { className?: string }) => (
  <a href="#top" className="text-sm font-medium hover:text-brand-500 transition-colors">
  <img 
    src="img/estrella_yeksemeneb_blanca.svg" 
    alt="Spellmell Star" 
    className={className}
    onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/star/100/100' }}
  />
  </a>
);

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform text-white">
            <YeksemenebStar />
          </div>
          <span className="text-xl font-bold tracking-tight font-display uppercase">spellmell</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-brand-500 transition-colors">{t.services}</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-500 transition-colors">{t.about}</a>
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 hover:border-brand-500 transition-colors"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a href="#contact" className="bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-600 transition-all shadow-lg shadow-black/10">
            {t.contact}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#001100]/90 border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">{t.services}</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">{t.about}</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">{t.contact}</a>
            <button 
              onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); setIsMobileMenuOpen(false); }}
              className="text-sm font-bold uppercase tracking-widest text-brand-500"
            >
              {lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  const heroImage = 'img/header_img.jpg';

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 -z-10 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right flex flex-col items-end"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
            {t.badge}
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={i > 2 ? 'text-gradient' : ''}>{word} </span>
            ))}
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <a href="#contact" className="bg-brand-500 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25 flex items-center gap-2">
              {t.cta} <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src={heroImage} 
              alt="Creative Studio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/hero/1200/800' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Floating elements for immersion */}
          <motion.div 
            animate={{ 
              y: [0, -15, 5, 0],
              x: [0, 5, -5, 0],
              rotate: [0, 2, -2, 0],
              borderRadius: ["1rem", "2rem", "1rem"]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-6 -right-6 glass p-4 shadow-xl hidden sm:block overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-emerald-500/5"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex items-center gap-3 relative z-10">
              <motion.div 
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Palette size={20} />
              </motion.div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Web Developing</p>
                <p className="text-sm font-bold">Front & Backend</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, 15, -5, 0],
              x: [0, -5, 5, 0],
              rotate: [0, -2, 2, 0],
              borderRadius: ["1rem", "2rem", "1rem"]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1 
            }}
            className="absolute -bottom-6 -left-6 glass p-4 shadow-xl hidden sm:block overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-brand-500/5"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="flex items-center gap-3 relative z-10">
              <motion.div 
                className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Box size={20} />
              </motion.div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Digital Art</p>
                <p className="text-sm font-bold">3D & Graphic Design</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceModal = ({ 
  isOpen, 
  onClose, 
  service, 
  lang 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  service: any, 
  lang: Language 
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#001100]/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full ${service.image ? 'max-w-5xl flex flex-col md:flex-row' : 'max-w-2xl'} bg-white/5 rounded-[2rem] shadow-2xl overflow-hidden`}
          >
            {service.image && (
              <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${service.title}/1200/800` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001100]/60 via-transparent to-transparent md:bg-gradient-to-r pointer-events-none" />
                <div className="absolute bottom-8 left-8 text-white pointer-events-none">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
              </div>
            )}

            <div className={service.image ? 'md:w-3/5 flex flex-col' : 'w-full'}>
              {!service.image && (
                <div className={`h-48 ${service.color} relative overflow-hidden`}>
                  <img 
                    src={service.image || (service.images ? service.images[0] : 'https://picsum.photos/seed/service/1200/800')} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${service.title}/1200/800` }}
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                onClick={onClose}
                className={`absolute top-6 right-6 w-10 h-10 rounded-full ${service.image && !service.images ? 'bg-white/10 hover:bg-white/20 text-slate-300' : 'bg-black/10 hover:bg-black/20 text-white'} flex items-center justify-center transition-colors z-10`}
              >
                <X size={20} />
              </button>
              
              <div className="p-8 sm:p-12 flex-1">
                <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                
                {service.images && service.images.length > 0 && (
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {service.images.map((img: string, idx: number) => (
                      <div key={idx} className="rounded-xl overflow-hidden shadow-md aspect-[3/4]">
                        <img 
                          src={img} 
                          alt={`${service.title} ${idx + 1}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${service.title}-${idx}/800/1200` }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-6 text-slate-300 leading-relaxed">
                  {service.details.map((paragraph: string, i: number) => (
                    <p key={i} className="text-[14px]">{paragraph}</p>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                    <span className="hidden sm:inline">Powered by Open Source & Linux</span>
                    <span className="sm:hidden">Open Source</span>
                  </div>
                  <button 
                    onClick={onClose}
                    className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-600 transition-all"
                  >
                    {lang === 'en' ? 'Close' : 'Cerrar'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const [activeService, setActiveService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { icon: <Layers size={32} />, color: 'bg-brand-500', ...t.items.visual3D },
    { icon: <Sparkles size={32} />, color: 'bg-amber-500', ...t.items.generativeArt },
    { icon: <Gamepad2 size={32} />, color: 'bg-emerald-500', ...t.items.games },
    { icon: <Code2 size={32} />, color: 'bg-accent-500', ...t.items.web },
  ];

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-white/10 group"
            >
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${s.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <button 
                onClick={() => {
                  setActiveService(s);
                  setIsModalOpen(true);
                }}
                className="text-brand-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                {lang === 'en' ? 'Learn More' : 'Saber Más'} <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={activeService} 
        lang={lang} 
      />
    </section>
  );
};

const About = ({ lang }: { lang: Language }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img 
                src="img/footer_img.jpg" 
                alt="Diverse team of professionals" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/about/1200/800' }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="text-3xl font-bold text-brand-600 mb-1">5+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {lang === 'en' ? 'Years of Excellence' : 'Años de Excelencia'}
              </p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t.title}</h2>
            
            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-brand-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 shadow-lg shadow-brand-500/30" />
                <h3 className="text-xl font-bold mb-3 text-brand-700">{t.historyTitle}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {t.historyText}
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-brand-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 shadow-lg shadow-brand-500/30" />
                <h3 className="text-xl font-bold mb-3 text-brand-700">{t.visionTitle}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {t.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = ({ t }: { t: any }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sanitizeInput = (input: string) => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
      _subject: "New Contact Form Submission",
      _template: "box",
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/spellmell@protonmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(sanitizedData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">{t.name}</label>
          <input 
            type="text" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">{t.email}</label>
          <input 
            type="email" 
            required 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-400">{t.message}</label>
        <textarea 
          required 
          rows={4} 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors resize-none"
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-14"
      >
        {status === 'submitting' ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : status === 'success' ? (
          '✓'
        ) : (
          t.send
        )}
      </button>
      
      {status === 'success' && (
        <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 bg-transparent text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{t.title}</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">{t.subtitle}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-lg font-medium">spellmell@protonmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-400">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-lg font-medium">Montevideo, Uruguay / Remote</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/spellmell.9" },
                { Icon: Instagram, href: "https://www.instagram.com/_spellmell_/" },
                { Icon: Twitter, href: "https://x.com/_spellmell_" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/spellmell/" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target={href !== "#" ? "_blank" : undefined} rel={href !== "#" ? "noopener noreferrer" : undefined} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center text-white">
            <YeksemenebStar />
          </div>
          <span className="font-bold tracking-tight font-display uppercase">spellmell</span>
        </div>
        
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} spellmell. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-700 relative z-10">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
