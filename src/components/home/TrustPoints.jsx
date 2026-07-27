import SectionHeading from '@/components/shared/SectionHeading'
import { CheckCircle, Users, Globe, Award, Clock, Building } from 'lucide-react'

const trustPoints = [
  { icon: Building, label: 'Based in China', detail: 'Local team in Guangzhou with direct factory access' },
  { icon: Users, label: '500+ Clients Served', detail: 'Buyers from 30+ countries trust our services' },
  { icon: Globe, label: 'Bilingual Team', detail: 'Fluent English & Chinese communication' },
  { icon: Award, label: '10+ Years Experience', detail: 'Deep knowledge of Chinese manufacturing' },
  { icon: Clock, label: '48h Response Time', detail: 'Fast quotes and supplier shortlists' },
  { icon: CheckCircle, label: 'No Hidden Fees', detail: 'Transparent pricing on every project' },
]

const TrustPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Buyers Trust SSourcing China"
          subtitle="We combine local expertise with international standards to deliver results you can count on."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{point.label}</p>
                  <p className="text-sm text-white/60">{point.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustPoints
