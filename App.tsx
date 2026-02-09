import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  CheckCircle2, 
  CreditCard,
  Zap,
  EyeOff,
  Database,
  Users
} from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';
import GlitchText from './components/GlitchText';
import CyberButton from './components/CyberButton';
import Features from './components/Features';
import Footer from './components/Footer';
import WorkingSeal from './components/WorkingSeal';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30">
      <MatrixBackground />
      
      {/* Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <div className="w-64 h-1 bg-zinc-900 overflow-hidden relative">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-emerald-500 shadow-[0_0_15px_#10b981]"
              />
            </div>
            <p className="mt-4 mono text-xs text-emerald-500 animate-pulse uppercase tracking-[0.2em]">
              Establishing Secure Tunnel...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Database className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter mono">
              TOR<span className="text-emerald-500">-</span>CARDS
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm mono text-zinc-400">
            <a href="#" className="hover:text-emerald-500 transition-colors uppercase tracking-widest">Market</a>
            <a href="#" className="hover:text-emerald-500 transition-colors uppercase tracking-widest">Methods</a>
            <a href="#" className="hover:text-emerald-500 transition-colors uppercase tracking-widest">Support</a>
            <div className="px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded text-emerald-500 text-[10px] uppercase font-bold">
              v9.1 Enterprise
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <WorkingSeal />

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
          >
            <GlitchText text="TOR-CARDS" />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed mono"
          >
            Elite access to non-VBV infrastructure. 
            Automated clearing, instant delivery, zero logs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="flex flex-col items-center justify-center gap-6 mb-32 w-full max-w-sm"
          >
            {/* First button: Redirects with placeholder link */}
            <CyberButton 
              label="cards-service" 
              href="https://placeholder-link-to-service.com" 
              primary 
              icon={<CreditCard className="w-5 h-5" />}
            />
            {/* Second button: Below with placeholder link */}
            <CyberButton 
              label="proof" 
              href="https://placeholder-link-to-proof.com" 
              icon={<Terminal className="w-5 h-5" />}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 w-full"
          >
            <div className="p-10 rounded-sm bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm group hover:border-emerald-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <Users />
              </div>
              <h3 className="text-4xl font-black mb-2 mono text-emerald-500">500+</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold">Trusted By People</p>
            </div>
            
            <div className="p-10 rounded-sm bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm group hover:border-emerald-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <Zap />
              </div>
              <h3 className="text-4xl font-black mb-2 mono text-emerald-500">100%</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold">Verified Success</p>
            </div>

            <div className="p-10 rounded-sm bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm group hover:border-emerald-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <Lock />
              </div>
              <h3 className="text-4xl font-black mb-2 mono text-emerald-500">2.5s</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold">Avg Response Time</p>
            </div>
          </motion.div>

          <Features />
          
          <div className="mt-40 mb-10 flex flex-col items-center">
             <motion.div 
                whileInView={{ scale: [0.9, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-4 px-8 py-4 border border-emerald-500/20 rounded-full bg-emerald-500/5 mb-8"
             >
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                <span className="mono text-emerald-500 text-sm font-bold tracking-widest uppercase">System Status: Fully Operational</span>
             </motion.div>
             <p className="mono text-zinc-600 text-[10px] tracking-[0.5em] uppercase">Security Clearance Level 4 Required</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;