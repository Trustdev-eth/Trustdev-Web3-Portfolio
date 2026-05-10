import { motion } from 'framer-motion';
import { hasWalletConnect } from '../lib/wagmi';
import { SocialQuickLinks } from './SocialQuickLinks';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-zinc-950/40 via-acid/5 to-zinc-950 py-16 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,121,249,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[1.65rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Open for delivery-heavy engagements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base text-zinc-400 sm:mt-5 sm:text-lg"
        >
          Freelance, lead architect, or equity-backed builds across AI agents, LayerZero systems, and
          high-stakes DeFi.
        </motion.p>
        {!hasWalletConnect && (
          <p className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-400/5 px-3 py-3 text-left text-xs text-amber-100/90 sm:mt-6 sm:px-4 sm:text-sm">
            Add{' '}
            <code className="break-all font-mono text-acid">
              VITE_WALLETCONNECT_PROJECT_ID
            </code>{' '}
            to unlock WalletConnect inside RainbowKit (browser wallets still work today via the
            fallback connector).
          </p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="https://t.me/OnChainMee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-3xl bg-acid px-6 py-4 text-base font-semibold text-ink transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_22px_48px_-18px_rgba(45,212,191,0.65)] sm:min-w-[220px] sm:w-auto"
          >
            Telegram
          </a>
          <a
            href="https://x.com/OnChainMee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-3xl border border-white/15 px-6 py-4 text-base font-semibold text-white transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-white/40 hover:bg-white/5 sm:min-w-[220px] sm:w-auto"
          >
            X (Twitter)
          </a>
        </motion.div>
        <SocialQuickLinks variant="contact" />
      </div>
    </section>
  );
}
