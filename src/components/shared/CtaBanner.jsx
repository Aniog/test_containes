import { Section, Container } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export default function CtaBanner({
  title = "Ready to source from China with confidence?",
  description = "Tell us about your product and target. We'll come back with a free sourcing quote and a clear plan.",
}) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#0B2545] px-6 py-14 md:px-12 md:py-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#1B6CA8]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">
                {description}
              </p>
            </div>
            <Button to="/contact" variant="accent" size="lg" className="shrink-0">
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
