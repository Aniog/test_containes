import { Award, Users, MapPin, Clock, FileCheck, Headphones } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const trustPoints = [
  {
    icon: MapPin,
    title: 'Based in China',
    description: 'Our team is on the ground in Guangzhou and Yiwu — the heart of Chinese manufacturing.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    description: 'We communicate fluently in Chinese and English, eliminating misunderstandings with suppliers.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'You receive detailed reports, photos, and videos at every stage — no surprises.',
  },
  {
    icon: Award,
    title: 'No Hidden Fees',
    description: 'Clear, upfront pricing. We earn from service fees, not supplier commissions.',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    description: 'We respond to all inquiries within one business day, regardless of time zone.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'One point of contact for your entire sourcing project, from inquiry to delivery.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why SSourcing China"
          title="What Makes Us Different"
          subtitle="We're not a marketplace or a directory. We're a hands-on sourcing team working exclusively for buyers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 p-6 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0] hover:border-[#1A3C6E]/30 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1A3C6E] rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A2E] mb-1">{title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
