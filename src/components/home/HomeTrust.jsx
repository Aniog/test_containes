import { Shield, Award, Globe, Users, MapPin, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    description: 'Every supplier undergoes rigorous verification including factory visits, license checks, and reference validation.',
  },
  {
    icon: Award,
    title: 'ISO Certified Processes',
    description: 'Our quality management processes are ISO 9001 certified, ensuring consistent service delivery.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'Trusted by 500+ businesses across North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: Users,
    title: 'Local Team in China',
    description: 'Our team of 50+ professionals is based in Shanghai, Guangzhou, and Shenzhen.',
  },
  {
    icon: MapPin,
    title: 'On-Site Presence',
    description: 'We visit factories in person, not just through video calls or third-party reports.',
  },
  {
    icon: Clock,
    title: '15+ Years Experience',
    description: 'Over a decade of experience in China sourcing across multiple industries.',
  },
]

const HomeTrust = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            Why Trust Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Trusted Partner in China
          </h2>
          <p className="text-lg text-slate-600">
            We've built our reputation on transparency, reliability, and delivering results.
            Here's what sets us apart.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-brand-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-brand-200 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2,000+</div>
              <div className="text-brand-200 text-sm">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-brand-200 text-sm">Orders Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-brand-200 text-sm">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTrust
