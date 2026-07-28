import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import InquiryForm from "@/components/shared/InquiryForm"
import FaqAccordion from "@/components/shared/FaqAccordion"
import { faqs } from "@/data/faqs"
import { contactInfo } from "@/data/site"

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    detail: "Best for detailed specs and quotes",
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    detail: "Mon-Fri, GMT+8",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contactInfo.whatsapp,
    detail: "Fastest for quick questions",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.address,
    detail: "On the ground in major manufacturing hubs",
  },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        eyebrow="Get a Free Sourcing Quote"
        title="Tell us what you want to source"
        description="Share your product and requirements. A sourcing specialist will reply within one business day with next steps - no obligation, no upfront fee."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Ways to reach us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pick whichever is easiest for you. For new projects, the form on
                the right gives us the details we need to prepare a useful quote.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactCards.map(({ icon: Icon, label, value, detail }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-border bg-muted p-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">
                    Working hours & response time
                  </h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {contactInfo.hours}
                  </li>
                  <li>Quote requests: replied within 1 business day</li>
                  <li>Active orders: updates at every production milestone</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Request your free quote
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The more detail you share, the more accurate your shortlist and
                quote will be.
              </p>
              <InquiryForm className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-600">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quick answers before you reach out
            </h2>
          </div>
          <div className="mt-12">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  )
}
