export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ModuleItem {
  title: string;
  duration: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}