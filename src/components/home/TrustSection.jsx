import { ShieldCheck, Users, Globe, Award, Clock, Handshake } from 'lucide-react'

const trustPoints = [
  {
    icon: ShieldCheck,
    stat: '500+',
    label: 'Verified Suppliers',
    desc: 'Every supplier in our network has been physically audited and verified by our on-ground team.',
  },
  {
    icon: Users,
    stat: '300+',
    label: 'Global Clients',
    desc: 'Buyers from 40+ countries trust us to manage their China sourcing operations.',
  },
  {
    icon: Globe,
    stat: '40+',
    label: 'Countries Served',
    desc: 'We ship to North America, Europe, Australia, Middle East, and beyond.',
  },
  {
    icon: Award,
    stat: '10+',
    label: 'Years Experience',
    desc: 'A decade of sourcing expertise with deep knowledge of Chinese manufacturing.',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Quote Turnaround',
    desc: 'Get a detailed sourcing proposal within 24 hours of your initial inquiry.',
  },
  {
    icon: Handshake,
    stat: '98%',
    label: 'Client Retention',
    desc: 'Our clients return because we deliver consistent quality and transparent service.',
  },
]

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            Why Trust SSourcing China
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Built on Experience and Transparency
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We earn trust through consistent delivery, honest communication, and
            results you can verify.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="text-center p-6 md:p-8 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-100 text-brand-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-1">
                {point.stat}
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-2">
                {point.label}
              </div>
              <p className="text-sm text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
