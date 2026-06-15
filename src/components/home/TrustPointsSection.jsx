import { Shield, Users, Award, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified & Trusted',
    description: '10+ years of experience helping global buyers source from China with confidence.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'We work as an extension of your team, protecting your interests at every step.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Rigorous quality control processes to ensure products meet your exact specifications.',
  },
  {
    icon: Clock,
    title: 'Transparent Communication',
    description: 'Regular updates, clear reporting, and honest advice throughout the sourcing process.',
  },
]

const TrustPointsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SSourcing China
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine local expertise with international standards to deliver
            reliable sourcing solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                10+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustPointsSection
