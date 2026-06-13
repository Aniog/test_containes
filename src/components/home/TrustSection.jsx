import { Shield, Award, Users, Globe, HeadphonesIcon, FileCheck } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    stat: '500+',
    label: 'Verified Factories',
  },
  {
    icon: Award,
    stat: '10+ Years',
    label: 'Industry Experience',
  },
  {
    icon: Users,
    stat: '300+',
    label: 'Happy Clients',
  },
  {
    icon: Globe,
    stat: '40+',
    label: 'Countries Served',
  },
  {
    icon: HeadphonesIcon,
    stat: '24/7',
    label: 'Client Support',
  },
  {
    icon: FileCheck,
    stat: '99%',
    label: 'On-Time Delivery',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Work With SSourcing China?
          </h2>
          <p className="text-lg text-primary-light/80 leading-relaxed">
            We bring transparency, accountability, and local expertise to every sourcing engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustPoints.map((point, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <point.icon className="w-6 h-6 text-primary-light" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">{point.stat}</div>
              <div className="text-sm text-primary-light/70 mt-1">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}