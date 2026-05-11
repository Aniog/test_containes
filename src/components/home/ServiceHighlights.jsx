import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Brain, Palette, Globe, ShieldCheck, BarChart2, Layers } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Automatically generate compelling copy, headlines, and CTAs tailored to your brand voice and target audience.',
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    icon: Palette,
    title: 'Smart Design System',
    description: 'AI selects harmonious color palettes, typography, and layouts that match your industry and aesthetic preferences.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: Globe,
    title: 'Instant Publishing',
    description: 'Deploy to a global CDN with one click. Custom domains, SSL certificates, and blazing-fast load times included.',
    color: 'text-sky-600 bg-sky-50',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified infrastructure with automatic backups, DDoS protection, and 99.9% uptime SLA.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: BarChart2,
    title: 'Built-in Analytics',
    description: 'Track visitors, conversions, and engagement with a privacy-first analytics dashboard — no third-party scripts.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description: 'Access 200+ pre-built, AI-customizable sections: heroes, pricing tables, testimonials, forms, and more.',
    color: 'text-rose-600 bg-rose-50',
  },
]

export default function ServiceHighlights() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-xs font-semibold mb-4">
              Everything you need
            </div>
            <h2 id="services-title" className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Professional services, zero complexity
            </h2>
          </div>
          <div>
            <p id="services-subtitle" className="text-slate-500 text-lg leading-relaxed">
              NeuralBuild bundles every tool a modern business needs into one intelligent platform — so you can focus on growth, not infrastructure.
            </p>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 mt-6 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
            >
              Explore all features →
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50/50 transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            data-strk-bg-id="services-cta-bg"
            data-strk-bg="[services-title] [services-subtitle] minimalist workspace technology"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
          />
          <div className="absolute inset-0 bg-indigo-900/80" />
          {/* Dashed border overlay */}
          <div className="absolute inset-4 border-2 border-dashed border-white/20 rounded-2xl pointer-events-none" />
          <div className="relative px-8 py-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to build your next great website?
            </h3>
            <p className="text-indigo-200 mb-8 max-w-md mx-auto">
              Join 50,000+ businesses already using NeuralBuild to grow online.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Start for free — no credit card required
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
