import { useRef } from "react"
import { useImageHelper } from "@/hooks/useImageHelper"
import { Container, Section } from "@/components/ui/Section"
import StarRating from "@/components/ui/StarRating"
import { TESTIMONIALS } from "@/data/content"

export default function Testimonials() {
  const ref = useRef(null)
  useImageHelper(ref)

  return (
    <Section background="paper" spacing="lg" ref={ref}>
      <Container>
        <div className="text-center mb-14 md:mb-20">
          <p className="eyebrow text-gold-deep mb-4">The Verdict</p>
          <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl text-ink">
            Loved by
            <span className="italic font-light"> thousands</span>.
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.id}
              className="bg-paper-warm border border-mist p-7 md:p-9 flex flex-col"
            >
              <StarRating value={t.rating} />
              <blockquote className="mt-5 font-serif text-lg md:text-xl leading-relaxed text-ink flex-1">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <p
                id={`testimonial-name-${t.id}`}
                className="mt-6 text-[11px] uppercase tracking-eyebrow text-taupe"
              >
                — {t.name}, Verified Buyer
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
