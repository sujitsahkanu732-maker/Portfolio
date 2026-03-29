import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaFacebook, FaInstagram, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import heroImg from '../assets/hero.png';
import { INFO } from '../data/data';

const SOCIALS = [
  { icon: <FaGithub />,    href: INFO.github,    label: 'GitHub' },
  { icon: <FaFacebook />,  href: INFO.facebook,  label: 'Facebook' },
  { icon: <FaInstagram />, href: INFO.instagram, label: 'Instagram' },
];

const STATS = [
  { value: '4+',  label: 'Projects' },
  { value: '3+',  label: 'Tech Stacks' },
  { value: '24h', label: 'Response' },
];

export default function Home() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center sec pt-28 overflow-hidden">

      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-600/4 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ── Left: Text ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mono text-sm text-[var(--teal)] mb-4 flex items-center gap-2"
          >
            <span className="w-8 h-px bg-[var(--teal)]" />
            Hello, world! I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-3"
          >
            {INFO.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="text-xl sm:text-2xl font-semibold mb-2 h-9"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 2200,
                'MERN Stack Engineer',  2000,
                'IT Student',           2000,
                'Open Source Builder',  2000,
              ]}
              wrapper="span" speed={55} repeat={Infinity}
              className="grad-text"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="mono text-sm text-[var(--muted)] mb-8"
          >
            "{INFO.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-[var(--muted)] text-sm leading-relaxed max-w-md mb-10"
          >
            BIT student at Texas College of Management and IT, Kathmandu. Specializing in MERN stack development and actively seeking internship opportunities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => go('contact')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all active:scale-95 min-h-[44px] cursor-pointer"
            >
              <HiMail size={16} /> Hire Me
            </button>
            <button
              onClick={() => go('projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-[var(--blue)]/40 transition-all hover:scale-105 active:scale-95 min-h-[44px] cursor-pointer"
            >
              View Projects <FaArrowRight size={12} />
            </button>
            <a
              href="/cv.pdf" download
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-[var(--muted)] font-semibold text-sm hover:text-white hover:border-white/20 transition-all hover:scale-105 active:scale-95 min-h-[44px]"
            >
              <FaDownload size={13} /> CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs text-[var(--muted)] mono">find me on</span>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--muted)] hover:text-[var(--blue)] hover:border-[var(--blue)]/30 transition-all hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-[var(--blue)]/25 scale-[1.12]"
            />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--blue)]/20 to-[var(--purple)]/20 blur-2xl scale-110" />
            {/* Photo */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-br from-[var(--blue)] via-[var(--purple)] to-[var(--teal)]">
              <img src={heroImg} alt="Sujit Sah" loading="lazy"
                className="w-full h-full rounded-full object-cover bg-[var(--surface)]"
              />
            </div>
            {/* Status badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-2 -right-2 glass px-3 py-2 rounded-xl border border-green-500/25 text-xs font-semibold text-green-400 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to Work
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm px-4"
      >
        <div className="glass rounded-2xl px-6 py-4 flex justify-around border border-white/5">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-extrabold grad-text">{s.value}</p>
              <p className="text-[10px] text-[var(--muted)] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
