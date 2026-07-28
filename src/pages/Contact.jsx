import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, Container } from "@/components/ui/section"
import InquiryForm from "@/components/shared/InquiryForm"

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@ssourcingchina.com",
    note: "Best for detailed inquiries with specs.",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+86 755 0000 0000",
    note: "Mon–Fri, 9:00–18:00 (GMT+8).",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Shenzhen, Guangdong, China",
    note: "Close to major manufacturing hubs.",
  },
  {
    icon: Clock,
    title: "Response time",
    value: "Within one business day",
    note: "A project manager replies to every request.",
  },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. We'll review your requirements and reply within one business day — no obligation."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  Talk to a sourcing manager
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer to reach us directly? Use the channels below. For the
                  fastest, most useful response, use the form and include your
                  product and quantity.
                </p>

                <ul className="mt-6 space-y-5">
                  {contactItems.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          {item.title}
                        </h3>
                        <p className="text-base font-bold text-foreground">
                          {item.value}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm sourcePage="contact" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
