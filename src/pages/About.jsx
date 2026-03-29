import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  HiOutlineStatusOnline, HiOutlineAcademicCap, HiOutlineOfficeBuilding,
  HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiOutlineClock,
} from 'react-icons/hi';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import heroImg from '../assets/hero.png';
import { INFO, BIO, SKILLS, TIMELINE } from '../data/data';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';
import Badge from '../components/Badge';

const PERSONAL = [
  { icon: <HiOutlineStatusOnline />,   label: 'STATUS',      value: INFO.status,      cls: 'text-green-400' },
  { icon: <HiOutlineAcademicCap />,    label: 'DEGREE',      value: INFO.degree },
  { icon: <HiOutlineOfficeBuilding />, label: 'INSTITUTION', value: INFO.institution },
  { icon: <HiOutlineLocationMarker />, label: 'LOCATION',    value: INFO.location },
  { icon: <HiOutlineMail />,           label: 'EMAIL',       value: INFO.email,       cls: 'text-[var(--blue)]' },
  { icon: <HiOutlinePhone />,          label: 'PHONE',       value: INFO.phone },
  { icon: <HiOutlineClock />,          label: 'RESPONSE',    value: INFO.response },
];

const SOCIALS = [
  { icon: <FaGithub />,    href: INFO.github },
  { icon: <FaFacebook />,  href: INFO.facebook },
  { icon: <FaInstagram />, href: INFO.instagram },
];

const TRAITS = [
  { icon: '🎯', title: 'Goal-Oriented',   desc: 'I ship products, not just code.' },
  { icon: '📚', title: 'Always Learning', desc: 'CS fundamentals meet modern stacks.' },
  { icon: '🤝', title: 'Team Player',     desc: 'Communication is a core skill.' },
];

const DOT_COLOR = { blue: 'bg-blue-500', purple: 'bg-purple-500', teal: 'bg-teal-500' };
const BORDER_COLOR = {
  blue:   'hover:border-blue-500/30',
  purple: 'hover:border-purple-500/30',
  teal:   'hover:border-teal-500/30',
  orange: 'hover:border-orange-500/30',
  pink:   'hover:border-pink-500/30',
};

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="sec bg-[#0c0f1a]">
      <div className="max-w-6xl mx-auto">

        {/* HERO INTRO */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-20">
          <div className="flex-1">
            <Reveal>
              <SectionLabel>who i am</SectionLabel>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight">About Me</h1>
              <p className="text-[var(--muted)] text-base max-w-lg mb-7 leading-relaxed">
                IT student, full-stack developer, and lifelong learner building meaningful software from Kathmandu, Nepal.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {['4 Projects Deployed', 'MERN Stack', 'Open to Hire', 'Kathmandu, Nepal'].map((b, i) => (
                  <span key={b} className={`text-xs px-3 py-1 rounded-full border glass ${
                    i === 0 ? 'border-blue-500/40 text-blue-300' :
                    i === 1 ? 'border-purple-500/40 text-purple-300' :
                    i === 2 ? 'border-green-500/40 text-green-300' :
                              'border-teal-500/40 text-teal-300'
                  }`}>• {b}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Mini profile card */}
          <Reveal delay={0.15} className="glass rounded-2xl p-4 flex items-center gap-4 w-full lg:w-72 shrink-0">
            <img src={heroImg} alt="Sujit Sah" className="w-14 h-14 rounded-xl object-cover border border-white/10" />
            <div>
              <p className="text-white font-bold text-sm">{INFO.name}</p>
              <p className="text-[var(--muted)] text-xs">{INFO.role}</p>
              <span className="inline-flex items-center gap-1 mt-1 text-xs text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Available
              </span>
            </div>
          </Reveal>
        </div>

        {/* BACKGROUND + PHOTO + PERSONAL INFO */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20">
          <div className="flex-1">
            <Reveal>
              <SectionLabel>my story</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-7">Background & Motivation</h2>
            </Reveal>
            <div className="space-y-4 mb-10">
              {BIO.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TRAITS.map((t, i) => (
                <Reveal key={t.title} delay={0.1 + i * 0.08}>
                  <div className="glass rounded-xl p-4 hover:border-[var(--blue)]/25 transition-all">
                    <span className="text-2xl mb-2 block">{t.icon}</span>
                    <p className="text-white font-semibold text-sm mb-1">{t.title}</p>
                    <p className="text-[var(--muted)] text-xs">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full lg:w-80 shrink-0">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={heroImg} alt="Sujit Sah" loading="lazy" className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 text-xs glass border border-green-500/30 text-green-400 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Available
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-base">{INFO.name}</p>
                  <p className="text-slate-300 text-xs">{INFO.role}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-5">
                <p className="mono text-[10px] text-[var(--muted)] uppercase tracking-widest mb-4">Personal Info</p>
                <div className="space-y-3">
                  {PERSONAL.map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-[var(--blue)] mt-0.5 shrink-0 text-base">{item.icon}</span>
                      <div className="min-w-0">
                        <p className="mono text-[9px] text-[var(--muted)] uppercase tracking-widest">{item.label}</p>
                        <p className={`text-xs font-medium truncate ${item.cls || 'text-slate-300'}`}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-5 pt-4 border-t border-white/5">
                  {SOCIALS.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noreferrer"
                      className="flex-1 h-9 rounded-lg glass flex items-center justify-center text-[var(--muted)] hover:text-[var(--blue)] transition-colors text-sm">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <Reveal>
              <SectionLabel>technical skills</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Expertise</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[var(--muted)] text-xs max-w-xs sm:text-right">
                Technologies I've worked with professionally and in personal projects.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map((group, gi) => (
              <Reveal key={group.category} delay={gi * 0.07}>
                <div className={`glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${BORDER_COLOR[group.color]}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{group.icon}</span>
                    <p className="text-white font-semibold text-sm">{group.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map(tag => (
                      <Badge key={tag} label={tag} color={group.color} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <Reveal>
              <SectionLabel>journey</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience & Education</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[var(--muted)] text-xs max-w-xs sm:text-right">
                My path through academia and hands-on development.
              </p>
            </Reveal>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--blue)] via-[var(--purple)] to-[var(--teal)]" />
            <div className="flex flex-col gap-6">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="relative">
                    <div className={`absolute -left-[1.85rem] top-2 w-3 h-3 rounded-full ${DOT_COLOR[item.color] || 'bg-blue-500'} border-2 border-[#0c0f1a] ring-2 ring-white/10`} />
                    <div className={`glass rounded-2xl p-5 transition-all ${BORDER_COLOR[item.color]}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                        <h3 className="text-white font-bold text-base">{item.title}</h3>
                        <span className="mono text-[10px] px-2 py-1 rounded-full glass border border-white/10 text-[var(--muted)] shrink-0">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-[var(--blue)] text-xs font-medium mb-3">• {item.sub}</p>
                      <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} label={tag} color={item.color} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <Reveal className="flex flex-wrap justify-center gap-4 mt-16">
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all active:scale-95 min-h-[44px] cursor-pointer"
          >
            Let's Connect →
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 px-8 py-3 rounded-xl glass border border-white/10 text-slate-300 font-semibold text-sm hover:border-[var(--blue)]/40 hover:text-white transition-all hover:scale-105 active:scale-95 min-h-[44px] cursor-pointer"
          >
            View My Projects →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
