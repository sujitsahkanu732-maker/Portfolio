import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { HiClock } from 'react-icons/hi';
import { PROJECTS } from '../data/data';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';
import Badge from '../components/Badge';

const FILTERS = ['All', 'API', 'Tool', 'Frontend'];

const CARD_COLOR = {
  blue:   'from-blue-600/15 to-blue-600/5   border-blue-500/15   hover:border-blue-500/35',
  purple: 'from-purple-600/15 to-purple-600/5 border-purple-500/15 hover:border-purple-500/35',
  teal:   'from-teal-600/15 to-teal-600/5   border-teal-500/15   hover:border-teal-500/35',
  orange: 'from-orange-600/15 to-orange-600/5 border-orange-500/15 hover:border-orange-500/35',
  pink:   'from-pink-600/15 to-pink-600/5   border-pink-500/15   hover:border-pink-500/35',
};

const BADGE_COLOR = {
  blue: 'blue', purple: 'purple', teal: 'teal', orange: 'orange', pink: 'pink',
};

export default function Projects() {
  const [active, setActive] = useState('All');

  const featured = PROJECTS.filter(p => p.featured);
  const filtered  = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="projects" className="sec">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel>what i've built</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Projects</h2>
          <p className="text-[var(--muted)] text-sm max-w-xl mb-12">
            A collection of things I've built — from full-stack apps to frontend templates.
          </p>
        </Reveal>

        {/* ── Featured ── */}
        {featured.length > 0 && (
          <div className="mb-14">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="mono text-xs text-[var(--muted)] uppercase tracking-widest">Featured Project</span>
              </div>
            </Reveal>
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <div className={`glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${CARD_COLOR[p.color]} border transition-all duration-300 hover:-translate-y-1 mb-5`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{p.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-xl">{p.title}</h3>
                          <span className="mono text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400">
                            Featured
                          </span>
                        </div>
                        <span className="mono text-[10px] px-2 py-0.5 rounded-full glass border border-white/10 text-[var(--muted)]">
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass border border-white/10 text-xs text-[var(--muted)] hover:text-white transition-colors min-h-[36px]">
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white text-xs font-semibold hover:opacity-90 transition-opacity min-h-[36px]">
                          <FaExternalLinkAlt size={11} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <Badge key={t} label={t} color={BADGE_COLOR[p.color]} />)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* ── Filter tabs ── */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map(f => (
              <button
                key={f} onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 min-h-[40px] cursor-pointer ${
                  active === f
                    ? 'bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white'
                    : 'glass border border-white/10 text-[var(--muted)] hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── Cards grid ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id} layout
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }} transition={{ delay: i * 0.06 }}
                className={`glass rounded-2xl overflow-hidden bg-gradient-to-br ${CARD_COLOR[p.color]} border transition-all duration-300 hover:-translate-y-2 flex flex-col`}
              >
                {/* Card header */}
                <div className="h-36 flex items-center justify-center relative">
                  <span className="text-5xl">{p.emoji}</span>
                  {p.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] glass border border-orange-500/25 text-orange-400 px-2 py-1 rounded-full">
                      <HiClock size={10} /> {p.status}
                    </div>
                  )}
                  {p.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 text-[10px] glass border border-yellow-400/25 text-yellow-400 px-2 py-1 rounded-full">
                      <FaStar size={9} /> Featured
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold text-base leading-snug">{p.title}</h3>
                    <span className="mono text-[10px] px-2 py-0.5 rounded-full glass border border-white/10 text-[var(--muted)] shrink-0">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-[var(--muted)] text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map(t => <Badge key={t} label={t} color={BADGE_COLOR[p.color]} />)}
                  </div>
                  <div className="flex gap-3 pt-3 border-t border-white/5">
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-white transition-colors min-h-[36px]">
                        <FaGithub size={13} /> GitHub
                      </a>
                    ) : (
                      <span className="text-xs text-[var(--muted)]/40 min-h-[36px] flex items-center">No repo yet</span>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--blue)] transition-colors min-h-[36px] ml-auto">
                        <FaExternalLinkAlt size={11} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
