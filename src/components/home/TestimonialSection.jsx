import { Container, Section } from "@/components/ui/primitives"
import { Icon } from "@/components/shared/icons"
import { TESTIMONIAL } from "@/data/content"

export default function TestimonialSection() {
  return (
    <Section className="bg-white">
      <Container className="max-w-4xl">
        <figure className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <Icon
            name="quote"
            className="h-8 w-8 text-amber-500"
            strokeWidth={1.5}
          />
          <blockquote className="mt-4 text-lg md:text-xl text-slate-900 leading-relaxed font-medium">
            "{TESTIMONIAL.quote}"
          </blockquote>
          <figcaption className="mt-6 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">
              {TESTIMONIAL.author}
            </span>
            <span className="text-slate-500"> · {TESTIMONIAL.company}</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}