import { Shield, Users, Globe, Clock, Award, Handshake } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    value: '100%',
    label: 'Verified Suppliers',
    description: 'Every factory in our network undergoes rigorous verification including license checks, on-site visits, and reference validation.',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Global Clients',
    description: 'Trusted by businesses across 50+ countries, from startups to established brands, for their China sourcing needs.',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Years Experience',
    description: 'Over a decade of experience navigating Chinese manufacturing, supply chains, and international trade.',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Response Time',
    description: 'We respond to all inquiries within 24 hours, with most receiving a detailed response the same business day.',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Satisfaction Rate',
    description: 'Our clients consistently rate us highly for communication, quality, and reliability. Many return for repeat orders.',
  },
  {
    icon: Handshake,
    value: '1,200+',
    label: 'Factory Partners',
    description: 'Established relationships with verified factories across all major manufacturing regions in China.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Built on Trust and Transparency
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We earn your trust through consistent results, clear communication, and a commitment to your success.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{point.value}</div>
              <div className="text-lg font-semibold text-navy mb-3">{point.label}</div>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
