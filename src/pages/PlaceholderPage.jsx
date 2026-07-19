import { Link } from "react-router-dom"
import { Container, Section } from "@/components/ui/Section"

export default function PlaceholderPage({ eyebrow, heading, body, ctaLabel, ctaHref }) {
  return (
    <Section background="paper" spacing="lg" className="pt-32 md:pt-40 min-h-[60vh]">
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? <p className="eyebrow text-gold-deep mb-4">{eyebrow}</p> : null}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            {heading}
          </h1>
          {body ? (
            <p className="mt-6 text-base md:text-lg text-ink/80 leading-relaxed max-w-xl">
              {body}
            </p>
          ) : null}
          {ctaLabel ? (
            <Link to={ctaHref || "/shop"} className="btn-primary mt-9">
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}
