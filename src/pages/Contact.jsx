import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from "lucide-react"
import PageHeader from "@/components/ui/page-header"
import { SectionHeading } from "@/components/ui/section-heading"
import InquiryForm from "@/components/sections/InquiryForm"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@ssourcingchina.com", sub: "We reply within 1 business day" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+86 755 0000 0000", sub: "Mon-Fri, 9:00-18:00 (GMT+8)" },
  { icon: MapPin, label: "Office", value: "Shenzhen, Guangdong, China", sub: "Visits by appointment" },
  { icon: Globe, label: "Service area", value: "Worldwide", sub: "Buyers across 40+ countries" },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you need to source. We'll review your requirements and come back with verified supplier options and a clear plan."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Talk to a sourcing specialist"
                description="Whether you're sourcing a new product or improving an existing supply chain, we're here to help."
                align="left"
              />

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-ink">{item.value}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand/20 bg-brand/5 p-5">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Prefer to chat first?
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Send us a quick WhatsApp message with your product and
                    quantity, and we'll take it from there.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <Clock className="h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-ink">Response time:</span>{" "}
                  within 1 business day for all inquiries.
                </p>
              </div>
            </div>

            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
