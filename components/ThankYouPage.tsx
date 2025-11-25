import React from 'react';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Background blobs similar to SalesPage but calmer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-lg w-full glass rounded-3xl p-8 md:p-12 text-center border border-brand-neon/20 shadow-2xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-[bounce_2s_infinite]">
                <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                ¡Estás dentro!
            </h1>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
                Tu acceso al <strong>Reto 90 Días</strong> está confirmado. Prepárate para empezar tu transformación.
            </p>

            <div className="bg-brand-surface border border-white/10 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-white font-bold mb-3 border-b border-white/5 pb-2">Tu Pack Digital Incluye:</h3>
                <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-neon"></span> 
                        Plan de Entrenamiento (Fases 1, 2 y 3)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-neon"></span> 
                        Guía de Nutrición Flexible
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-neon"></span> 
                        Tracker de Progreso (Excel)
                    </li>
                </ul>
            </div>

            <Button 
                variant="primary" 
                fullWidth 
                onClick={() => alert("Simulación: Descargando Pack_Reto_90_Dias.zip")}
                className="flex items-center justify-center gap-2 mb-4 font-bold"
            >
                <Download size={20} />
                Descargar Materiales (.ZIP)
            </Button>
            
            <p className="text-xs text-gray-600 mb-6">
                Te hemos enviado también el enlace de acceso a tu correo.
            </p>

            <Link to="/" className="inline-flex items-center gap-2 text-brand-neon hover:text-white transition-colors text-sm font-semibold">
                Volver al inicio <ArrowRight size={16} />
            </Link>
        </div>
    </div>
  );
};

export default ThankYouPage;