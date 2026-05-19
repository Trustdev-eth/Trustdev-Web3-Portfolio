import { useCallback, useEffect, useState } from 'react';
import { profileLinks } from '../constants/profileLinks';
import { WalletControls } from './WalletControls';
import { SocialQuickLinks } from './SocialQuickLinks';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Tech' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/65">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4"
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={closeMenu}>
          <img
            src="/assets/logo.png"
            alt="T-rustdev"
            width={40}
            height={40}
            decoding="async"
            className="h-9 w-9 shrink-0 rounded-2xl object-cover shadow-lg shadow-acid/20 ring-1 ring-white/15 sm:h-10 sm:w-10"
          />
          <div className="min-w-0 truncate font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            T-rustdev
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors duration-300 ease-out hover:text-acid"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <SocialQuickLinks variant="navInline" />
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div className="nav-wallet-wrap max-w-[min(10.5rem,calc(100vw-8rem))] sm:max-w-none">
            <WalletControls />
          </div>
          <a
            href={profileLinks.telegram.href}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s build
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${menuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${menuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-[height,opacity] duration-300 ease-out md:hidden ${menuOpen ? 'pointer-events-auto max-h-[min(88vh,34rem)] opacity-100' : 'pointer-events-none max-h-0 overflow-hidden border-transparent opacity-0'}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-zinc-200 active:bg-white/5"
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}
          <a
            href={profileLinks.telegram.href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-ink"
            onClick={closeMenu}
          >
            Let&apos;s build on Telegram
          </a>
          <SocialQuickLinks variant="nav" onNavigate={closeMenu} />
        </nav>
      </div>
    </header>
  );
}
