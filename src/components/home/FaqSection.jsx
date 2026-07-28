import { Link } from "react-router-dom"
import { faqs } from "@/data/faqs"
import { SectionHeading } from "@/components/ui/section-heading"
import FaqAccordion from "@/components/shared/FaqAccordion"

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers often ask"
          description="Straight answers about how we work, what we charge, and what to expect."
        />

        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Talk to a sourcing specialist
          </Link>
        </p>
      </div>
    </section>
  )
}
