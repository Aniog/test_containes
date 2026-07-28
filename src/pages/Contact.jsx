import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import InquiryForm from "@/components/shared/InquiryForm"
import { Container, SectionHeader } from "@/components/shared/Section"
import FaqAccordion from "@/components/shared/FaqAccordion"
import { faqs } from "@/data/faqs"

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Share your product requirements and a sourcing specialist will reply within one business day with a plan and indicative pricing."
      />

      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <SectionHeader
                align="left"
                eyebrow="Talk to us"
                title="Direct lines to our team"
                description="Prefer to reach out directly? Use any of the channels below."
              />

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "inquiry@ssourcingchina.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: "+86 755 0000 0000",
                  },
                  {
                    icon: MessageSquare,
                    label: "Inquiries",
                    value: "Mon–Fri, 9:00–18:00 (GMT+8)",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Shenzhen, Guangdong, China",
                  },
                  {
                    icon: Clock,
                    label: "Response time",
                    value: "Within one business day",
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 shadow-card"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light shrink-0">
                        <Icon className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-ink">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-ink">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions before you reach out?"
            description="Here are quick answers to what buyers usually ask first."
          />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>
    </>
  )
}
