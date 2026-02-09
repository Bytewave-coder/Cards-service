
import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-emerald-500 opacity-0 group-hover:opacity-70"
        animate={{
          x: [0, -2, 2, -2, 0],
          y: [0, 1, -1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-rose-500 opacity-0 group-hover:opacity-70"
        animate={{
          x: [0, 2, -2, 2, 0],
          y: [0, -1, 1, -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default GlitchText;
