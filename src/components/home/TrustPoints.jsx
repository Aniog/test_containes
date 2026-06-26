import { Shield, Users, Globe, Award, Clock, ThumbsUp } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    value: '5,000+',
    label: 'Vetted Suppliers',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Global Clients',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Countries Served',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Response Time',
  },
  {
    icon: ThumbsUp,
    value: '98%',
    label: 'Client Satisfaction',
  },
]

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Built on Trust and Results
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real numbers from real experience. We focus on delivering measurable value for every client.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-amber" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{point.value}</p>
              <p className="text-slate-300 text-sm font-medium">{point.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Local Presence in China',
              desc: 'Our team is based in Shenzhen, Guangzhou, and Yiwu — at the heart of China\'s manufacturing hubs. We visit factories in person, not just online.',
            },
            {
              title: 'Transparent Process',
              desc: 'You receive detailed reports with photos at every stage. No hidden fees, no surprises. You stay in control of every decision.',
            },
            {
              title: 'No Minimum Order Commitment',
              desc: 'Whether you need a small trial order or large-scale production, we adapt our services to your volume and budget.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
