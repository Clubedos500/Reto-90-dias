import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-brand-neon text-white shadow-[0_0_20px_rgba(112,0,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-brand-neon/50 text-brand-neon hover:bg-brand-neon/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};