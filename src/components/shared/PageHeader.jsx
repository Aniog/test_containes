import { Container } from "@/components/shared/Section"

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-brand-dark text-white">
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
