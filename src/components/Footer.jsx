import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaInstagram, FaArrowUp, FaHeart } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { INFO } from '../data/data';

const LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact' },
];

const SOCIALS = [
  { icon: <FaGithub />,    href: INFO.github,    label: 'GitHub' },
  { icon: <FaFacebook />,  href: INFO.facebook,  label: 'Facebook' },
  { icon: <FaInstagram />, href: INFO.instagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0f1a] border-t border-white/5 pt-14 pb-6 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="mono text-xl font-bold mb-3">
              <span className="grad-text">&lt;sujit</span>
              <span className="text-[var(--teal)]">.dev</span>
              <span className="grad-text">/&gt;</span>
            </p>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 max-w-xs">
              {INFO.tagline} Focused on building polished full-stack applications.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] mb-1">
              <HiOutlineMail className="text-[var(--blue)]" />
              <a href={`mailto:${INFO.email}`} className="hover:text-[var(--blue)] transition-colors">{INFO.email}</a>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <HiOutlineLocationMarker className="text-[var(--blue)]" />
              <span>{INFO.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mono text-[10px] text-[var(--muted)] uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}
                    className="text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors capitalize cursor-pointer flex items-center gap-1.5">
                    <span className="text-[var(--blue)] text-xs">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mono text-[10px] text-[var(--muted)] uppercase tracking-widest mb-4">Connect</p>
            <p className="text-[var(--muted)] text-xs leading-relaxed mb-5">
              Open to internship and junior developer opportunities. Available for collaboration and project discussions.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--muted)] hover:text-[var(--blue)] hover:border-[var(--blue)]/25 transition-all hover:scale-110">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted)] text-xs flex items-center gap-1">
            © {new Date().getFullYear()} {INFO.name}. Built with <FaHeart className="text-pink-500 text-[10px]" /> in Kathmandu.
          </p>
          <p className="text-[var(--muted)] text-xs mono">Designed & developed by Sujit Sah</p>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--blue)] to-[var(--purple)] flex items-center justify-center text-white hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
