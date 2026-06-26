import { trustPoints, Icons } from '@/lib/data'

export default function HomeTrust() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Proven Track Record in China Sourcing
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            With 15+ years on the ground, we've built the expertise, network, and reputation to deliver results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {trustPoints.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent-light mb-1">
                {item.number}
              </div>
              <div className="text-white/60 text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Trust pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'Award', title: 'Certified & Audited', desc: 'Our processes and partner factories meet international standards including ISO 9001, BSCI, and SMETA.' },
            { icon: 'Eye', title: 'Full Transparency', desc: 'Real-time reporting, unedited photos, and open communication. No hidden fees, no surprises.' },
            { icon: 'HeartHandshake', title: 'Long-Term Partnerships', desc: '98% client retention rate. We invest in relationships, not just transactions.' },
            { icon: 'Globe', title: 'On-the-Ground Team', desc: 'Our team is based in Guangzhou with native Mandarin, Cantonese, and English speakers.' },
          ].map((pillar) => {
            const IconComponent = Icons[pillar.icon]
            return (
              <div key={pillar.title} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-white font-semibold mb-2">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}