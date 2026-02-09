import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  label: string;
  href: string;
  primary?: boolean;
  icon?: React.ReactNode;
}

const CyberButton: React.FC<CyberButtonProps> = ({ label, href, primary, icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group flex items-center justify-center gap-4 w-full px-12 py-6 overflow-hidden rounded-sm transition-all duration-300
        ${primary 
          ? 'bg-emerald-500 text-black font-black' 
          : 'bg-[#0a0a0a] border-2 border-zinc-800 text-zinc-300 hover:border-emerald-500/50'
        }
      `}
    >
      {/* Background Hover Effect */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${primary ? 'bg-emerald-400' : 'bg-emerald-500/5'}
      `} />
      
      {/* Scanline line */}
      <div className="absolute inset-0 w-full h-[1px] bg-white/30 -translate-y-full group-hover:animate-[scan_1.5s_linear_infinite]" />

      <span className="relative z-10 mono uppercase tracking-[0.4em] text-sm flex items-center gap-3">
        {icon}
        {label}
      </span>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-emerald-500 transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-emerald-500 transition-colors" />
      
      {/* Glitch Overlay on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,1)_2px,rgba(0,0,0,1)_4px)]" />

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(800%); }
        }
      `}</style>
    </motion.a>
  );
};

export default CyberButton;
