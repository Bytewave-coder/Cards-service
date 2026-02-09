import React from 'react';
import { Shield, Terminal, ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-zinc-900 bg-[#020202] pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <Shield className="text-black w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter mono uppercase">TOR-CARDS</span>
            </div>
            <p className="text-zinc-600 text-sm max-w-md mb-8 leading-relaxed mono">
              Encrypted marketplace operating under strictly anonymous nodes. 
              We provide the tools; you provide the vision. Established 2018.
            </p>
            <div className="flex items-center gap-4 text-zinc-700 text-[10px] mono uppercase tracking-[0.2em]">
                <ShieldAlert className="w-3 h-3" />
                Proceed with caution. External connections tracked.
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-8 mono text-xs uppercase tracking-[0.3em]">Access Points</h5>
            <ul className="space-y-4 text-zinc-500 text-sm mono">
              <li><a href="#" className="hover:text-emerald-500 transition-colors uppercase">.Onion Portal</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors uppercase">Mirror A</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors uppercase">Mirror B</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 mono text-xs uppercase tracking-[0.3em]">Protocol</h5>
            <ul className="space-y-4 text-zinc-500 text-sm mono">
              <li><a href="#" className="hover:text-emerald-500 transition-colors uppercase">Escrow Info</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors uppercase">API Keys</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors uppercase">PGP Key</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-16 border-t border-zinc-900/50 gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-zinc-600 text-[10px] mono uppercase tracking-[0.4em]">
              © 2024 TOR-CARDS DEEPNET INFRASTRUCTURE
            </p>
            <p className="text-zinc-800 text-[9px] mono uppercase tracking-[0.2em]">
              Auth Hash: 0x8192BF8271CC001A
            </p>
          </div>
          
          <div className="flex items-center gap-10">
            {/* Professional High-Fidelity Visa Logo */}
            <div className="flex flex-col items-center gap-2">
                <svg className="h-5 w-auto" viewBox="0 0 100 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.1,0.6h-5.2c-1.2,0-2.2,0.7-2.7,1.8l-9.5,22.7l6.5,0l1.3-3.6h8l0.8,3.6h5.7L40.1,0.6z M32.6,16.5l3.2-8.8l1.8,8.8H32.6z M20.9,0.6h-6.2l-9.1,20c-0.6,1.4-1.8,3.2-3.6,4.5H2c-0.1,0.4-0.1,0.8,0,1.2l6.4,0c1.4,0,2.6-0.9,3.1-2.2L22.2,0.6H20.9z M61.6,12.4c0-3.1-4.3-3.4-4.3-4.9c0-0.5,0.4-1,1.3-1c1.6,0,3.3,0.7,3.3,0.7l0.6-5.1c-0.9-0.4-2.6-0.7-4.4-0.7c-4.7,0-7.9,2.5-7.9,6.1c0,4.8,6.6,5.1,6.6,7.7c0,0.8-0.9,1.4-2.2,1.4c-2,0-3.6-1.1-3.6-1.1l-0.7,5.3c1.3,0.6,3.6,1.1,5.6,1.1C60.5,25.7,61.6,23.1,61.6,12.4z M77.1,0.6h-5l-8.9,25.1l6.1,0l8.9-25.1H77.1z" fill="#FFFFFF" />
                  <path d="M40.1,0.6h-5.2c-1.2,0-2.2,0.7-2.7,1.8l-9.5,22.7l6.5,0l1.3-3.6h8l0.8,3.6h5.7L40.1,0.6z" fill="#00579F" fillOpacity="0.1" />
                </svg>
                <span className="text-[8px] mono text-zinc-700 font-bold">VISA VERIFIED</span>
            </div>
            
            {/* Professional High-Fidelity Mastercard Logo */}
            <div className="flex flex-col items-center gap-2">
                <svg className="h-8 w-auto" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="30" r="28" fill="#EB001B" />
                  <circle cx="65" cy="30" r="28" fill="#F79E1B" />
                  <path d="M50,4.5c-7.1,6.8-11.5,16.4-11.5,25.5s4.4,18.7,11.5,25.5c7.1-6.8,11.5-16.4,11.5-25.5S57.1,11.3,50,4.5z" fill="#FF5F00" />
                </svg>
                <span className="text-[8px] mono text-zinc-700 font-bold">MASTERCARD SECURE</span>
            </div>

            <div className="h-10 w-[1px] bg-zinc-900 mx-2" />

            <div className="flex items-center gap-3 bg-zinc-900/40 px-4 py-2 rounded-sm border border-zinc-800">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-bold text-zinc-400 mono tracking-widest uppercase">Nodes Online: 42</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;