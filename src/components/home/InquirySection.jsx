import React from 'react'
import { Section } from '../Section'
import InquiryForm from '../InquiryForm'
import { Mail, Clock, ShieldCheck } from 'lucide-react'

export default function InquirySection() {
  return (
    <Section id="inquiry" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Get a Free Sourcing Quote</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Tell us about your sourcing project
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Share a few details and we will send back a tailored proposal — including
            shortlisted suppliers, indicative pricing, and recommended next steps.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-700 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Response within 1 business day</p>
                <p className="text-sm text-slate-600">Real reply from a sourcing manager, not a bot.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-blue-700 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-900">No upfront commitment</p>
                <p className="text-sm text-slate-600">Initial sourcing consultation is free.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-blue-700 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Confidential</p>
                <p className="text-sm text-slate-600">Your product details stay private. NDA available on request.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <InquiryForm />
          </div>
        </div>
      </div>
    </Section>
  )
}
