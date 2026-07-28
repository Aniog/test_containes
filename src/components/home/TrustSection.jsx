import { MapPin, Users, Award, Clock } from 'lucide-react'

const trustPoints = [
  { icon: MapPin, stat: 'Based in Shenzhen', detail: 'Heart of China manufacturing hub' },
  { icon: Users, stat: '500+ Buyers Served', detail: 'Across 50+ countries worldwide' },
  { icon: Award, stat: '10+ Years Experience', detail: 'Deep industry knowledge and networks' },
  { icon: Clock, stat: '24h Response Time', detail: 'Quick replies to all inquiries' },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-blue-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            We are a team of sourcing professionals with deep roots in China manufacturing. Our track record speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div key={point.stat} className="text-center">
              <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-amber-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{point.stat}</div>
              <p className="text-blue-200 text-sm">{point.detail}</p>
            </div>
          ))}
        </div>

        {/* Additional trust signals */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-700/50 rounded-lg p-6 text-center">
            <h4 className="text-white font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-blue-200 text-sm">No hidden fees. Clear service agreements before we start.</p>
          </div>
          <div className="bg-blue-700/50 rounded-lg p-6 text-center">
            <h4 className="text-white font-semibold mb-2">Dedicated Agent</h4>
            <p className="text-blue-200 text-sm">One point of contact who knows your products and preferences.</p>
          </div>
          <div className="bg-blue-700/50 rounded-lg p-6 text-center">
            <h4 className="text-white font-semibold mb-2">Detailed Reports</h4>
            <p className="text-blue-200 text-sm">Photo and video documentation at every inspection stage.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
