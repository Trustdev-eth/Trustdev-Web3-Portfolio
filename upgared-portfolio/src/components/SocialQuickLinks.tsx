import { motion } from 'framer-motion';
import { profileLinks } from '../constants/profileLinks';

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

type Variant = 'contact' | 'footer' | 'nav' | 'navInline';

type Props = { variant: Variant; onNavigate?: () => void };

export function SocialQuickLinks({ variant, onNavigate }: Props) {
  if (variant === 'navInline') {
    return (
      <div className="hidden items-center gap-0.5 md:flex">
        <a
          href={profileLinks.github.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-acid"
          aria-label="GitHub"
        >
          <IconGitHub className="h-5 w-5" />
        </a>
        <a
          href={profileLinks.email.href}
          className="rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-acid"
          aria-label="Email Dillon"
        >
          <IconMail className="h-5 w-5" />
        </a>
        <a
          href={profileLinks.calendly.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-acid"
          aria-label="Book a 30 minute Calendly call"
        >
          <IconCalendar className="h-5 w-5" />
        </a>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-zinc-400">
        <a
          href={profileLinks.github.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-acid"
        >
          GitHub
        </a>
        <span className="text-zinc-600" aria-hidden>
          ·
        </span>
        <a href={profileLinks.email.href} className="transition-colors hover:text-acid">
          Email
        </a>
        <span className="text-zinc-600" aria-hidden>
          ·
        </span>
        <a
          href={profileLinks.calendly.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-acid"
        >
          Calendly
        </a>
      </div>
    );
  }

  if (variant === 'nav') {
    return (
      <div className="mt-3 border-t border-white/10 pt-3">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
          Connect
        </p>
        <div className="flex flex-col gap-0.5">
          <a
            href={profileLinks.github.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-200 active:bg-white/5"
            onClick={onNavigate}
          >
            <IconGitHub className="h-4 w-4 shrink-0 text-zinc-400" />
            GitHub
          </a>
          <a
            href={profileLinks.email.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-200 active:bg-white/5"
            onClick={onNavigate}
          >
            <IconMail className="h-4 w-4 shrink-0 text-zinc-400" />
            Gmail
          </a>
          <a
            href={profileLinks.calendly.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-200 active:bg-white/5"
            onClick={onNavigate}
          >
            <IconCalendar className="h-4 w-4 shrink-0 text-zinc-400" />
            Calendly · 30 min
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 grid w-full gap-3 sm:mt-10 sm:grid-cols-3"
    >
      <a
        href={profileLinks.github.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-100 transition-[border-color,background-color,color,transform] duration-300 hover:border-acid/40 hover:bg-acid/10 hover:text-acid"
      >
        <IconGitHub className="h-4 w-4 shrink-0 text-acid/80" />
        GitHub
      </a>
      <a
        href={profileLinks.email.href}
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-100 transition-[border-color,background-color,color,transform] duration-300 hover:border-acid/40 hover:bg-acid/10 hover:text-acid"
      >
        <IconMail className="h-4 w-4 shrink-0 text-acid/80" />
        Gmail
      </a>
      <a
        href={profileLinks.calendly.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-100 transition-[border-color,background-color,color,transform] duration-300 hover:border-acid/40 hover:bg-acid/10 hover:text-acid sm:col-span-1"
      >
        <IconCalendar className="h-4 w-4 shrink-0 text-acid/80" />
        Calendly
      </a>
    </motion.div>
  );
}
