import { ShieldCheck, Award, Users, MapPin, Clock, Headphones } from 'lucide-react'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Supplier Network',
    description: 'Every supplier in our network has been personally visited, audited, and verified by our local team in China.',
  },
  {
    icon: Award,
    title: '10+ Years of Experience',
    description: 'We have managed over 2,000 sourcing projects for buyers in more than 50 countries across every major product category.',
  },
  {
    icon: Users,
    title: 'Local Team in China',
    description: 'Our team of 30+ sourcing specialists, QC inspectors, and logistics coordinators is based in Guangzhou, Shenzhen, and Yiwu.',
  },
  {
    icon: MapPin,
    title: 'On-the-Ground Presence',
    description: 'We are located in China\'s top manufacturing hubs, giving us direct access to factories, markets, and shipping ports.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description: 'Every inquiry receives a response within 24 hours. Urgent requests are handled same-day during business hours.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Project Manager',
    description: 'Each client is assigned a dedicated bilingual project manager who manages your orders from sourcing to delivery.',
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-brand-800 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-wide mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-white/10 text-accent-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight mb-4">
            Built on Trust, Transparency & Results
          </h2>
          <p className="text-steel-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We earn client trust through consistent results, clear communication, and a genuine commitment to your sourcing success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-steel-300 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
