import { ShieldCheck, Users, Globe, Award, Clock, MapPin } from 'lucide-react'

const trustPoints = [
  { icon: ShieldCheck, value: '2,000+', label: 'Verified Suppliers', desc: 'Factory-audited suppliers across 30+ categories' },
  { icon: Globe, value: '50+', label: 'Countries Served', desc: 'Buyers across North America, Europe, and Australia' },
  { icon: Users, value: '500+', label: 'Clients Worldwide', desc: 'Small businesses to multinational corporations' },
  { icon: Award, value: '10+', label: 'Years Experience', desc: 'A decade of China sourcing expertise' },
  { icon: Clock, value: '48hr', label: 'Quote Turnaround', desc: 'Fast response on all sourcing inquiries' },
  { icon: MapPin, value: '5', label: 'Office Locations', desc: 'Shanghai, Shenzhen, Guangzhou, Yiwu, Ningbo' },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Trust & Credibility
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Why Businesses Trust SSourcing China
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. We have helped hundreds of businesses
            successfully source products from China with confidence.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {trustPoints.map((tp) => {
            const Icon = tp.icon
            return (
              <div key={tp.label} className="bg-bg-light rounded-lg p-6 text-center border border-border hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{tp.value}</p>
                <p className="text-sm font-semibold text-text-primary mb-1">{tp.label}</p>
                <p className="text-xs text-text-muted">{tp.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
