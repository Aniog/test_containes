import { Section } from "@/components/ui/Section"
import { InquiryForm } from "@/components/shared/InquiryForm"

export function InquiryCTASection() {
  return (
    <Section bg="navySubtle" id="inquiry">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent-600">Start a project</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Get a free sourcing quote within 1–3 business days
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Send us what you need. We'll come back with a sourcing plan, an
            initial supplier shortlist, and a clear service fee. No obligation,
            no spam.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
              <span>Direct email: <a className="text-navy-900 font-semibold hover:text-accent-600" href="mailto:sourcing@ssourcingchina.com">sourcing@ssourcingchina.com</a></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
              <span>WhatsApp / WeChat available on request</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
              <span>Office hours: Mon–Sat, 09:00–19:00 (GMT+8)</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </Section>
  )
}

export default InquiryCTASection
