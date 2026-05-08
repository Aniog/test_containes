import { Shield, Zap, BarChart3, Palette, Search, Headphones } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Every site is optimized for Core Web Vitals with sub-second load times out of the box.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Palette,
    title: 'AI Design System',
    description: 'Intelligent color palettes, typography, and layouts that match your brand identity.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Search,
    title: 'SEO Intelligence',
    description: 'Automated meta tags, structured data, and content optimization built into every page.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SSL, DDoS protection, and SOC 2 compliance included on every plan.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics',
    description: 'Real-time visitor insights, conversion tracking, and AI-powered growth recommendations.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    icon: Headphones,
    title: '24/7 AI Support',
    description: 'Our intelligent support agent resolves issues instantly, any time of day.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Everything you need<br />to succeed online
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            NexusAI bundles every tool a modern business needs into one seamless, intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-dashed border-slate-200 rounded-2xl overflow-hidden">
          {services.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="bg-white p-8 hover:bg-slate-50 transition-colors group"
            >
              <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
