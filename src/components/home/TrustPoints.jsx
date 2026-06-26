import { Shield, Award, Globe, Headphones, MapPin, FileCheck } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Supplier Network',
    description: 'Over 500 pre-audited suppliers across key manufacturing hubs in China.',
  },
  {
    icon: Award,
    title: 'ISO-Compliant Processes',
    description: 'Our quality inspection processes follow ISO 9001 standards for consistency.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'Clients in 30+ countries trust us with their China sourcing operations.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'One point of contact who understands your business and communicates in your language.',
  },
  {
    icon: MapPin,
    title: 'Local Presence in China',
    description: 'Teams based in Shenzhen, Guangzhou, and Yiwu with direct factory access.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Detailed inspection reports with photos, so you always know the status of your order.',
  },
]

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Built on Reliability and Transparency
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            We earn your trust through consistent results, clear communication, and professional processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="bg-primary-800/50 rounded-xl p-6 md:p-8 border border-primary-700/50">
                <div className="w-12 h-12 bg-primary-700/50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
