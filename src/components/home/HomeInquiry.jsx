import InquiryForm from '@/components/InquiryForm.jsx'
import { CheckCircle2, Clock, MessageSquare } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const REASONS = [
  'A shortlist of 3–5 vetted Chinese factories with indicative pricing',
  'A clear sourcing plan based on your product, quantity, and timeline',
  'Honest feedback on feasibility, MOQ, and lead time — no sales pitch',
]

export default function HomeInquiry() {
  const ref = useStrkImages()

  return (
    <section ref={ref} className="section-pad bg-brand-mist" id="inquiry">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="label-eyebrow">Free sourcing consultation</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Tell us what you need. We will reply within 24 hours.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Submit your product brief and we will send back a sourcing plan, a shortlist of factories, and an indicative cost — at no charge. We are direct, practical, and we will tell you honestly if a project is not a fit.
            </p>

            <ul className="mt-6 space-y-3">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand-accent-soft text-brand-accent">
                  <Clock className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-brand-ink">Within 24h</div>
                  <div className="text-xs text-slate-500">Quote turnaround</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand-accent-soft text-brand-accent">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-brand-ink">English</div>
                  <div className="text-xs text-slate-500">Native-level support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
