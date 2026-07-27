import { Button } from "@/components/ui/button"

export default function CtaBanner({
  title = "Ready to source with confidence?",
  description = "Tell us about your product and order requirements. We will prepare a clear, no-obligation sourcing quote.",
}) {
  return (
    <section className="bg-brand py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-slate-300">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="primary">
              Get a Free Sourcing Quote
            </Button>
            <Button to="/services" variant="ghostLight">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
