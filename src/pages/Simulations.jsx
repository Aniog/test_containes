import { useState } from 'react';
import {
  Activity,
  Cpu,
  Layers,
  Radio,
  BarChart2,
  Thermometer,
  Zap,
  Lock,
  RefreshCw,
  ChevronRight,
  Circle,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const systemModules = [
  {
    id: 'wave-fn',
    label: 'Wave Function Solver',
    status: 'ready',
    desc: 'Schrödinger equation numerical integration',
    progress: 100,
    icon: Activity,
  },
  {
    id: 'particle-sim',
    label: 'Particle Trajectory',
    status: 'building',
    desc: 'Monte Carlo path integral simulation',
    progress: 67,
    icon: Layers,
  },
  {
    id: 'field-calc',
    label: 'Quantum Field Calculator',
    status: 'building',
    desc: 'QED perturbation theory expansion',
    progress: 34,
    icon: Zap,
  },
  {
    id: 'entangle-net',
    label: 'Entanglement Network',
    status: 'pending',
    desc: 'Bell state tomography visualizer',
    progress: 0,
    icon: Radio,
  },
  {
    id: 'thermal-map',
    label: 'Thermal State Mapper',
    status: 'pending',
    desc: 'Density matrix thermal evolution',
    progress: 0,
    icon: Thermometer,
  },
  {
    id: 'spectrum-an',
    label: 'Spectral Analyzer',
    status: 'pending',
    desc: 'Energy eigenvalue decomposition',
    progress: 0,
    icon: BarChart2,
  },
];

const telemetryRows = [
  { key: 'PROC_TEMP', value: '42.3°C', status: 'nominal' },
  { key: 'MEM_ALLOC', value: '6.2 / 32 GB', status: 'nominal' },
  { key: 'GPU_UTIL', value: '0.0%', status: 'idle' },
  { key: 'QUBIT_ERR', value: '—', status: 'idle' },
  { key: 'NET_LATENCY', value: '1.2 ms', status: 'nominal' },
  { key: 'CLOCK_SYNC', value: 'UTC+0', status: 'nominal' },
];

const logLines = [
  { time: '09:14:02', level: 'INFO', msg: 'System boot sequence complete' },
  { time: '09:14:03', level: 'INFO', msg: 'Wave Function Solver module loaded' },
  { time: '09:14:05', level: 'WARN', msg: 'Particle Trajectory: GPU backend unavailable, falling back to CPU' },
  { time: '09:14:07', level: 'INFO', msg: 'Quantum Field Calculator: compiling CUDA kernels...' },
  { time: '09:14:11', level: 'INFO', msg: 'Awaiting simulation engine initialization' },
  { time: '09:14:12', level: 'WARN', msg: 'Entanglement Network: dependency @qd/bell-states not resolved' },
  { time: '09:14:12', level: 'INFO', msg: 'Dashboard ready — simulations pending deployment' },
];

const statusConfig = {
  ready: { label: 'Ready', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500', icon: CheckCircle2 },
  building: { label: 'Building', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', dot: 'bg-amber-400 animate-pulse', icon: RefreshCw },
  pending: { label: 'Pending', color: 'text-slate-400', bg: 'bg-slate-50', border: 'border-slate-200', dot: 'bg-slate-300', icon: Clock },
};

const telemetryStatusConfig = {
  nominal: { color: 'text-emerald-600', dot: 'bg-emerald-500' },
  idle: { color: 'text-slate-400', dot: 'bg-slate-300' },
  warn: { color: 'text-amber-600', dot: 'bg-amber-400 animate-pulse' },
};

const logLevelConfig = {
  INFO: 'text-cyan-600',
  WARN: 'text-amber-500',
  ERROR: 'text-red-500',
};

function ModuleCard({ module }) {
  const { label, status, desc, progress, icon: Icon } = module;
  const cfg = statusConfig[status];
  const StatusIcon = cfg.icon;

  return (
    <div className={`dashboard-cell rounded-xl p-5 transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon className="w-4.5 h-4.5 text-slate-500" strokeWidth={1.5} />
          </div>
          <div>
            <p
              className="text-sm font-semibold text-slate-700 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </p>
            <p
              className="text-xs text-slate-400 mt-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {desc}
            </p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.bg} ${cfg.color} ${cfg.border}`}
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          {cfg.label}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="text-xs text-slate-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            BUILD PROGRESS
          </span>
          <span
            className="text-xs font-medium text-slate-600"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {progress}%
          </span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progress === 100 ? 'bg-emerald-500' : progress > 0 ? 'bg-amber-400' : 'bg-slate-200'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Simulations() {
  const [activeTab, setActiveTab] = useState('modules');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
      {/* Page header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-12 bg-cyan-300" />
          <span
            className="text-xs text-cyan-600 tracking-widest uppercase font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Simulations / Dashboard
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Simulation
              <br />
              <em className="text-cyan-600 not-italic">Engine</em>
            </h1>
            <p
              className="text-slate-500 text-base max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Interactive quantum simulation modules. Components are currently in development and will be deployed in the next release cycle.
            </p>
          </div>

          {/* Status banner */}
          <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-amber-50 border border-amber-200 rounded-xl">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <div>
              <p
                className="text-xs font-semibold text-amber-700"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Under Construction
              </p>
              <p
                className="text-xs text-amber-500"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ETA: Q3 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Top telemetry strip */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
        {telemetryRows.map(({ key, value, status }) => {
          const cfg = telemetryStatusConfig[status];
          return (
            <div
              key={key}
              className="dashboard-cell rounded-lg px-3 py-3"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                <span
                  className="text-xs text-slate-400 tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {key}
                </span>
              </div>
              <p
                className={`text-sm font-semibold ${cfg.color}`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 mb-6 p-1 bg-slate-100 rounded-lg w-fit">
        {[
          { id: 'modules', label: 'Modules', icon: Cpu },
          { id: 'logs', label: 'System Log', icon: Activity },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === id
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Modules grid */}
      {activeTab === 'modules' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {systemModules.map((mod) => (
              <ModuleCard key={mod.id} module={mod} />
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="dashboard-cell rounded-2xl p-10 md:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
              <Lock className="w-7 h-7 text-slate-400" strokeWidth={1.5} />
            </div>
            <h3
              className="text-2xl font-bold text-slate-700 mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Interactive Simulations
            </h3>
            <p
              className="text-slate-400 text-base max-w-md mx-auto mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Real-time quantum state visualizations, Bloch sphere renderers, and Hamiltonian evolution tools are being prepared for deployment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Bloch Sphere', 'Phase Space', 'Density Matrix', 'Feynman Diagrams', 'Path Integrals'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-500 text-xs rounded-full"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* System log */}
      {activeTab === 'logs' && (
        <div className="dashboard-cell rounded-xl overflow-hidden">
          {/* Log header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span
                className="text-xs text-slate-500 tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                System Log — Live
              </span>
            </div>
            <span
              className="text-xs text-slate-400"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {logLines.length} entries
            </span>
          </div>

          {/* Log lines */}
          <div className="p-5 space-y-2 bg-slate-900 rounded-b-xl">
            {logLines.map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-4 text-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-slate-500 flex-shrink-0 text-xs pt-0.5">{line.time}</span>
                <span className={`flex-shrink-0 text-xs font-semibold w-10 ${logLevelConfig[line.level]}`}>
                  {line.level}
                </span>
                <span className="text-slate-300 text-xs leading-relaxed">{line.msg}</span>
              </div>
            ))}
            {/* Blinking cursor */}
            <div
              className="flex items-center gap-4 text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-slate-500 text-xs">09:14:13</span>
              <span className="text-cyan-400 text-xs">▋</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom info row */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Engine Version', value: 'QD-SIM v0.9.0-beta', icon: Cpu },
          { label: 'Compute Backend', value: 'CPU (GPU pending)', icon: Zap },
          { label: 'Next Deployment', value: 'Q3 2026', icon: ChevronRight },
        ].map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="dashboard-cell rounded-xl px-5 py-4 flex items-center gap-4"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
            </div>
            <div>
              <p
                className="text-xs text-slate-400 uppercase tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {label}
              </p>
              <p
                className="text-sm font-semibold text-slate-700 mt-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
