import { Shield, Zap, BarChart3, Palette, Code2, Globe } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Every site is optimized for Core Web Vitals with sub-second load times and 99.9% uptime SLA.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Palette,
    title: 'AI Design System',
    description: 'Intelligent design tokens adapt to your brand identity, ensuring visual consistency across every page.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Code2,
    title: 'Clean Code Export',
    description: 'Export production-ready React or HTML code at any time. Your site, your code, your control.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics',
    description: 'Track visitors, conversions, and engagement with a privacy-first analytics dashboard.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. SSL, DDoS protection, and automated backups included on every plan.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Deploy to 200+ edge locations worldwide. Your audience gets fast load times wherever they are.',
    color: 'bg-violet-50 text-violet-600',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Everything you need<br />to succeed online
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm md:text-right">
            A complete platform built for modern businesses — from solo founders to enterprise teams.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Bottom image strip */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80&auto=format&fit=crop"
              alt="Minimalist workspace"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop"
              alt="AI technology"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
