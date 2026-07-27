import { Clock3, FileCheck2, Lock } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import InquiryForm from '@/components/shared/InquiryForm'
import FaqAccordion from '@/components/shared/FaqAccordion'
import { FAQS } from '@/data/site'

export default function InquirySection() {
  return (
    <>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Get Started"
                title="Get a free sourcing quote"
                description="Tell us what you want to source. A sourcing specialist will review your brief and reply within one business day with a clear plan and fee proposal."
              />
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="font-medium text-slate-900">Response within one business day</p>
                    <p className="text-sm text-slate-600">A real sourcing specialist — not an automated reply.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="font-medium text-slate-900">Clear fee proposal before any work</p>
                    <p className="text-sm text-slate-600">No hidden markups, no surprise invoices.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="font-medium text-slate-900">Your product details stay confidential</p>
                    <p className="text-sm text-slate-600">NDAs available on request before you share drawings.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions, straight answers"
            description="Everything buyers usually ask before starting a sourcing project with us."
          />
          <div className="mt-10">
            <FaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>
    </>
  )
}
