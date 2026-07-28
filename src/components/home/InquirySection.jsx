import { Mail, Phone, Clock, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import InquiryForm from "@/components/shared/InquiryForm"
import { contactInfo } from "@/data/site"

const items = [
  { icon: Mail, label: "Email", value: contactInfo.email },
  { icon: Phone, label: "Phone / WhatsApp", value: contactInfo.phone },
  { icon: Clock, label: "Working hours", value: contactInfo.hours },
]

export default function InquirySection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get a Free Sourcing Quote"
              title="Tell us what you want to source"
              description="Share your product and requirements. We'll come back with a shortlist of verified suppliers and a transparent quote - usually within one business day."
            />

            <ul className="mt-8 space-y-4">
              {items.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-white p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <p className="text-sm text-muted-foreground">
                No obligation, no upfront fee. We only move forward if our quote
                works for you.
              </p>
            </div>
          </div>

          <InquiryForm />
        </div>
      </div>
    </section>
  )
}
