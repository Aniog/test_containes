import { Section } from '@/components/ui/Section'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground leading-[1.15]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-primary-foreground/85 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
