import { Shield, Users, BarChart3, HeadphonesIcon, Award, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    stat: '500+',
    label: 'Factories Verified',
    desc: 'On-site audits conducted across Guangdong, Zhejiang, Jiangsu, and other manufacturing hubs.',
  },
  {
    icon: Users,
    stat: '200+',
    label: 'Global Clients',
    desc: 'Buyers from North America, Europe, Southeast Asia, and Australia trust our sourcing services.',
  },
  {
    icon: BarChart3,
    stat: '98%',
    label: 'On-Time Delivery',
    desc: 'Orders delivered according to schedule, with proactive tracking and milestone management.',
  },
  {
    icon: HeadphonesIcon,
    stat: '24/7',
    label: 'Client Support',
    desc: 'We work across time zones to keep you updated on your orders throughout the process.',
  },
  {
    icon: Award,
    stat: '10+ Years',
    label: 'Industry Experience',
    desc: 'Deep knowledge of Chinese manufacturing, supply chains, and export procedures.',
  },
  {
    icon: Clock,
    stat: '3-5 Days',
    label: 'Typical Response Time',
    desc: 'From initial inquiry to supplier shortlist, we move fast without compromising quality.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Built on Trust and Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We have been helping businesses source from China for over a decade. Our track record speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-brand-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{point.stat}</div>
              <div className="font-semibold text-gray-700 mb-2">{point.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}