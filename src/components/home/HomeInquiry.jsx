import { Mail, Phone, MapPin, Clock } from "lucide-react"
import InquiryForm from "@/components/shared/InquiryForm"
import { Container, SectionHeader } from "@/components/shared/Section"

export default function HomeInquiry() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Get a Free Sourcing Quote"
              title="Tell us what you need to source"
              description="Share your product requirements and we will prepare a free, no-obligation sourcing plan with verified supplier options and indicative pricing."
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
                  icon: MapPin,
                  label: "Location",
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
                  <div key={item.label} className="flex items-start gap-3">
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

          <InquiryForm />
        </div>
      </Container>
    </section>
  )
}
