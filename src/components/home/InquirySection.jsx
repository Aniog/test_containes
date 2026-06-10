import InquiryForm from '../InquiryForm'
import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  'Reply within 1 business day (GMT+8)',
  'Free supplier shortlist for qualifying inquiries',
  'NDA available before sharing designs',
  'No commitment — start with a single project',
]

export default function InquirySection({ sourcePage = 'home' }) {
  return (
    <section id="inquiry" className="py-16 md:py-24 bg-white border-t border-ink-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Inquiry</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            Get a free sourcing quote
          </h2>
          <p className="mt-4 text-ink-700 text-lg leading-relaxed">
            Tell us about your product, target price, and quantities. Our sourcing team will reply
            with a tailored proposal — supplier options, indicative pricing, and a realistic
            timeline.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-ink-200 bg-surface-muted p-5">
            <p className="text-sm font-semibold text-brand-navy">Prefer email?</p>
            <p className="mt-1 text-sm text-ink-700">
              Write to <a className="text-brand-blue underline-offset-4 hover:underline" href="mailto:hello@ssourcingchina.com">hello@ssourcingchina.com</a>{' '}
              with your specs and target quantity.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <InquiryForm sourcePage={sourcePage} />
        </div>
      </div>
    </section>
  )
}
