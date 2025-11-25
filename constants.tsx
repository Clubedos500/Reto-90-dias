import { Testimonial, FaqItem, ModuleItem, Benefit } from './types';
import { 
  Zap, 
  Clock, 
  Home, 
  ShieldCheck, 
  Smartphone, 
  Dumbbell,
  CheckCircle2,
  Calendar,
  Trophy
} from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Javier R.",
    role: "Perdió 12kg en 90 días",
    content: "Al principio pensé que 3 meses sería mucho tiempo, pero el programa se pasa volando. La fase 2 es dura pero ahí fue donde vi el mayor cambio. ¡Mis abdominales por fin se ven!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Marta S.",
    role: "Madre trabajadora",
    content: "Lo mejor es que no necesito ir al gym. En 90 días he transformado mi cuerpo usando solo mi salón. La progresión semana a semana es perfecta para no estancarse.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Roberto G.",
    role: "Ex-sedentario",
    content: "Empecé sin poder hacer una flexión. Al terminar la Fase 3, me siento más fuerte que cuando tenía 20 años. Este sistema de 12 semanas funciona de verdad.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Necesito equipo para los 90 días?",
    answer: "No es obligatorio. Las Fases 1 y 2 son puramente con peso corporal. Para la Fase 3 (Definición) recomendamos un par de mancuernas o botellas de agua llenas de arena para maximizar resultados, pero damos alternativas sin equipo."
  },
  {
    question: "¿Cuánto tiempo diario necesito?",
    answer: "El programa está diseñado para durar entre 25 y 35 minutos al día, incluyendo calentamiento. Es un poco más intenso que un plan de 20 minutos, pero los resultados en 90 días son exponenciales."
  },
  {
    question: "¿Qué pasa si me pierdo un día?",
    answer: "El calendario es flexible. Si fallas un día, simplemente retomas donde lo dejaste. Lo importante es la consistencia a lo largo de las 12 semanas, no la perfección."
  },
  {
    question: "¿El pago es mensual o único?",
    answer: "Es un pago único. Pagas una vez y tienes acceso de por vida a los 3 meses de entrenamiento, las actualizaciones futuras y el soporte por correo."
  },
  {
    question: "¿Es apto para principiantes absolutos?",
    answer: "Sí. El Mes 1 es la 'Fase de Adaptación'. Empezamos suave para preparar tus articulaciones y técnica antes de subir la intensidad en los meses 2 y 3."
  },
  {
    question: "¿Tengo garantía si no veo resultados?",
    answer: "Absolutamente. Tienes 7 días para probar el material. Si ves que el enfoque de 90 días no es para ti, te devolvemos el dinero sin preguntas."
  }
];

export const MODULES: ModuleItem[] = [
  {
    title: "Mes 1: Adaptación y Fundamentos",
    duration: "Semanas 1-4",
    description: "Acondicionamiento metabólico, corrección de postura y preparación de articulaciones. Construye la base."
  },
  {
    title: "Mes 2: Hipertrofia y Fuerza",
    duration: "Semanas 5-8",
    description: "Aumentamos el volumen y la intensidad. Aquí es donde construyes músculo real y aceleras el metabolismo basal."
  },
  {
    title: "Mes 3: Definición Extrema (Burn)",
    duration: "Semanas 9-12",
    description: "Entrenamientos tipo HIIT y circuitos metabólicos diseñados para quemar la grasa rebelde y revelar el músculo ganado."
  },
  {
    title: "Bonus: Guía de Nutrición 90 Días",
    duration: "Recurso PDF",
    description: "No es una dieta estricta, es un sistema de alimentación por fases para acompañar tu entrenamiento."
  },
  {
    title: "Bonus: Tracker de Progreso",
    duration: "Excel/Sheets",
    description: "Hoja de cálculo automatizada para registrar tus medidas, peso y récords personales cada semana."
  },
  {
    title: "Sesiones de Recuperación Activa",
    duration: "Domingos",
    description: "Rutinas de yoga y movilidad para acelerar la recuperación y evitar lesiones durante el reto."
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Plan Estructurado 12 Semanas",
    description: "Olvídate de improvisar. Sabrás exactamente qué hacer cada día durante 3 meses.",
    icon: Calendar
  },
  {
    title: "Resultados Sostenibles",
    description: "A diferencia de los retos cortos, 90 días es el tiempo necesario para crear hábitos reales.",
    icon: Trophy
  },
  {
    title: "Entrena en Casa",
    description: "Ahorra tiempo y dinero. Convierte tu salón en tu centro de transformación personal.",
    icon: Home
  },
  {
    title: "Progresión Inteligente",
    description: "El sistema ajusta la dificultad cada 4 semanas para evitar estancamientos.",
    icon: Zap
  }
];