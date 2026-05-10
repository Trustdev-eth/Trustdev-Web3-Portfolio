import { motion } from 'framer-motion';

const heroImg =
  'https://github.com/user-attachments/assets/b36977bf-f4c6-49bb-ba22-3ac516153abb';

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] min-h-screen items-center overflow-hidden pt-[calc(4.25rem+env(safe-area-inset-top))] md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.14),transparent_55%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:gap-14 sm:px-6 sm:py-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-acid/90 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            <span className="truncate sm:whitespace-normal">Shipping on-chain systems</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.35rem] font-extrabold leading-[0.98] tracking-tight text-white xs:text-5xl sm:text-6xl md:text-7xl"
          >
            Blockchain
            <span className="block bg-gradient-to-r from-acid via-teal-200 to-plasma bg-clip-text text-transparent">
              AI Architect
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg md:text-xl"
          >
            Solana • EVM (Ethereum, Base, ApeChain) • Bitcoin. Production-grade AI agents, LayerZero
            bridges, DeFi cores, and full-stack dApps—owned end to end.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex w-full flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-10 sm:gap-4"
          >
            <a
              href="https://t.me/OnChainMee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-3xl bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(45,212,191,0.55)] xs:flex-1 sm:w-auto sm:px-7 sm:text-base"
            >
              Message on Telegram
            </a>
            <a
              href="https://x.com/OnChainMee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-3xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-[transform,border-color,background-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-acid/50 hover:bg-acid/10 hover:text-acid xs:flex-1 sm:w-auto sm:px-7 sm:text-base"
            >
              Follow on X
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 md:order-2"
        >
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-acid/25 via-plasma/15 to-transparent blur-3xl sm:-inset-10 sm:rounded-[40px]" />
          <motion.div
            className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-2xl shadow-black/60 backdrop-blur sm:mx-0 sm:rounded-[28px] md:max-w-none"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            <img
              src={heroImg}
              alt="Unvault omnichain NFT bridge"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>
          <div className="absolute -bottom-3 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 text-sm shadow-xl backdrop-blur sm:-bottom-6 sm:left-auto sm:right-4 sm:px-4 sm:py-3 md:-right-2">
            <span className="font-display text-2xl font-bold text-acid sm:text-3xl">6</span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-white sm:text-xs">
                Chains live
              </p>
              <p className="truncate text-[10px] text-zinc-500 sm:text-[11px]">
                LayerZero V2 • production routes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
