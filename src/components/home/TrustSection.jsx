import { Users, Award, Clock, Globe, CheckCircle, Star } from 'lucide-react'

const trustPoints = [
  {
    icon: Users,
    stat: '500+',
    label: 'Global Buyers Served',
    description: 'Trusted by businesses across North America, Europe, Australia, and beyond.',
  },
  {
    icon: Award,
    stat: '10+',
    label: 'Years of Experience',
    description: 'Deep knowledge of Chinese manufacturing, trade regulations, and logistics.',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Response Time',
    description: 'We respond to inquiries within 24 hours and keep you updated throughout.',
  },
  {
    icon: Globe,
    stat: '30+',
    label: 'Countries Served',
    description: 'We coordinate shipping to destinations worldwide with reliable freight partners.',
  },
]

const values = [
  'Transparent pricing with no hidden fees',
  'Dedicated sourcing agent for every client',
  'On-site factory visits and real-time updates',
  'Detailed inspection reports with photos',
  'Flexible service — use what you need',
  'English-speaking team with international experience',
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine local expertise with international standards to deliver reliable sourcing results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-slate-200 bg-slate-50">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-1">{point.stat}</div>
              <div className="text-sm font-semibold text-slate-900 mb-2">{point.label}</div>
              <p className="text-sm text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-700 rounded-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Commitment to You</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We don't just find suppliers — we build long-term partnerships. Every client gets a dedicated sourcing agent who understands your business and works to protect your interests.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0" />
                  <span className="text-sm text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
