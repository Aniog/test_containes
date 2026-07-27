const trustPoints = [
  { value: '10+', label: 'Years in China Sourcing', desc: 'Established presence with deep local market knowledge.' },
  { value: '500+', label: 'Buyers Served', desc: 'From startups to Fortune 500 companies across 30+ countries.' },
  { value: '2,000+', label: 'Factories Audited', desc: 'Extensive database of verified manufacturers across industries.' },
  { value: '98%', label: 'Client Retention Rate', desc: 'Our clients stay with us. Long-term partnerships are our metric.' },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Why Global Buyers Trust Us</h2>
        <p className="section-subtitle">
          Real numbers behind our sourcing service.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {trustPoints.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-500 mb-2">{item.value}</div>
              <div className="text-sm font-semibold text-neutral-900 mb-2">{item.label}</div>
              <p className="text-xs text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <p className="text-xs text-neutral-400 text-center uppercase tracking-wider mb-6">
            Our team holds certifications from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['ISO 9001', 'AQSIQ', 'CQC', 'SGS Partner', 'TUV Certified'].map((cert) => (
              <div key={cert} className="text-sm font-semibold text-neutral-400">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}