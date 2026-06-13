import { ShieldCheck, Users, Globe2, Clock, FileCheck, Award } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Factory Network',
    description: 'Every factory in our network has been personally visited, audited, and verified by our team.',
  },
  {
    icon: Users,
    title: 'Bilingual Local Team',
    description: 'Our team of 20+ bilingual sourcing specialists is based in Guangzhou, Shenzhen, and Ningbo.',
  },
  {
    icon: Globe2,
    title: 'Serving 30+ Countries',
    description: 'We work with buyers from North America, Europe, Australia, the Middle East, and beyond.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'Average response time under 4 hours during business days. Your inquiry matters to us.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Detailed inspection reports with photos, factory audit documents, and shipping tracking.',
  },
  {
    icon: Award,
    title: 'No Hidden Fees',
    description: 'Clear, upfront pricing with no surprise charges. You know exactly what you pay for.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Built on Trust & Transparency"
          description="We earn your trust through consistent delivery, honest communication, and measurable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">{point.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
