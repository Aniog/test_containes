import { Shield, Award, Globe, Clock, Lock, Headphones } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    description: 'Every factory in our network passes a multi-point audit before we send you a single quote.',
  },
  {
    icon: Award,
    title: '12 Years on the Ground',
    description: 'Our team has been based in Shenzhen, Guangzhou, and Yiwu since 2012.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'We serve buyers in the US, EU, UK, Australia, and the Middle East across diverse industries.',
  },
  {
    icon: Clock,
    title: 'Transparent Timelines',
    description: 'You get realistic lead times and weekly status updates — no surprises.',
  },
  {
    icon: Lock,
    title: 'Confidential & Secure',
    description: 'Your designs, pricing, and supplier information are protected by strict NDAs.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'One point of contact who knows your product, your standards, and your timeline.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why Buyers Trust Us
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Reliability and transparency are not buzzwords for us. They are how we operate every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 md:p-8">
              <div className="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
