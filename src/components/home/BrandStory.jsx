import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useImageHelper } from "@/hooks/useImageHelper"
import StrkImage from "@/components/ui/StrkImage"
import { Container, Section } from "@/components/ui/Section"
import { STORY } from "@/data/content"

export default function BrandStory() {
  const ref = useRef(null)
  useImageHelper(ref)

  return (
    <Section background="paper-warm" spacing="lg" ref={ref}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <StrkImage
                imgId="brand-story-portrait"
                query={`[story-heading] [story-eyebrow] ${STORY.queryHint}`}
                ratio="4x5"
                width={1200}
                alt="Inside the Velmora atelier"
                className="absolute inset-0 h-full w-full"
                imgClassName="hover:scale-[1.02] duration-700"
              />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-eyebrow text-taupe">
              Inside our Lisbon atelier · 2026
            </p>
          </div>

          <div className="lg:col-span-6 order-2">
            <p
              id="story-eyebrow"
              className="eyebrow text-gold-deep mb-5"
            >
              {STORY.eyebrow}
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em]"
            >
              {STORY.heading.split(". ")[0]}.
              <br />
              <span className="italic font-light">
                {STORY.heading.split(". ")[1]}
              </span>
              .
            </h2>
            <p className="mt-7 text-base md:text-lg text-ink/80 leading-relaxed max-w-lg">
              {STORY.body}
            </p>
            <Link
              to={STORY.linkHref}
              className="mt-9 inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink hover:text-gold-deep transition-colors border-b border-ink/30 hover:border-gold-deep pb-1"
            >
              {STORY.linkLabel}
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
