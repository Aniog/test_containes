import Button from "@/components/ui/button"
import { Container } from "@/components/ui/section"

export default function CtaBanner({
  title = "Ready to source with confidence?",
  description = "Tell us what you need. We'll review your requirements and send a free sourcing quote within one business day.",
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-lg md:px-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="accent" size="lg">
                Get a Free Sourcing Quote
              </Button>
              <Button to="/services" variant="white" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
