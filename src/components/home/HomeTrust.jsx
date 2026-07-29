import { MapPin, Users, Award, Shield, Clock, FileCheck } from 'lucide-react'

const trustPoints = [
  {
    icon: MapPin,
    title: 'Based in Shenzhen',
    description: 'Our office is in the heart of China manufacturing hub, giving us direct access to factories and suppliers across Guangdong and beyond.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    description: 'Native Chinese and English speakers who understand both Western business expectations and Chinese manufacturing practices.',
  },
  {
    icon: Award,
    title: '12+ Years Experience',
    description: 'Over a decade of sourcing experience across multiple industries, with deep supplier networks and market knowledge.',
  },
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    description: 'Every supplier in our network has passed our verification process including license checks, factory audits, and reference validation.',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    description: 'We respond to all inquiries within 24 hours and provide regular project updates so you are never left wondering.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Detailed inspection reports with photos, production updates, and clear documentation at every stage of the process.',
  },
]

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We earn trust through transparency, expertise, and consistent results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4 p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
