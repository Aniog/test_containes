import { Shield, Users, Globe, Award, Clock, Headphones } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Buyers Served', icon: Users },
  { number: '2,000+', label: 'Suppliers Verified', icon: Shield },
  { number: '35+', label: 'Countries Served', icon: Globe },
  { number: '8+', label: 'Years Experience', icon: Award },
]

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Network',
    description: 'Every supplier in our network has passed a comprehensive on-site audit.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Initial supplier shortlist delivered within 48 hours of your request.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Manager',
    description: 'A bilingual project manager assigned to your account for seamless communication.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg p-6 text-center border border-gray-100 shadow-sm"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Buyers Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have built our reputation on transparency, reliability, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-lg p-6 border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4">
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
