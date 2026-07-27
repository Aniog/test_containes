import { Clock, ShieldCheck, FileText } from 'lucide-react'
import InquiryForm from '@/components/InquiryForm.jsx'

export default function InquirySection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Start Sourcing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Get a free sourcing quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us what you want to source and a specialist will come back with a practical plan
              and transparent pricing — usually within one business day.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Reply within 24 hours</p>
                  <p className="text-sm text-slate-600">One business day, often faster.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">No-obligation quote</p>
                  <p className="text-sm text-slate-600">Clear scope and pricing before you decide anything.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Your details stay private</p>
                  <p className="text-sm text-slate-600">We never share your product ideas or contact details.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
