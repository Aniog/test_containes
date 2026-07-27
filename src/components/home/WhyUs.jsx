import { MapPin, Languages, FileText, Scale } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const points = [
  {
    icon: MapPin,
    title: 'On the ground in China',
    description:
      'Our team is based in Shenzhen, within reach of the major manufacturing hubs in Guangdong, Zhejiang, and Jiangsu. We visit factories in person — we do not source from behind a desk.',
  },
  {
    icon: Languages,
    title: 'Bilingual, buyer-side team',
    description:
      'We work for you, not for factories. We take no commissions from suppliers, so our shortlists and inspection verdicts stay objective.',
  },
  {
    icon: FileText,
    title: 'Documented everything',
    description:
      'Audit checklists, inspection reports with photos and videos, and written confirmations at every step. You get evidence, not promises.',
  },
  {
    icon: Scale,
    title: 'Clear, predictable fees',
    description:
      'Fixed-fee audits and inspections, and transparent percentage-based sourcing fees agreed before we start. No hidden margins baked into product prices.',
  },
]

const WhyUs = () => {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why SSourcing China"
              title="A sourcing partner that works for the buyer"
              description="Many agents earn hidden commissions from factories. We built our model differently: you are our only client, and every report we send is designed to be checked."
            />
            <div className="mt-8 space-y-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="inline-flex h-fit rounded-lg bg-brand-50 p-3">
                    <point.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-slate-body">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-line shadow-sm">
            <img
              alt="Quality inspector checking products at a Chinese factory"
              className="h-full w-full object-cover"
              data-strk-img-id="whyus-img-4d72b9"
              data-strk-img="[whyus-title] [whyus-eyebrow]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id="whyus-eyebrow" className="hidden">Why SSourcing China</span>
            <span id="whyus-title" className="hidden">
              On-site quality control inspection at a factory in China
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
