import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import { Section } from "@/components/ui/Section"
import InquiryForm from "@/components/sections/InquiryForm"

function ContactInfo() {
  const items = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@ssourcingchina.com",
      href: "mailto:hello@ssourcingchina.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+86 579 0000 0000",
      href: "tel:+8657900000000",
    },
    {
      icon: MapPin,
      title: "Locations",
      value: "Yiwu & Shenzhen, China",
    },
    {
      icon: Clock,
      title: "Response time",
      value: "Within one business day",
    },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.title}
          className="flex items-start gap-3 rounded-xl border border-line bg-white p-5"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <it.icon className="h-5 w-5 text-primary" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{it.title}</p>
            {it.href ? (
              <a
                href={it.href}
                className="text-body hover:text-primary hover:underline"
              >
                {it.value}
              </a>
            ) : (
              <p className="text-body">{it.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you need to source. We'll review your request and respond within one business day with next steps and a clear quote."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <MessageSquare className="h-5 w-5 text-accent" />
              </span>
              <h2 className="heading-3">Request your quote</h2>
            </div>
            <p className="mt-3 text-body">
              The more detail you share — product specs, target price,
              quantity, and timeline — the faster we can give you a useful
              response.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Contact details
              </h3>
              <div className="mt-4">
                <ContactInfo />
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-line bg-surface p-6">
              <h3 className="heading-3">What happens next</h3>
              <ol className="mt-4 space-y-3 text-body">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  We review your request and confirm scope within one business day.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  You receive a written quote with services, timeline, and fees.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  On approval, we begin supplier search and keep you updated at each stage.
                </li>
              </ol>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}
