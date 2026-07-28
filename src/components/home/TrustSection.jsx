import { Shield, Globe, Users, Award, Building2, HeadphonesIcon } from 'lucide-react'

const trustPoints = [
  {
    icon: Building2,
    stat: '10+ Years',
    label: 'Experience in China Sourcing',
  },
  {
    icon: Globe,
    stat: '500+',
    label: 'Suppliers Vetted',
  },
  {
    icon: Users,
    stat: '200+',
    label: 'Global Clients Served',
  },
  {
    icon: Award,
    stat: '98%',
    label: 'Client Satisfaction Rate',
  },
  {
    icon: Shield,
    stat: '100%',
    label: 'In-Person Factory Audits',
  },
  {
    icon: HeadphonesIcon,
    stat: '24/7',
    label: 'Client Support',
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Why Work With SSourcing China</h2>
        <p className="text-lg text-white/70 text-center max-w-2xl mx-auto mt-4">
          We are based in China with years of experience helping international buyers source products reliably.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{point.stat}</div>
                <div className="text-sm text-white/70">{point.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}