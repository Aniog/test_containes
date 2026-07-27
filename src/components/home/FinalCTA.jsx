import { ArrowRight } from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function FinalCTA() {
  return (
    <Section background="navy">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to source from China with a partner you can trust?
          </h2>
          <p className="mt-4 text-lg text-slate-200 leading-relaxed max-w-3xl">
            Send us your sourcing brief today. We will reply within 24 hours
            with a shortlist of pre-vetted factories, indicative pricing, and a
            clear next-step plan — no commitment, no cost.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/case-studies" variant="outlineLight" size="lg">
            See case studies
          </Button>
        </div>
      </div>
    </Section>
  )
}
