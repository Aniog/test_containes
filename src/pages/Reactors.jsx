import { Orbit, Zap, ShieldAlert, Activity } from 'lucide-react';
import ReactorDaedalus from '../components/reactors/ReactorDaedalus';
import ReactorHelios from '../components/reactors/ReactorHelios';
import ReactorMIF from '../components/reactors/ReactorMIF';

const REACTOR_NAV = [
  { id: 'daedalus', icon: Orbit, label: 'Daedalus Tokamak', sub: 'Magnetic Confinement' },
  { id: 'helios', icon: Zap, label: 'Helios Laser Array', sub: 'Inertial Confinement' },
  { id: 'mif', icon: ShieldAlert, label: 'Magneto-Inertial', sub: 'Hybrid Frontier' },
];

export default function Reactors() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#050505] pt-24 md:pt-32">
      {/* Page header */}
      <div className="border-b border-[#262626] px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-4">
            — Reactor Hub & Infrastructure
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">
                FUSION<br />REACTOR HUB
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-[#555555] text-sm leading-relaxed">
                Three distinct fusion confinement architectures — each engineered for specific deployment contexts, from baseload national grids to modular industrial installations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reactor navigation */}
      <div className="border-b border-[#262626]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
          {REACTOR_NAV.map(({ id, icon: Icon, label, sub }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-center gap-4 px-8 py-6 hover:bg-[#0a0a0a] transition-colors duration-200 text-left group"
            >
              <div className="w-9 h-9 border border-[#262626] flex items-center justify-center flex-shrink-0 group-hover:border-[#404040] transition-colors duration-200">
                <Icon className="w-4 h-4 text-[#555555] group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">{sub}</div>
                <div className="font-mono text-sm text-white font-bold">{label}</div>
              </div>
              <div className="ml-auto">
                <Activity className="w-3 h-3 text-[#262626] group-hover:text-[#555555] transition-colors duration-200" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reactor sections */}
      <ReactorDaedalus />
      <ReactorHelios />
      <ReactorMIF />
    </div>
  );
}
