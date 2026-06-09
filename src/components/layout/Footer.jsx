import { Link } from 'react-router-dom'
import { Zap, Globe, Shield, Radio, Activity, ArrowUpRight } from 'lucide-react'

const footerColumns = [
  {
    title: 'INFRASTRUCTURE',
    links: [
      { label: 'Reactor Portfolio', path: '/reactors' },
      { label: 'Industrial Gallery', path: '/gallery' },
      { label: 'Grid Deployment', path: '/contact' },
      { label: 'Tritium Breeding', path: '/reactors' },
    ],
  },
  {
    title: 'OPERATIONS',
    links: [
      { label: 'Power Allocation', path: '/contact' },
      { label: 'Magnetic Systems', path: '/reactors' },
      { label: 'Laser Arrays', path: '/reactors' },
      { label: 'Plasma Diagnostics', path: '/gallery' },
    ],
  },
  {
    title: 'PROTOCOLS',
    links: [
      { label: 'Secure Inquiry', path: '/contact' },
      { label: 'Grid Status', path: '/' },
      { label: 'Research Access', path: '/gallery' },
      { label: 'Deployment Log', path: '/reactors' },
    ],
  },
]

const systemMetrics = [
  { label: 'REACTOR UPTIME', value: '99.97%', icon: Activity, color: 'text-tritium-green' },
  { label: 'GRID CAPACITY', value: '12.4 TW', icon: Zap, color: 'text-plasma-purple' },
  { label: 'GLOBAL NODES', value: '2,847', icon: Globe, color: 'text-laser-cyan' },
  { label: 'SEC PROTOCOL', value: 'AES-512', icon: Shield, color: 'text-solar-orange' },
]

export default function Footer() {
  return (
    <footer className="bg-void border-t border-border-gray">
      {/* System Metrics Bar */}
      <div className="border-b border-border-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {systemMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`flex items-center gap-3 py-4 px-4 ${
                  i < systemMetrics.length - 1 ? 'lg:border-r border-border-gray' : ''
                } ${i < 2 ? 'border-r border-border-gray lg:border-r' : ''} ${
                  i === 0 || i === 2 ? 'border-r border-border-gray lg:border-r' : ''
                }`}
              >
                <metric.icon size={12} className={metric.color} />
                <div>
                  <div className="font-mono text-[9px] tracking-widest text-neutral-600 uppercase">
                    {metric.label}
                  </div>
                  <div className={`font-mono text-xs font-semibold ${metric.color}`}>
                    {metric.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-plasma-purple/40 flex items-center justify-center">
                <Zap size={14} className="text-plasma-purple" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.3em] text-white uppercase">
                  IGNITION
                </span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-[0.2em]">
                  DYNAMICS
                </span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-6">
              Pioneering the transition to commercial nuclear fusion energy.
              Engineering planetary-scale power infrastructure for the next era
              of human civilization.
            </p>
            <div className="flex items-center gap-3">
              <span className="telemetry-dot bg-tritium-green" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                All systems operational — Global grid synchronized
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-neutral-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-plasma-purple"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[10px] tracking-wider text-neutral-600 uppercase">
            &copy; 2026 Ignition Dynamics Corp. — All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-mono text-[9px] tracking-widest text-neutral-700 uppercase">
            <span>FUSION-CLASSIFIED</span>
            <span>|</span>
            <span>REV.7.4.1</span>
            <span>|</span>
            <span className="flex items-center gap-1.5">
              <Radio size={8} className="text-laser-cyan" />
              SECURE CHANNEL
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
