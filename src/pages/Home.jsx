import { Link } from 'react-router-dom';
import { Orbit, Zap, Globe, ArrowRight, Activity, Cpu, ShieldAlert, Radio } from 'lucide-react';

const PILLARS = [
  {
    icon: Orbit,
    code: 'SYS-01',
    title: 'Magnetic Confinement & Tokamaks',
    desc: 'Superconducting toroidal field coils generating 13.5 Tesla magnetic fields to confine 150-million-degree D-T plasma in a stable, self-sustaining burn configuration.',
    specs: [
      { label: 'Field Strength', value: '13.5 T' },
      { label: 'Plasma Volume', value: '840 m³' },
      { label: 'Fusion Power', value: '500 MW' },
    ],
    to: '/reactors',
  },
  {
    icon: Zap,
    code: 'SYS-02',
    title: 'Laser Inertial Confinement',
    desc: 'Synchronized 192-beam petawatt laser arrays delivering 1.8 MJ of UV energy onto a 2mm gold hohlraum capsule within a 20-nanosecond implosion window.',
    specs: [
      { label: 'Laser Energy', value: '1.8 MJ' },
      { label: 'Pulse Width', value: '20 ns' },
      { label: 'Beam Count', value: '192' },
    ],
    to: '/reactors',
  },
  {
    icon: Globe,
    code: 'SYS-03',
    title: 'Global Grid & Tritium Breeding',
    desc: 'Lithium-6 blanket modules surrounding the plasma chamber breed tritium fuel in situ while simultaneously capturing neutron energy for direct thermal-to-electric conversion.',
    specs: [
      { label: 'Grid Output', value: '2.4 GW' },
      { label: 'TBR Target', value: '≥ 1.15' },
      { label: 'Efficiency', value: '42%' },
    ],
    to: '/reactors',
  },
];

const TELEMETRY = [
  { label: 'Plasma Temp', value: '1.5 × 10⁸ K', icon: Activity },
  { label: 'Neutron Flux', value: '3.2 × 10¹⁴ n/cm²/s', icon: Radio },
  { label: 'Energy Gain Q', value: '10.3', icon: Zap },
  { label: 'Uptime', value: '99.97%', icon: Cpu },
];

export default function Home() {
  return (
    <div className="bg-[#050505]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left: Text */}
        <div className="flex-1 lg:w-[55%] flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24 lg:py-0 border-r border-[#262626]">
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#888888]">
              Commercial Fusion — Phase IV Deployment
            </span>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <div className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-4">
              IGN-DYN / 2026 / CLASSIFIED
            </div>
            <h1 className="font-sans font-black text-5xl md:text-6xl xl:text-7xl text-white leading-[0.95] tracking-tight uppercase mb-6">
              Ignition
              <br />
              <span className="text-white">Dynamics</span>
            </h1>
            <div className="w-16 h-px bg-white mb-6" />
            <h2 className="font-mono text-lg md:text-xl tracking-widest uppercase text-[#888888]">
              The Fusion Era
            </h2>
          </div>

          <p className="text-[#888888] font-light text-base leading-relaxed max-w-lg mb-10">
            We are engineering the thermodynamic future of civilization. Our tokamak and inertial confinement systems achieve sustained ignition at Q &gt; 10, delivering clean, limitless fusion power to planetary-scale energy grids. The age of fossil combustion ends here.
          </p>

          {/* Telemetry Row */}
          <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626] mb-10">
            {TELEMETRY.map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-[#050505] p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-3 h-3 text-[#555555]" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
                    {label}
                  </span>
                </div>
                <div className="font-mono text-sm text-white">{value}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/reactors"
              className="flex items-center justify-center gap-2 border border-white text-white px-8 py-3 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
            >
              <span>Explore Reactors</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border border-[#262626] text-[#888888] px-8 py-3 font-mono text-xs tracking-widest uppercase hover:border-white hover:text-white transition-all duration-200"
            >
              <span>Request Grid Access</span>
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=90"
            alt="Tokamak plasma core — glowing fusion plasma"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(1.3) contrast(1.1)' }}
          />
          {/* Fade edges into black */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-transparent" />

          {/* Overlay telemetry badge */}
          <div className="absolute bottom-8 right-8 border border-[#262626] bg-[#050505]/80 backdrop-blur-sm p-4">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] mb-1">
              Daedalus MK-IV
            </div>
            <div className="font-mono text-xs text-white">Plasma Core — Active</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[10px] text-green-500">IGNITION SUSTAINED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Pillars */}
      <section className="border-t border-[#262626]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="py-16 border-b border-[#262626] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] mb-3">
                Core Systems / Infrastructure Matrix
              </div>
              <h2 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                Fusion Architecture
              </h2>
            </div>
            <div className="font-mono text-xs text-[#555555] max-w-xs text-right hidden md:block">
              Three independent confinement paradigms operating in parallel across global deployment sites.
            </div>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
            {PILLARS.map(({ icon: Icon, code, title, desc, specs, to }) => (
              <div key={code} className="p-8 lg:p-12 group hover:bg-[#0a0a0a] transition-colors duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-[#262626] flex items-center justify-center group-hover:border-white transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
                    {code}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-white mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-[#888888] text-sm font-light leading-relaxed mb-8">
                  {desc}
                </p>

                {/* Specs */}
                <div className="space-y-2 mb-8">
                  {specs.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between border-b border-[#262626] pb-2">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
                        {label}
                      </span>
                      <span className="font-mono text-xs text-white">{value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={to}
                  className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#888888] hover:text-white transition-colors duration-200 group/link"
                >
                  <span>View System</span>
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="border-t border-[#262626] py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] mb-6">
                Mission Directive / IGN-DYN-2026-001
              </div>
              <blockquote className="font-sans font-black text-3xl md:text-4xl text-white leading-tight uppercase tracking-tight">
                "We do not merely generate power. We ignite the future of our species."
              </blockquote>
              <div className="mt-6 font-mono text-xs text-[#555555]">
                — Dr. Elara Voss, Chief Plasma Physicist, Ignition Dynamics Corp.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#262626]">
              {[
                { label: 'Active Reactor Sites', value: '7', unit: 'Global' },
                { label: 'Nations Powered', value: '23', unit: 'Countries' },
                { label: 'CO₂ Displaced', value: '4.2 Gt', unit: 'Per Annum' },
                { label: 'Research Staff', value: '12,400', unit: 'Physicists' },
              ].map(({ label, value, unit }) => (
                <div key={label} className="bg-[#050505] p-8">
                  <div className="font-sans font-black text-4xl text-white mb-1">{value}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] mb-1">
                    {unit}
                  </div>
                  <div className="font-mono text-[10px] text-[#888888]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-[#262626]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[#555555] mb-1">
              Grid Allocation — Open for Q3 2026
            </div>
            <div className="font-sans font-bold text-xl text-white">
              Request infrastructure deployment for your nation or grid operator.
            </div>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 flex items-center gap-2 border border-white text-white px-10 py-4 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
          >
            <ShieldAlert className="w-3 h-3" />
            <span>Initiate Grid Request</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
