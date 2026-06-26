import { Shield, Award, Users, FileCheck, Globe, HeartHandshake } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Track Record',
    description: 'Over 2,800 factory audits completed with detailed reports and photographic evidence.',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Average 8+ years of China sourcing experience across our core team members.',
  },
  {
    icon: Users,
    title: 'On-the-Ground Presence',
    description: 'Based in Guangzhou with a network spanning Guangdong, Zhejiang, Jiangsu, and beyond.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Detailed reports with photos, videos, and real-time updates throughout the process.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'We serve importers, retailers, and brands from North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: HeartHandshake,
    title: 'No Conflict of Interest',
    description: 'We work for you, not the supplier. No commissions from factories, ensuring unbiased recommendations.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose SSourcing China
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We bring transparency, accountability, and local expertise to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <point.icon className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}