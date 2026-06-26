import { Shield, Award, Users, Factory, Globe, FileCheck } from 'lucide-react'

const trustItems = [
  { icon: Shield, title: 'Verified Suppliers Only', desc: 'Every factory we recommend has passed an on-site audit covering licenses, capacity, equipment, and quality systems.' },
  { icon: Users, title: '200+ Buyers Served', desc: 'We have helped companies from over 50 countries source products from China successfully since 2015.' },
  { icon: Factory, title: 'On-the-Ground Team', desc: 'Our full-time team in Shenzhen visits factories weekly, not just once. We maintain constant oversight.' },
  { icon: Award, title: 'ISO-Certified Processes', desc: 'Our quality inspection follows ISO 2859-1 (AQL) sampling standards used by international buyers.' },
  { icon: Globe, title: 'Multilingual Communication', desc: 'Fluent in English, Mandarin, and Cantonese. We prevent the miscommunication that leads to costly errors.' },
  { icon: FileCheck, title: 'Transparent Reporting', desc: 'Detailed inspection reports with photos, production schedules, and cost breakdowns — you see everything we see.' },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Why Trust Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your Eyes and Ears in China
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not a directory or a lead-generation platform. We are a professional sourcing
            team physically present in China's manufacturing hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex gap-4 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-tint rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
