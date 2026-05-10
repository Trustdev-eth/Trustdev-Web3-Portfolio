import { motion } from 'framer-motion';

const bullets = [
  'AI agents & agentic on-chain workflows',
  'Cross-chain messaging (LayerZero V2) and bridge design',
  'Smart contracts, DeFi mechanics, NFT infra, and launchpads',
  'Solana, EVM (Base, ApeChain, Ethereum), and Bitcoin ordinals/DeFi',
  'Full-stack product delivery: design systems, APIs, observability, and security reviews',
];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/10 bg-zinc-950/40 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg"
        >
          I&apos;m a blockchain AI architect and full-stack Web3 engineer. I partner with founders
          and protocols to ship revenue-ready systems: agents that coordinate real on-chain actions,
          bridges that survive mainnet chaos, and dashboards humans actually enjoy using.
        </motion.p>
        <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
          {bullets.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.07 * i, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-200 transition-[border-color,transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:bg-acid/5 sm:rounded-2xl sm:px-5 sm:py-4 md:hover:-translate-y-1 md:hover:border-acid/40 md:hover:bg-acid/5"
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
