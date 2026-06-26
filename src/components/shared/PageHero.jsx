import { Container, Section } from "@/components/ui/primitives"
import { Eyebrow } from "@/components/ui/primitives"

export default function PageHero({ eyebrow, title, description, children, bgImage }) {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      {bgImage && (
        <div
          className="absolute inset-0 opacity-25"
          aria-hidden="true"
          data-strk-bg-id={bgImage.id}
          data-strk-bg={bgImage.query}
          data-strk-bg-ratio={bgImage.ratio || "16x9"}
          data-strk-bg-width={bgImage.width || 1600}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/60"
        aria-hidden="true"
      />
      <Container className="relative z-10 py-16 md:py-20">
        {eyebrow && (
          <Eyebrow className="text-amber-300">{eyebrow}</Eyebrow>
        )}
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-base md:text-lg text-slate-200 leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  )
}