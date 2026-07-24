import SectionIntro from '@/components/common/SectionIntro'
import Stars from '@/components/common/Stars'

const TestimonialsSection = ({ items }) => {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Loved by customers"
        title="Words from the Velmora circle"
        description="Thoughtful gifting, effortless styling, and quality that feels elevated from the first unboxing."
        align="center"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-[28px] border border-velvet/10 bg-white p-6 text-velvet shadow-soft"
          >
            <div className="space-y-5">
              <Stars rating={5} />
              <p className="text-sm leading-7 text-velvet/70">“{item.quote}”</p>
              <p className="text-xs uppercase tracking-eyebrow text-velvet/50">{item.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
