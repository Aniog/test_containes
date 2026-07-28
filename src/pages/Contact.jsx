import PageHero from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/shared/Section"
import InquiryForm from "@/components/contact/InquiryForm"
import FAQSection from "@/components/shared/FAQSection"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "inquiry@ssourcingchina.com", sub: "We reply within one business day" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+86 755 0000 0000", sub: "Mon-Fri, 9:00-18:00 (GMT+8)" },
  { icon: MapPin, label: "Office", value: "Shenzhen, Guangdong, China", sub: "Visits by appointment" },
  { icon: Clock, label: "Response Time", value: "Within 1 business day", sub: "For all sourcing inquiries" },
]

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get a Free Sourcing Quote"
        title="Let's Source Your Next Product"
        subtitle="Tell us what you need. A dedicated sourcing coordinator will review your requirements and reply with a clear plan and a free, no-obligation quote within one business day."
      />

      <Section className="bg-bg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <SectionHeader
              align="left"
              eyebrow="Contact Details"
              title="Reach Our Team"
              subtitle="Prefer to reach out directly? Here is how to get in touch."
            />
            <div className="mt-8 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4 rounded-xl border border-line bg-surface p-5 shadow-sm">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-base font-bold text-ink mt-0.5">{item.value}</div>
                      <div className="text-sm text-muted mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-xl bg-primary-dark p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-accent" />
                <h3 className="font-bold">What happens next?</h3>
              </div>
              <ol className="space-y-2 text-sm text-slate-200 list-decimal list-inside">
                <li>We review your requirements</li>
                <li>A coordinator replies within 1 business day</li>
                <li>You receive a free, no-obligation quote</li>
                <li>If you proceed, we start sourcing right away</li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <FAQSection
        eyebrow="Before You Ask"
        title="Quick Answers About Working With Us"
        subtitle="Common questions about how we work, pricing, and what to expect."
      />
    </>
  )
}
