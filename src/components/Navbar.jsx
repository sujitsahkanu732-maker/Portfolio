import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { INFO } from '../data/data';
import { useTheme } from '../App';

const LINKS = ['home', 'about', 'projects', 'contact'];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const { theme, toggle }       = useTheme();
  const isLight                 = theme === 'light';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    LINKS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const navBg = scrolled
    ? isLight
      ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-lg shadow-black/10'
      : 'bg-[#0a0d14]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30'
    : 'bg-transparent';

  const activeText  = isLight ? 'text-[var(--blue)]' : 'text-white';
  const mutedText   = isLight ? 'text-slate-500 hover:text-slate-900' : 'text-[var(--muted)] hover:text-white';
  const pillBg      = isLight ? 'bg-[var(--blue)]/10' : 'bg-white/[0.06]';
  const borderBtn   = isLight ? 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400' : 'border-white/10 text-[var(--muted)] hover:text-white hover:border-white/20';
  const drawerBg    = isLight ? 'bg-white/95 backdrop-blur-xl border-b border-black/[0.06]' : 'bg-[#0d1117]/95 backdrop-blur-xl border-b border-white/[0.06]';
  const drawerItem  = (id) => active === id
    ? `bg-[var(--blue)]/10 text-[var(--blue)]`
    : isLight ? 'text-slate-500 hover:text-slate-900 hover:bg-black/[0.04]' : 'text-[var(--muted)] hover:text-white hover:bg-white/[0.04]';

  return (
    <motion.header
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('home')} className="mono text-sm sm:text-base font-bold shrink-0 select-none cursor-pointer">
          <span className="text-[var(--blue)]">&lt;</span>
          <span className="grad-text">Sujit</span>
          <span className="text-[var(--muted)]">.Dev</span>
          <span className="text-[var(--blue)]">/&gt;</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(id => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative px-4 py-2 text-sm font-medium capitalize cursor-pointer transition-colors duration-200 rounded-lg ${
                active === id ? activeText : mutedText
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="pill"
                  className={`absolute inset-0 rounded-lg ${pillBg}`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all cursor-pointer ${borderBtn}`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isLight ? (
                <motion.span key="moon"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <HiMoon size={17} />
                </motion.span>
              ) : (
                <motion.span key="sun"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <HiSun size={17} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href={`mailto:${INFO.email}`}
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-semibold border border-[var(--blue)]/40 text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white hover:border-[var(--blue)] transition-all duration-200"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-all cursor-pointer ${borderBtn}`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <HiX size={18} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <HiMenu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`md:hidden relative z-50 ${drawerBg}`}
            >
              <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1">
                {LINKS.map(id => (
                  <button
                    key={id}
                    onClick={() => go(id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all cursor-pointer ${drawerItem(id)}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active === id ? 'bg-[var(--blue)]' : 'bg-current opacity-30'}`} />
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
                <a
                  href={`mailto:${INFO.email}`}
                  onClick={() => setOpen(false)}
                  className="mt-1 mb-1 py-3 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white hover:opacity-90 transition-opacity"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
