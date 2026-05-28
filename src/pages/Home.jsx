import { Link } from 'react-router-dom';
import { Orbit, Zap, Globe, ArrowRight, Activity, Cpu, ShieldAlert } from 'lucide-react';

const StatItem = ({ value, label }) => (
  <div className="flex flex-col gap-1">
    <div className="font-mono text-2xl md:text-3xl font-bold text-white">{value}</div>
    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
  </div>
);

const PillarCard = ({ icon: Icon, index, title, subtitle, description, to }) => (
  <Link
    to={to}
    className="group flex flex-col gap-6 p-8 md:p-10 transition-all duration-300"
    style={{
      backgroundColor: '#0a0a0a',
      border: '1px solid #262626',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = '#3a3a3a'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#262626'; }}
  >
    <div className="flex items-start justify-between">
      <div
        className="w-10 h-10 flex items-center justify-center"
        style={{ border: '1px solid #262626' }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest">
        {String(index).padStart(2, '0')}
      </span>
    </div>
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
        {subtitle}
      </div>
      <h3 className="font-mono text-base uppercase tracking-wider text-white font-semibold mb-3">
        {title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="flex items-center gap-2 mt-auto">
      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors duration-200">
        Explore
      </span>
      <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition-all duration-200 group-hover:translate-x-1" />
    </div>
  </Link>
);

export default function Home() {
  return (
    <div style={{ backgroundColor: '#050505' }}>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex" style={{ borderBottom: '1px solid #262626' }}>
        {/* Left panel — 60% */}
        <div
          className="relative z-10 flex flex-col justify-between w-full lg:w-[60%] px-6 md:px-12 lg:px-16 py-16 lg:py-24"
          style={{ borderRight: '1px solid #262626' }}
        >
          {/* Top label */}
          <div className="flex items-center gap-3">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              style={{ animation: 'telemetry-pulse 2s ease-in-out infinite' }}
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              Commercial Fusion — Operational Phase III
            </span>
          </div>

          {/* Main title */}
          <div className="flex flex-col gap-8 my-auto py-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-6">
                Est. 2019 — Geneva, Switzerland
              </div>
              <h1
                className="font-mono font-black uppercase leading-none text-white"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
              >
                Ignition
                <br />
                <span style={{ color: '#E5E5E5' }}>Dynamics</span>
              </h1>
              <div
                className="mt-4 font-mono text-sm uppercase tracking-widest text-neutral-400"
                style={{ letterSpacing: '0.4em' }}
              >
                The Fusion Era
              </div>
            </div>

            <div style={{ borderLeft: '2px solid #262626', paddingLeft: '1.5rem' }}>
              <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
                We are engineering the post-carbon civilization. Through magnetic confinement, inertial fusion, and magneto-inertial hybrid systems, Ignition Dynamics delivers commercial fusion power at planetary scale — clean, limitless, and permanent.
              </p>
            </div>

            {/* Physics formula */}
            <div
              className="p-4 font-mono text-xs text-neutral-500"
              style={{ border: '1px solid #1a1a1a', backgroundColor: '#0a0a0a' }}
            >
              <div className="text-neutral-700 text-[10px] uppercase tracking-widest mb-2">
                Lawson Criterion — Ignition Threshold
              </div>
              <div className="text-neutral-300">
                n·τ<sub>E</sub> ≥ 1.5 × 10²⁰ m⁻³·s &nbsp;|&nbsp; T<sub>i</sub> ≥ 10 keV &nbsp;|&nbsp; Q &gt; 1
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/reactors"
                className="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-200"
              >
                Enter Reactor Hub
              </Link>
              <Link
                to="/contact"
                className="font-mono text-xs uppercase tracking-widest px-8 py-4 text-white transition-all duration-200"
                style={{ border: '1px solid #262626' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#262626'; }}
              >
                Request Grid Access
              </Link>
            </div>
          </div>

          {/* Bottom stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            style={{ borderTop: '1px solid #262626' }}
          >
            <StatItem value="847 MW" label="Net Output" />
            <StatItem value="Q = 8.4" label="Fusion Gain" />
            <StatItem value="12.4 T" label="Peak Field" />
            <StatItem value="150M °C" label="Plasma Temp" />
          </div>
        </div>

        {/* Right panel — 40% — vibrant image */}
        <div className="hidden lg:block lg:w-[40%] relative scan-overlay img-zoom">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=90&fit=crop"
            alt="Tokamak plasma core — glowing fusion reactor interior"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.9) saturate(1.3)' }}
          />
          {/* Gradient fade to black on left edge */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #050505 0%, transparent 20%)',
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #050505 0%, transparent 30%)',
            }}
          />
          {/* Telemetry overlay */}
          <div className="absolute top-8 right-8 flex flex-col gap-2">
            {[
              { label: 'PLASMA TEMP', val: '1.5 × 10⁸ K' },
              { label: 'CONFINEMENT', val: 'τ_E = 3.2 s' },
              { label: 'BETA VALUE', val: 'β = 0.034' },
            ].map(({ label, val }) => (
              <div
                key={label}
                className="px-3 py-2"
                style={{ backgroundColor: 'rgba(5,5,5,0.85)', border: '1px solid #262626' }}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">{label}</div>
                <div className="font-mono text-xs text-white">{val}</div>
              </div>
            ))}
          </div>
          {/* Bottom label */}
          <div
            className="absolute bottom-8 left-8 right-8 px-4 py-3"
            style={{ backgroundColor: 'rgba(5,5,5,0.85)', border: '1px solid #262626' }}
          >
            <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-600 mb-1">
              Live Feed — Daedalus Tokamak / Core Chamber A
            </div>
            <div className="font-mono text-xs text-neutral-300">
              D-T Plasma Burn · Magnetic Confinement Active · Pulse #4,821
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL PILLARS ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24" style={{ borderBottom: '1px solid #262626' }}>
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-3">
              Core Technology Pillars
            </div>
            <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-wider text-white font-bold">
              Three Paths to Ignition
            </h2>
          </div>
          <Link
            to="/reactors"
            className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors duration-200"
          >
            Full Reactor Hub <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: '1px solid #262626' }}>
          <div style={{ borderRight: '1px solid #262626' }}>
            <PillarCard
              icon={Orbit}
              index={1}
              subtitle="Magnetic Confinement"
              title="Tokamak Systems"
              description="Superconducting toroidal field coils generating 12.4 Tesla magnetic fields to confine 150-million-degree D-T plasma in a stable, self-sustaining burn configuration."
              to="/reactors"
            />
          </div>
          <div style={{ borderRight: '1px solid #262626' }}>
            <PillarCard
              icon={Zap}
              index={2}
              subtitle="Inertial Confinement"
              title="Laser Array Systems"
              description="192-beam petawatt laser arrays delivering 1.8 MJ of UV energy onto gold hohlraum capsules within 20-nanosecond implosion windows, achieving thermonuclear ignition."
              to="/reactors"
            />
          </div>
          <div>
            <PillarCard
              icon={Globe}
              index={3}
              subtitle="Hybrid Frontier"
              title="Global Grid & Tritium"
              description="Magneto-inertial fusion combined with lithium-6 tritium breeding blankets and direct-drive grid integration, enabling scalable, cost-effective commercial power delivery."
              to="/reactors"
            />
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24" style={{ borderBottom: '1px solid #262626' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-4">
              Mission Directive
            </div>
            <h2
              className="font-mono font-bold uppercase text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.01em' }}
            >
              Powering Civilization
              <br />
              Beyond Carbon
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              The global energy crisis demands a permanent solution. Fossil fuels are finite. Renewables are intermittent. Nuclear fission generates long-lived waste. Fusion is the only energy source that is simultaneously limitless, clean, and safe — and we have achieved it.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Our Daedalus Tokamak complex in Geneva has sustained plasma burn for 312 consecutive seconds at Q = 8.4, delivering net energy to the European grid. This is not a laboratory experiment. This is commercial fusion power.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="font-mono text-xs uppercase tracking-widest px-6 py-3 text-white transition-all duration-200"
                style={{ border: '1px solid #262626' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#262626'; }}
              >
                View Telemetry Gallery
              </Link>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid #262626' }}>
            {[
              { icon: Activity, label: 'Plasma Duration', value: '312 s', sub: 'Continuous burn record' },
              { icon: Zap, label: 'Net Energy Gain', value: 'Q = 8.4', sub: 'Above breakeven threshold' },
              { icon: Cpu, label: 'Reactor Sites', value: '3 Active', sub: 'Geneva · Seoul · Austin' },
              { icon: ShieldAlert, label: 'Safety Record', value: '0 Events', sub: 'Zero critical incidents' },
            ].map(({ icon: Icon, label, value, sub }, i) => (
              <div
                key={label}
                className="p-8 flex flex-col gap-4"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid #262626' : 'none',
                  borderBottom: i < 2 ? '1px solid #262626' : 'none',
                }}
              >
                <Icon className="w-5 h-5 text-neutral-600" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-1">{label}</div>
                  <div className="font-mono text-xl font-bold text-white">{value}</div>
                  <div className="font-mono text-[10px] text-neutral-600 mt-1">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL GRID BANNER ── */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid #262626' }}>
        <div className="relative h-64 md:h-80 img-zoom">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85&fit=crop"
            alt="Global energy grid — planetary scale power infrastructure"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) saturate(1.4)' }}
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-4">
              Global Grid Deployment — Phase III
            </div>
            <h2 className="font-mono text-2xl md:text-4xl uppercase tracking-wider text-white font-bold mb-6">
              47 Nations. One Grid. Zero Carbon.
            </h2>
            <Link
              to="/contact"
              className="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-200"
            >
              Request Power Allocation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
