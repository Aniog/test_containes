import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Container, Button } from "@/components/ui/primitives"

export default function CtaSection() {
  return (
    <section className="bg-blue-700 py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Tell us what you need to source. We will review your requirements and reply within one business day.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              {["No obligation", "Reply within 1 business day", "Clear quote upfront"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-blue-50">
                  <CheckCircle2 className="h-4 w-4 text-blue-200" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <Button to="/contact" variant="light" className="shrink-0 gap-2">
            Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
