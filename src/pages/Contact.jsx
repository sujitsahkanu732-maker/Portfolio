import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker,
  HiOutlineClock, HiOutlineStatusOnline,
} from 'react-icons/hi';
import { FaGithub, FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { INFO } from '../data/data';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';

const INFO_CARDS = [
  { icon: <HiOutlineMail />,           label: 'Email',    value: INFO.email,    href: `mailto:${INFO.email}`,   note: 'Fastest response' },
  { icon: <HiOutlinePhone />,          label: 'Phone',    value: INFO.phone,    href: `tel:${INFO.phone}`,      note: 'Calls & WhatsApp' },
  { icon: <HiOutlineLocationMarker />, label: 'Location', value: INFO.location, href: null,                     note: 'Nepal' },
  { icon: <HiOutlineClock />,          label: 'Response', value: INFO.response, href: null,                     note: 'Usually same day' },
];

const SOCIALS = [
  { icon: <FaGithub />,    label: 'GitHub',    href: INFO.github,    color: 'hover:text-white hover:border-white/25' },
  { icon: <FaFacebook />,  label: 'Facebook',  href: INFO.facebook,  color: 'hover:text-blue-400 hover:border-blue-400/30' },
  { icon: <FaInstagram />, label: 'Instagram', href: INFO.instagram, color: 'hover:text-pink-400 hover:border-pink-400/30' },
];

const INP = 'w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[var(--muted)] focus:outline-none focus:border-[var(--blue)]/50 transition-colors min-h-[44px]';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="sec bg-[#0c0f1a]">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel>get in touch</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact Me</h2>
          <p className="text-[var(--muted)] text-sm max-w-xl mb-14">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: info ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Status banner */}
            <Reveal>
              <div className="glass rounded-2xl p-5 border border-green-500/15">
                <div className="flex items-center gap-2 mb-2">
                  <HiOutlineStatusOnline className="text-green-400 text-lg" />
                  <span className="text-green-400 font-semibold text-sm">Currently Available</span>
                </div>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  Open to internship and junior developer opportunities. Response time: {INFO.response}.
                </p>
              </div>
            </Reveal>

            {/* Info cards */}
            <div className="grid grid-cols-1 gap-3">
              {INFO_CARDS.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.07}>
                  <div className="glass rounded-xl p-4 flex items-center gap-3 hover:border-[var(--blue)]/25 transition-all">
                    <div className="w-9 h-9 rounded-lg bg-[var(--blue)]/10 flex items-center justify-center text-[var(--blue)] shrink-0 text-base">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mono text-[9px] text-[var(--muted)] uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xs font-medium text-slate-300 hover:text-[var(--blue)] transition-colors truncate block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs font-medium text-slate-300 truncate">{item.value}</p>
                      )}
                    </div>
                    <span className="text-[10px] text-[var(--muted)] shrink-0 hidden sm:block">{item.note}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Socials */}
            <Reveal delay={0.2}>
              <div className="glass rounded-2xl p-5">
                <p className="mono text-[10px] text-[var(--muted)] uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3">
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                      className={`flex-1 h-11 rounded-xl glass flex items-center justify-center text-[var(--muted)] text-lg border border-white/8 transition-all ${s.color}`}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: form ── */}
          <motion.form
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-2xl p-7 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className={INP} placeholder="Your Name" required value={form.name} onChange={set('name')} />
              <input type="email" className={INP} placeholder="Your Email" required value={form.email} onChange={set('email')} />
            </div>
            <input className={INP} placeholder="Subject" required value={form.subject} onChange={set('subject')} />
            <textarea
              className={`${INP} resize-none`} placeholder="Your Message" required rows={6}
              value={form.message} onChange={set('message')}
            />
            <button
              type="submit" disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 min-h-[44px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
              ) : status === 'sent' ? (
                '✅ Message Sent!'
              ) : (
                <><FaPaperPlane size={13} /> Send Message</>
              )}
            </button>
            <p className="text-[10px] text-[var(--muted)] text-center">
              Or email directly at <a href={`mailto:${INFO.email}`} className="text-[var(--blue)] hover:underline">{INFO.email}</a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
