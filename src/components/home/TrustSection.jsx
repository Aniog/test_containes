import { MapPin, Users, Award, FileCheck } from 'lucide-react'

const trustPoints = [
  {
    icon: MapPin,
    title: 'On the Ground in China',
    desc: 'Our team is based in Shenzhen, visiting factories weekly. We are not a remote desk service.',
  },
  {
    icon: Users,
    title: 'Bilingual Sourcing Team',
    desc: 'Native Mandarin speakers with international business experience. No translation errors, no misunderstandings.',
  },
  {
    icon: Award,
    title: '12+ Years in Sourcing',
    desc: 'Since 2012, we have managed sourcing for clients across North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: FileCheck,
    title: 'Detailed Reports & Photos',
    desc: 'Every inspection, audit, and visit comes with a comprehensive report including photos, documents, and recommendations.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#F5EDE3] text-[#C27A3E] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Why Trust Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Why Buyers Choose SSourcing China</h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            We combine deep local expertise with international business standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1A365D] rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{point.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
