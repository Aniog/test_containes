import { Container } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function HomeCTA() {
  return (
    <section className="py-20 md:py-28 bg-steel text-white">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Get Started
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Ready to upgrade your folding operation?
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl">
            Talk to our engineers about your application and get a tailored
            quote for the right ARTITECT folder or folding machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button to="/contact" variant="accent">
              Request a Quote
            </Button>
            <Button to="/products" variant="outlineLight">
              Browse Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
