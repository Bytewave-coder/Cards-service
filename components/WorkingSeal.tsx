import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const WorkingSeal: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.8, type: 'spring' }}
      className="inline-flex flex-col items-center gap-2 p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-xl backdrop-blur-md mb-12 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
    >
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-2 border-dashed border-emerald-500/50 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 text-emerald-500" />
        </div>
      </div>
      <div className="text-center">
        <div className="text-emerald-500 font-black text-xl mono leading-tight">100%</div>
        <div className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold">WORKING SITE</div>
      </div>
    </motion.div>
  );
};

export default WorkingSeal;