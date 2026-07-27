import { Users, Award, Globe, Clock, CheckCircle } from 'lucide-react'

const trustPoints = [
  {
    icon: Users,
    stat: '500+',
    label: 'Global Buyers Served',
    description: 'Trusted by importers from North America, Europe, Australia, and beyond.',
  },
  {
    icon: Award,
    stat: '10+',
    label: 'Years of Experience',
    description: 'Deep knowledge of Chinese manufacturing and international trade.',
  },
  {
    icon: Globe,
    stat: '2,000+',
    label: 'Verified Suppliers',
    description: 'A growing network of audited and reliable manufacturers.',
  },
  {
    icon: Clock,
    stat: '98%',
    label: 'On-Time Delivery',
    description: 'Consistent track record of meeting production and shipping deadlines.',
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Why Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Built on Transparency and Results</h2>
          <p className="text-white/70 text-lg">
            We believe in clear communication, honest pricing, and measurable outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-7 h-7 text-amber-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{point.stat}</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-2">{point.label}</div>
              <p className="text-white/60 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>Verified Business License</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>English-Speaking Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>Detailed Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
