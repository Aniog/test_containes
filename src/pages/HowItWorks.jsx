import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import StrkImageLoader from "@/components/shared/StrkImageLoader"
import {
  FileSearch,
  Building2,
  FlaskConical,
  ClipboardList,
  PackageCheck,
  Container,
} from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    title: "Submit Your Request",
    description:
      "Fill out our inquiry form or book a call. Share product specs, target price, quantity, certifications, and preferred delivery window.",
  },
  {
    icon: Building2,
    title: "Market Research & Shortlist",
    description:
      "We search our network and public databases to identify 2–5 qualified suppliers. Each is pre-screened for export experience and product fit.",
  },
  {
    icon: FlaskConical,
    title: "Verification & Sampling",
    description:
      "We verify licenses, request references, and arrange samples. For critical orders, we visit the factory in person.",
  },
  {
    icon: ClipboardList,
    title: "Quotation & Order Setup",
    description:
      "You receive a comparison table with pricing, MOQ, lead time, and terms. We help negotiate and draft the purchase contract.",
  },
  {
    icon: PackageCheck,
    title: "Production Monitoring",
    description:
      "We track milestones, report progress, and conduct inspections to catch quality issues before goods ship.",
  },
  {
    icon: Container,
    title: "Shipping & Delivery",
    description:
      "We review export documents, coordinate with forwarders, and support you until the cargo reaches your warehouse.",
  },
]

export default function HowItWorks() {
  return (
    <StrkImageLoader>
      <div className="bg-white">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 id="how-it-works-title" className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                How It Works
              </h1>
              <p id="how-it-works-subtitle" className="mt-4 text-lg text-muted">
                A transparent six-step workflow that keeps you informed and in control.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <Card key={index} className="relative transition-shadow hover:shadow-lift">
                  <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-card">
                    {index + 1}
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-16 grid items-center gap-10 rounded-2xl bg-background p-8 md:grid-cols-2 md:p-12">
              <div>
                <h2 className="text-2xl font-bold text-primary md:text-3xl">
                  What you can expect from us
                </h2>
                <ul className="mt-6 space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Clear, written updates in English</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Photos and videos from factory visits and inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>No pressure to place an order until you are ready</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Transparent fees with no hidden factory kickbacks</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  data-strk-img-id="how-it-works-img-b3c4d5"
                  data-strk-img="[how-it-works-title] [how-it-works-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sourcing agent reviewing factory documents"
                  className="rounded-2xl object-cover shadow-card"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </StrkImageLoader>
  )
}
