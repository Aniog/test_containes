import { Clock, ShieldCheck, UserCheck } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'
import SectionHeading from '@/components/shared/SectionHeading'

const assurances = [
  {
    icon: Clock,
    title: 'Reply within 1 business day',
    description: 'A sourcing specialist reviews your brief and responds with a plan and a quotation.',
  },
  {
    icon: ShieldCheck,
    title: 'No obligation',
    description: 'The quote is free. You decide whether to proceed — we will not pressure you.',
  },
  {
    icon: UserCheck,
    title: 'Buyer-side only',
    description: 'We work for you and take no commissions from factories, so our advice stays objective.',
  },
]

const InquirySection = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="inquiry">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Get Started"
              title="Get a free sourcing quote"
              description="Tell us what you want to source from China. The more detail you share — specifications, quantities, target price, destination — the more accurate our proposal will be."
            />
            <div className="mt-8 space-y-6">
              {assurances.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="inline-flex h-fit rounded-lg bg-brand-50 p-3">
                    <item.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquirySection
