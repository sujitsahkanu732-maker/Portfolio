import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { INFO } from '../data/data';

const LINKS = ['home', 'about', 'projects', 'contact'];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('home');

  /* ── scroll shadow ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* ── active section spy ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    LINKS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* ── close drawer on resize to desktop ── */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-2xl shadow-black/50' : 'bg-transparent'
      }`}
    >
      {/* ── Main bar ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="mono text-base sm:text-lg font-bold cursor-pointer shrink-0 select-none"
        >
          <span className="text-[var(--blue)]">&lt;</span>
          <span className="grad-text">Sujit</span>
          <span className="text-[var(--muted)]">.Dev</span>
          <span className="text-[var(--blue)]">/&gt;</span>
        </button>

        {/* ── Desktop links (center) ── */}
        <nav className="hidden md:flex items-center gap-0.5">
          {LINKS.map(id => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative px-4 py-2 text-sm font-medium capitalize cursor-pointer transition-colors duration-200 ${
                active === id ? 'text-white' : 'text-[var(--muted)] hover:text-white'
              }`}
            >
              {/* Animated underline */}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--purple)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* ── Right: Hire Me + hamburger ── */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`mailto:${INFO.email}`}
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border border-[var(--blue)]/50 text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white transition-all duration-200"
          >
            HIRE ME
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass border border-white/10 text-[var(--muted)] hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <HiX size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <HiMenu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden glass border-t border-white/6 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {LINKS.map(id => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`flex items-center gap-3 w-full text-left px-3 py-3.5 rounded-xl text-sm font-medium capitalize transition-all cursor-pointer ${
                    active === id
                      ? 'bg-[var(--blue)]/10 text-[var(--blue)] border border-[var(--blue)]/20'
                      : 'text-[var(--muted)] hover:text-white hover:bg-white/4'
                  }`}
                >
                  {/* Active dot */}
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                    active === id ? 'bg-[var(--blue)]' : 'bg-white/15'
                  }`} />
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  {active === id && (
                    <span className="ml-auto mono text-[10px] text-[var(--blue)]/60">active</span>
                  )}
                </button>
              ))}

              {/* Hire Me in mobile */}
              <a
                href={`mailto:${INFO.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 py-3 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white hover:opacity-90 transition-opacity"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
