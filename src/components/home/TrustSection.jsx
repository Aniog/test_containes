import { Shield, Users, Clock, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Shield, value: '1,200+', label: 'Factory Audits' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Award, value: '98%', label: 'Repeat Client Rate' },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
            Trusted Partner
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Built on Transparency & Results
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We have built long-term relationships with buyers across North America, Europe, and Australia by delivering consistent, reliable sourcing outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-sm text-white/80 leading-relaxed italic">
              "SSourcing China helped us cut supplier search time from months to weeks. Their factory audits saved us from a costly partnership."
            </p>
            <p className="text-sm font-semibold text-white mt-4">— Michael T., USA</p>
            <p className="text-xs text-white/50">Importer of Industrial Tools</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-sm text-white/80 leading-relaxed italic">
              "The quality inspection reports are detailed and honest. We have reduced defect rates by 70% since working with their team."
            </p>
            <p className="text-sm font-semibold text-white mt-4">— Sarah L., UK</p>
            <p className="text-xs text-white/50">E-commerce Brand Owner</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-sm text-white/80 leading-relaxed italic">
              "Shipping coordination used to be our biggest headache. Now it is seamless. They handle everything from port to warehouse."
            </p>
            <p className="text-sm font-semibold text-white mt-4">— David K., Australia</p>
            <p className="text-xs text-white/50">Wholesale Distributor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
