import Button from "@/components/ui/Button"
import Section from "@/components/ui/Section"

export default function CtaBanner({ title, description }) {
  return (
    <Section className="py-0">
      <div className="overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center shadow-sm lg:px-16 lg:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title || "Ready to source with confidence?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
          {description ||
            "Tell us what you need to source. We'll review your request and respond within one business day with next steps."}
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
    </Section>
  )
}
