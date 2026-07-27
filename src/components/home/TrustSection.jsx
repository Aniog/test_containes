import { Award, Factory, PackageCheck, Globe, Shield, Star } from 'lucide-react'

const trustPoints = [
  {
    icon: Factory,
    value: '500+',
    label: 'Verified Factories',
    desc: 'Each factory personally audited by our team',
  },
  {
    icon: PackageCheck,
    value: '15,000+',
    label: 'Inspections Completed',
    desc: 'AQL-based QC across 30+ product categories',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Countries Served',
    desc: 'Clients across Europe, Americas, Middle East, and Asia-Pacific',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Retention',
    desc: 'Long-term partnerships built on trust and results',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-brand-gold" />
            <span className="text-sm text-brand-gold font-medium" id="trust-badge">Why Buyers Choose Us</span>
          </div>
          <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Trusted by Global Importers
          </h2>
          <p id="trust-subtitle" className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            We have built our reputation on transparency, reliability, and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                <point.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">{point.value}</div>
              <div className="text-sm font-semibold text-brand-gray-300 mb-2">{point.label}</div>
              <p className="text-xs text-brand-gray-500 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <Award className="w-8 h-8 text-brand-gray-500" />
          <span className="text-brand-gray-500 text-sm font-medium">ISO 9001 Certified</span>
          <span className="text-brand-gray-600">|</span>
          <span className="text-brand-gray-500 text-sm font-medium">AQL 2.5 Standard</span>
          <span className="text-brand-gray-600">|</span>
          <span className="text-brand-gray-500 text-sm font-medium">SGS Partner Lab</span>
          <span className="text-brand-gray-600">|</span>
          <span className="text-brand-gray-500 text-sm font-medium">Canton Fair Exhibitor</span>
        </div>
      </div>
    </section>
  )
}
