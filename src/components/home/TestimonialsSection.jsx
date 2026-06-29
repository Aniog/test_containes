import RatingStars from '@/components/ui/RatingStars'
import SectionHeading from '@/components/ui/SectionHeading'

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="bg-[var(--color-surface)] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Customer notes"
          title="Loved for gifting, kept for every day"
          description="A few of the kind words shared by women returning for another piece, another gift, and another golden staple."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="border border-[var(--color-border-subtle)] bg-[var(--color-card)] px-6 py-7 text-[var(--color-text-primary)] shadow-[var(--shadow-soft)]"
            >
              <RatingStars rating={5} reviewCount={0} />
              <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)]">
                “{item.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
