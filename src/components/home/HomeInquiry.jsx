import { CheckCircle2 } from 'lucide-react'
import InquiryForm from '../shared/InquiryForm'

const bullets = [
  'Free, no-obligation sourcing proposal',
  'Reply within one business day',
  'NDA available before sharing details',
  'Buyer-side only — no supplier commissions',
]

export default function HomeInquiry() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              Get started
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Tell us about your product. We'll get back with a free quote.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Share your product details, target price and quantity. Our sourcing team will
              review and reply with the next steps tailored to your project.
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
