import Button from "@/components/ui/Button"
import { SectionContainer } from "@/components/ui/Section"
import { PRIMARY_CTA } from "@/data/site"

export default function CtaBand({
  title = "Ready to source with confidence?",
  description = "Tell us what you need. We'll send a clear plan and a free, no-obligation quote within 1–2 business days.",
  buttonText = PRIMARY_CTA.label,
  buttonTo = PRIMARY_CTA.to,
}) {
  return (
    <section className="bg-primary">
      <SectionContainer className="py-16 md:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {description}
          </p>
          <Button to={buttonTo} variant="primary" size="lg">
            {buttonText}
          </Button>
        </div>
      </SectionContainer>
    </section>
  )
}
