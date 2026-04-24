import { Brain, BarChart3, Globe, Shield, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Content Engine',
    description: 'Generate compelling copy, headlines, and CTAs that convert — trained on millions of high-performing websites.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time insights into visitor behavior, conversion funnels, and SEO rankings with actionable recommendations.',
  },
  {
    icon: Globe,
    title: 'Global CDN Delivery',
    description: 'Your site loads in under 200ms anywhere in the world, backed by enterprise-grade infrastructure.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SSL, DDoS protection, and automated backups included. Your data is always safe and compliant.',
  },
  {
    icon: Palette,
    title: 'Brand Intelligence',
    description: 'Arcis learns your brand identity and ensures every page, every update stays perfectly on-brand.',
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Push changes live in seconds. No build pipelines, no waiting — just instant, reliable publishing.',
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Everything you need,
              <br />nothing you don't
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Arcis combines the power of AI with enterprise-grade infrastructure to give you a complete web platform.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Bottom image strip */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop"
              alt="AI workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&auto=format&fit=crop"
              alt="Minimalist workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop"
              alt="Modern UI analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
