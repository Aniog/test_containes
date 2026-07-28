import { Mail, Clock, ShieldCheck } from "lucide-react"
import { Section, Container } from "@/components/ui/section"
import InquiryForm from "@/components/shared/InquiryForm"

const sidePoints = [
  {
    icon: Clock,
    title: "Reply within one business day",
    description: "A project manager reviews your request and responds quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential by default",
    description: "Your product ideas and details stay between us and you.",
  },
  {
    icon: Mail,
    title: "No obligation",
    description: "The initial sourcing quote is free, with no commitment.",
  },
]

export default function HomeInquiry() {
  return (
    <Section id="inquiry" className="bg-muted/50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Get started
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get a free sourcing quote
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Share what you want to source. We'll review feasibility, suggest
              next steps, and send a clear quote — no pressure.
            </p>

            <ul className="mt-8 space-y-5">
              {sidePoints.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="quote-form">
            <InquiryForm sourcePage="home" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
