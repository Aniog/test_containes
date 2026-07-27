import { ShieldCheck, Users, Globe, Award, TrendingUp, Handshake } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const trustPoints = [
  { icon: ShieldCheck, title: 'Verified Suppliers Only', desc: 'Every supplier in our network has been audited on-site for real manufacturing capability and business legitimacy.' },
  { icon: Users, title: 'Dedicated Project Manager', desc: 'You work with one assigned project manager who understands your requirements and handles all communication.' },
  { icon: Globe, title: 'Global Client Base', desc: 'We serve buyers from North America, Europe, Australia, Southeast Asia, and the Middle East.' },
  { icon: Award, title: 'AQL-Based Inspections', desc: 'Our quality inspections follow internationally recognized AQL standards, giving you objective, reliable results.' },
  { icon: TrendingUp, title: '10+ Years in China', desc: 'Our team has over a decade of on-the-ground sourcing experience across major Chinese manufacturing hubs.' },
  { icon: Handshake, title: 'No Minimum Order Commitment', desc: 'Start with a trial order. No long-term contracts required. We earn your trust through results.' },
]

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Trust Us"
          title="Built for Reliability and Transparency"
          subtitle="We operate with clear processes, honest communication, and measurable results."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((t) => (
            <div key={t.title} className="flex items-start gap-4 p-6 md:p-8 bg-navy-50 rounded-xl">
              <div className="w-10 h-10 bg-navy-600 rounded-lg flex items-center justify-center shrink-0">
                <t.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-navy-600 mb-1">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
