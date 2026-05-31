import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Target, FlaskConical, Users, BookOpen, ChevronRight, Star } from 'lucide-react';

const stats = [
  { value: '2,847', label: 'Active Students', icon: Users },
  { value: '94%', label: 'Mission Success Rate', icon: Target },
  { value: '312', label: 'Classified Programs', icon: Shield },
  { value: '47', label: 'Research Labs', icon: FlaskConical },
];

const features = [
  {
    icon: Users,
    title: 'Student Profiles',
    desc: 'Comprehensive dossiers on every enrolled individual — abilities, progress, threat assessments, and mission history.',
    path: '/students',
    color: 'text-[#00d4ff]',
    bg: 'bg-[#00d4ff]/10',
    border: 'border-[#00d4ff]/20',
  },
  {
    icon: Target,
    title: 'Training Programs',
    desc: 'Structured regimens designed to push extraordinary abilities to their absolute limits under controlled conditions.',
    path: '/training',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Shield,
    title: 'Power Classifications',
    desc: 'The definitive taxonomy of extraordinary human abilities — from Tier I anomalies to Omega-class phenomena.',
    path: '/powers',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: BookOpen,
    title: 'Mission Reports',
    desc: 'Declassified field operation summaries, outcome analyses, and after-action reviews from active deployments.',
    path: '/missions',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: FlaskConical,
    title: 'Research Laboratories',
    desc: 'Cutting-edge facilities studying the science behind extraordinary abilities and developing enhancement protocols.',
    path: '/labs',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
];

const recentActivity = [
  { time: '2 min ago', event: 'Student NOVA-7 completed Phase III kinetic training', type: 'success' },
  { time: '14 min ago', event: 'Mission BLACKTHORN marked COMPLETE — all operatives returned', type: 'success' },
  { time: '31 min ago', event: 'Lab 12-B: Anomalous energy signature detected — investigation ongoing', type: 'warning' },
  { time: '1 hr ago', event: 'New enrollment: Codename SPECTRE — Tier IV Psychic Classification', type: 'info' },
  { time: '2 hr ago', event: 'Training Program IRONVEIL updated — advanced combat module added', type: 'info' },
];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#050a14]" ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Background glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Classification badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-[#00d4ff] text-xs font-semibold uppercase tracking-widest">Classified — Level 5 Access</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-slate-100 mb-6 leading-none">
            APEX
            <br />
            <span className="gradient-text">ACADEMY</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            The world's foremost institution for identifying, training, and deploying individuals with extraordinary abilities.
          </p>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-12">
            Established 1962 · Classified Operations · Global Reach · Zero Tolerance for Failure
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/students"
              className="flex items-center gap-2 bg-[#00d4ff] text-[#050a14] font-bold px-8 py-3.5 rounded-lg hover:bg-[#00b8d9] transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              Access Student Files
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/powers"
              className="flex items-center gap-2 border border-[#00d4ff]/40 text-[#00d4ff] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#00d4ff]/10 transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              Power Classifications
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[#00d4ff]/10 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-5 h-5 text-[#00d4ff] mx-auto mb-3 opacity-70" />
                <div className="text-3xl lg:text-4xl font-black text-slate-100 mb-1">{value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <Star className="w-3 h-3 text-violet-400" />
            <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Academy Systems</span>
          </div>
          <h2 className="text-4xl font-black text-slate-100 mb-4">Command Center</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Full access to all classified academy systems. Navigate with your assigned clearance level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, path, color, bg, border }) => (
            <Link
              key={path}
              to={path}
              className={`group bg-[#0d1f3c] border ${border} rounded-xl p-6 hover:border-opacity-60 hover:bg-[#112244] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)]`}
            >
              <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-slate-100 font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
              <div className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${color}`}>
                Access System
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Live activity feed */}
      <section className="py-16 bg-[#0a1628] border-t border-[#00d4ff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-slate-100 font-bold text-xl">Live Activity Feed</h2>
            <span className="text-xs text-slate-500 uppercase tracking-widest ml-auto">Real-time</span>
          </div>
          <div className="space-y-3">
            {recentActivity.map(({ time, event, type }, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-[#0d1f3c] rounded-lg border border-[#00d4ff]/10">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  type === 'success' ? 'bg-emerald-400' :
                  type === 'warning' ? 'bg-amber-400' : 'bg-[#00d4ff]'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-300 text-sm">{event}</p>
                </div>
                <span className="text-slate-600 text-xs flex-shrink-0">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#00d4ff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-slate-100 font-black tracking-tight">APEX ACADEMY</span>
          </div>
          <p className="text-slate-600 text-xs uppercase tracking-widest">
            Classified · Est. 1962 · All Rights Reserved · Unauthorized Access Prosecuted
          </p>
        </div>
      </footer>
    </div>
  );
}
