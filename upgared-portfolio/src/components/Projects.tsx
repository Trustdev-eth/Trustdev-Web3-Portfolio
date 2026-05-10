import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type ProjectCategory } from '../data/projects';

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'highlight', label: 'Highlights' },
  { id: 'evm', label: 'EVM' },
  { id: 'solana', label: 'Solana' },
  { id: 'bitcoin', label: 'Bitcoin' },
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all');

  const visible = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="relative border-t border-white/10 bg-zinc-950/35 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">
              Each card calls out exactly what I owned—protocol design, AI stack, and/or full product
              delivery.
            </p>
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 md:max-w-[min(100%,42rem)] md:justify-end [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`shrink-0 snap-start rounded-full border px-3.5 py-2 text-xs font-semibold transition-[background-color,border-color,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-4 sm:text-sm ${
                    active
                      ? 'border-acid/70 bg-acid/15 text-acid shadow-[0_0_35px_-12px_rgba(45,212,191,0.7)]'
                      : 'border-white/10 text-zinc-400 hover:-translate-y-0.5 hover:border-acid/40 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                whileHover={{
                  y: -10,
                  transition: { type: 'spring', stiffness: 260, damping: 26, mass: 0.85 },
                }}
                style={{ transformPerspective: 1200 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-[0_18px_50px_-40px_rgba(0,0,0,0.8)] transition-[box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:rounded-3xl hover:border-acid/35 hover:shadow-[0_30px_80px_-45px_rgba(45,212,191,0.35)]"
              >
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <motion.img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-acid backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-acid/90 sm:text-sm">{project.subtitle}</p>
                  <p className="mt-4 flex-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                    <span className="font-semibold text-zinc-200">What I built: </span>
                    {project.whatIBuilt}
                  </p>
                  <div className="mt-5 flex flex-col gap-2 xs:flex-row xs:flex-wrap sm:mt-6 sm:gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(255,255,255,0.45)] xs:flex-initial sm:rounded-2xl"
                      >
                        Live
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-[transform,border-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-acid/50 hover:text-acid xs:flex-initial sm:rounded-2xl"
                      >
                        Repository
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
