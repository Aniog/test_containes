import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import InquiryForm from "./InquiryForm"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@ssourcingchina.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+86 755 0000 0000" },
  { icon: MapPin, label: "Location", value: "Shenzhen, Guangdong, China" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
]

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get a Free Sourcing Quote"
              title="Tell us what you need to source"
              description="Share your product, target price, and timeline. We'll come back with verified supplier options and a clear plan, at no cost for the initial review."
              align="left"
            />

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm text-slate-700">
                Your product ideas and specifications are kept confidential. We
                can sign an NDA before you share details.
              </p>
            </div>
          </div>

          <div id="inquiry-form-wrapper">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
