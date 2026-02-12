
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'beam';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#a8ff35] text-black hover:bg-[#b9ff5c] shadow-[0_0_20px_rgba(168,255,53,0.3)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/20 text-white hover:bg-white/10",
    beam: "bg-black text-white border border-white/10 group"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === 'beam' && (
        <>
          {/* Beam Border Animation */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-transparent via-[#a8ff35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_3s_linear_infinite]" 
                 style={{ maskImage: 'radial-gradient(circle, transparent 65%, black 67%)', WebkitMaskImage: 'radial-gradient(circle, transparent 65%, black 67%)' }} />
          </div>
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[#a8ff35]/0 group-hover:bg-[#a8ff35]/5 transition-colors duration-300" />
        </>
      )}
      <span className="relative z-10">{children}</span>
      
      {variant === 'beam' && (
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}} />
      )}
    </button>
  );
};
