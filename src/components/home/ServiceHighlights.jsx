import { Brain, Palette, BarChart3, Shield, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Intelligent Content',
    description: 'AI writes compelling copy, headlines, and CTAs tailored to your audience and industry.',
    tag: 'NLP',
  },
  {
    icon: Palette,
    title: 'Design Intelligence',
    description: 'Automatically generates cohesive color palettes, typography, and layouts that convert.',
    tag: 'Design AI',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Built-in analytics dashboard tracks visitor behavior and suggests AI-driven optimizations.',
    tag: 'Analytics',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant infrastructure with automatic SSL, DDoS protection, and daily backups.',
    tag: 'Security',
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Global CDN with 99.9% uptime SLA. Your site loads in under 1 second, anywhere in the world.',
    tag: 'Infrastructure',
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'AI translates and localizes your entire site into 40+ languages with cultural nuance.',
    tag: 'i18n',
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight max-w-sm">
              Everything you need to succeed online.
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm lg:text-right">
            A complete platform built for modern businesses — from solo creators to enterprise teams.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-dashed border-slate-200">
                  {service.tag}
                </span>
              </div>

              <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom image strip */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-slate-100 relative">
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400&q=80&auto=format&fit=crop"
            alt="Minimalist workspace"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center px-10">
            <div>
              <p className="text-white/60 text-sm mb-2">Trusted by 50,000+ businesses worldwide</p>
              <h3 className="text-white text-2xl font-bold max-w-xs">The future of web creation is here.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
