import { motion } from 'framer-motion';

const tech = [
  'EVM',
  'Solana',
  'Base',
  'ApeChain',
  'Bitcoin Ordinals',
  'Solidity',
  'Rust / Anchor',
  'TypeScript',
  'Next.js',
  'LangGraph',
  'LayerZero V2',
  'ChromaDB',
  'Foundry',
  'Hardhat',
  'Supabase',
];

export function TechStack() {
  return (
    <section id="tech" className="relative py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Tech stack
        </motion.h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3">
          {tech.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: 0.03 * i,
                type: 'spring',
                stiffness: 320,
                damping: 22,
              }}
              whileHover={{
                y: -4,
                scale: 1.04,
                borderColor: 'rgba(45,212,191,0.55)',
                transition: { type: 'spring', stiffness: 400, damping: 24 },
              }}
              className="inline-flex rounded-full border border-white/10 bg-zinc-900/70 px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-inner shadow-white/5 sm:px-5 sm:py-2 sm:text-sm"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
