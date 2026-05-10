import { lazy, Suspense } from 'react';
import { Web3Provider } from './components/Web3Provider';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { SocialQuickLinks } from './components/SocialQuickLinks';

const ThreeBackground = lazy(() =>
  import('./components/ThreeBackground').then((m) => ({ default: m.ThreeBackground })),
);

export default function App() {
  return (
    <Web3Provider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
        <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '120px 120px',
          }}
        />
        <div className="relative z-10">
          <Nav />
          <main>
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Contact />
          </main>
          <footer
            className="border-t border-white/10 px-4 py-8 text-center text-[11px] text-zinc-500 sm:py-10 sm:text-xs"
            style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
          >
            © {new Date().getFullYear()} OnChainMee • MIT License
            <SocialQuickLinks variant="footer" />
          </footer>
        </div>
      </div>
    </Web3Provider>
  );
}
