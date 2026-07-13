import Section from "@/components/shared/Section.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import { CheckCircle2 } from "lucide-react"

const promise = [
  "Reply within 1 business day",
  "Transparent quote — no surprise fees",
  "Direct factory introduction, no middleman",
]

export default function HomeInquiry() {
  return (
    <Section className="bg-white" id="inquiry">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3">Get a free sourcing quote</p>
          <h2 className="h-section">Tell us about your project</h2>
          <p className="body-base mt-4">
            Share a short description of the product you want to source, your
            target quantity and timeline, and the services you need. A sourcing
            specialist will come back with a written plan and a transparent
            quote within one business day.
          </p>
          <ul className="mt-6 space-y-3">
            {promise.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500">
            We typically reply within 1 business day. We use the information
            you share only to prepare your sourcing plan and quote.
          </p>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm sourcePageHint="/#inquiry" />
        </div>
      </div>
    </Section>
  )
}
