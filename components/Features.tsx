
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Globe, CloudLightning, Fingerprint, EyeOff } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Non-VBV Bin",
      desc: "Top tier bins with high success rates for worldwide gateways."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      title: "Instant Delivery",
      desc: "Automatic dispatch system via encrypted API directly after purchase."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Worldwide Proxy",
      desc: "Matching SOCKS5 proxies included with every card purchase."
    },
    {
      icon: <CloudLightning className="w-6 h-6 text-emerald-500" />,
      title: "High Balance",
      desc: "Curated lists of premium cards with verified high-limit balances."
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-emerald-500" />,
      title: "Full Privacy",
      desc: "No logs, no tracking. We use bulletproof offshore hosting."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-emerald-500" />,
      title: "24/7 Support",
      desc: "Dedicated onion support ticket system for our elite clientele."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="p-8 text-left bg-zinc-900/20 border border-zinc-800 hover:border-emerald-500/30 transition-colors group"
        >
          <div className="mb-6 group-hover:rotate-12 transition-transform duration-300">
            {item.icon}
          </div>
          <h4 className="text-xl font-bold mb-3 mono">{item.title}</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
