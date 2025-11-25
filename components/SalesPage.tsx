import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Download, Play, Star, ChevronDown, ChevronUp, Calendar, Flame } from 'lucide-react';
import { TESTIMONIALS, FAQS, MODULES, BENEFITS } from '../constants';
import { Button } from './Button';

const SalesPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // SEO Schema Injection
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Entrena en Casa: Reto 90 Días",
      "description": "Sistema completo de transformación física de 12 semanas. Sin gimnasio, resultados reales.",
      "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "offers": {
        "@type": "Offer",
        "price": "9,90",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "342"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    }
  }, []);

  const handlePurchase = () => {
    navigate('/gracias');
  };

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-neon selection:text-brand-dark font-sans relative">
      
      {/* --- BACKGROUND EFFECTS SYSTEM --- */}
      
      {/* 1. Static Dark Base */}
      <div className="fixed inset-0 bg-[#030014] z-[-5]" />

      {/* 2. Radial Aurora Gradient (Top) */}
      <div className="fixed inset-0 z-[-4] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* 3. Moving Grid Pattern (Subtle) */}
      <div className="fixed inset-0 z-[-3] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-flow" />
      </div>

      {/* 4. Floating Particles (Stars) */}
      <div className="fixed inset-0 z-[-2] pointer-events-none">
         {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
         ))}
      </div>
      
      {/* 5. Noise Overlay (Texture) */}
      <div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 pointer-events-none"></div>

      {/* --- END BACKGROUND EFFECTS --- */}

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          {/* Spotlight Effect behind text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/5 border border-brand-neon/30 text-brand-neon text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
            </span>
            Nueva Edición 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9] drop-shadow-2xl">
            TRANSFORMA TU<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-brand-purple animate-pulse-slow">
              CUERPO EN 90 DÍAS
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
            El sistema progresivo de 12 semanas para construir músculo y quemar grasa desde tu salón. <span className="text-white font-medium">Sin mensualidades. Sin equipo costoso.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Button onClick={scrollToOffer} className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)]">
              DESCARGAR PLAN COMPLETO
            </Button>
            <div className="flex flex-col items-center sm:items-start group cursor-default">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-through decoration-brand-neon/50">€59.00</span>
                <span className="text-xs bg-brand-neon text-brand-dark font-bold px-2 py-0.5 rounded-sm group-hover:bg-white transition-colors">AHORRA 80%</span>
              </div>
              <span className="text-3xl font-bold text-white tracking-tight group-hover:text-brand-neon transition-colors duration-300">€9,90</span>
            </div>
          </div>

          {/* Hero Image - Enhanced Container */}
          <div className="relative mx-auto max-w-2xl group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             {/* Glow behind image */}
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-brand-purple rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-brand-dark">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 opacity-60"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" 
                  alt="Entrenamiento en casa" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                
                {/* Floating Badges */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                  <div className="glass p-3 rounded-xl border border-white/20 backdrop-blur-xl transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <p className="text-brand-neon font-bold text-xl font-mono text-glow">12</p>
                    <p className="text-gray-300 text-[10px] uppercase tracking-wider font-bold">Semanas</p>
                  </div>
                  <div className="glass p-3 rounded-xl border border-white/20 backdrop-blur-xl transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                    <p className="text-white font-bold text-xl font-mono">3</p>
                    <p className="text-gray-300 text-[10px] uppercase tracking-wider font-bold">Fases</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="beneficios" className="relative py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:border-brand-neon/30 hover:-translate-y-2">
                <div className="bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-brand-neon group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                    <benefit.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Breakdown (Phases) */}
      <section id="fases" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">TU RUTA DE <span className="text-brand-purple">12 SEMANAS</span></h2>
            <p className="text-gray-400 max-w-lg mx-auto">Un sistema periodizado científicamente. No hacemos siempre lo mismo; evolucionamos mes a mes.</p>
          </div>
          
          <div className="space-y-4">
            {MODULES.map((module, idx) => (
              <div key={idx} className="group relative glass-card hover:bg-brand-surface/80 rounded-xl p-6 transition-all duration-300 cursor-default hover:border-brand-neon/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                {/* Progress Bar Line Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-dark rounded-l-xl overflow-hidden">
                    <div className="h-full w-full bg-brand-neon transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-4">
                  <div className="flex items-start gap-5">
                    <div className="mt-1 bg-brand-dark p-3 rounded-lg text-brand-purple group-hover:text-brand-neon group-hover:bg-brand-neon/10 transition-all duration-300 border border-white/5 group-hover:border-brand-neon/20">
                      {idx < 3 ? <Calendar size={24} /> : <Flame size={24} />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-brand-neon transition-colors">{module.title}</h4>
                      <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-xl group-hover:text-gray-300">{module.description}</p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center">
                    <span className="inline-block bg-white/5 text-gray-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 group-hover:border-brand-neon/50 group-hover:text-white transition-all">
                      {module.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-16 border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group">
            
            {/* Animated Gradient Background inside card */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-neon/10 rounded-full blur-[80px] group-hover:bg-brand-neon/20 transition-all duration-700"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-black text-white">¿QUÉ RECIBES AL <br/><span className="text-brand-purple text-glow">INSCRIBIRTE?</span></h2>
                <div className="grid grid-cols-1 gap-4">
                    {[
                    "Plan de Entrenamiento 90 Días (PDF Interactivo)",
                    "Biblioteca de Videos de Ejercicios (HD)",
                    "Guía de Nutrición Flexible y Recetas",
                    "Tracker de Progreso en Excel",
                    "Acceso a la Comunidad Privada",
                    "Soporte Prioritario por Email"
                    ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark/40 border border-white/5 hover:border-brand-neon/30 transition-colors">
                        <div className="text-brand-neon">
                            <ShieldCheck size={20} />
                        </div>
                        <span className="text-gray-200 font-medium">{item}</span>
                    </div>
                    ))}
                </div>
                <Button onClick={scrollToOffer} variant="primary" className="mt-8 w-full md:w-auto shadow-[0_0_20px_rgba(112,0,255,0.4)]">
                    Obtener Acceso Instantáneo
                </Button>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-brand-purple blur-[100px] opacity-20 animate-pulse-slow"></div>
                    <img 
                    src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Mockup Digital" 
                    className="relative rounded-xl shadow-2xl border border-white/10 transform rotate-1 hover:rotate-0 transition-all duration-700 hover:scale-[1.02]"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-white mb-16">RESULTADOS <span className="text-brand-neon text-glow">REALES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-8 rounded-2xl relative border-t-4 border-t-brand-purple/50 hover:border-t-brand-neon transition-colors duration-300">
                <div className="flex gap-1 mb-6 text-brand-neon">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{t.content}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-purple/30" />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-brand-neon uppercase font-bold tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 md:p-12 border border-brand-neon/30 bg-gradient-to-br from-brand-neon/10 to-transparent text-center relative overflow-hidden backdrop-blur-md">
             <div className="absolute top-0 right-0 p-4 opacity-10 animate-float">
                 <ShieldCheck size={120} />
             </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Garantía Incondicional de 7 Días</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Descarga el material, revisa la planificación de los 3 meses. Si no sientes que vale 10 veces su precio, te devolvemos el dinero.
            </p>
            <Button onClick={scrollToOffer} variant="secondary" className="!bg-white !text-black hover:!bg-gray-200 hover:scale-105 transition-transform">
                Empezar Sin Riesgo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Dudas Frecuentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-neon/40">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium pr-8 transition-colors ${openFaq === index ? 'text-brand-neon' : 'text-white'}`}>{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-brand-neon shrink-0" /> : <ChevronDown className="text-gray-500 shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 bg-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="oferta" className="py-32 relative z-10 overflow-hidden">
        {/* Intense background glow for final section */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-neon/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-purple/20 blur-[120px] rounded-full"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            COMIENZA TU<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-white">TRANSFORMACIÓN HOY</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Tienes 90 días por delante. Puedes pasarlos como siempre, o puedes pasarlos construyendo el cuerpo que quieres. Tú eliges.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button onClick={handlePurchase} className="text-2xl px-16 py-8 shadow-[0_0_60px_rgba(112,0,255,0.4)] hover:shadow-[0_0_100px_rgba(0,240,255,0.8)] animate-pulse hover:animate-none hover:scale-105 transition-all duration-300">
              QUIERO EL RETO 90 DÍAS — €12
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wide uppercase mt-4">
              <ShieldCheck size={16} className="text-brand-neon" /> Acceso Inmediato • Pago Seguro • Soporte Incluido
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020204] py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Reto 90 Días. Todos los derechos reservados.
          </div>
          <div className="flex gap-8 text-sm text-gray-600 font-medium">
            <a href="#" className="hover:text-brand-neon transition-colors">Términos</a>
            <a href="#" className="hover:text-brand-neon transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-neon transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalesPage;