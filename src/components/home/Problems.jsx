import SectionHeader from '@/components/shared/SectionHeader'
import { problems } from '@/data/content'

export default function Problems() {
  return (
    <section id="problems" className="py-20 md:py-24 bg-brand-mist">
      <div className="container-page">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="The issues overseas buyers run into — and how we handle them"
          description="We have seen the same problems come up across hundreds of sourcing projects. Here is how we address each one."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {problems.map((p, i) => (
            <article
              key={p.title}
              className="bg-white border border-brand-line rounded-xl p-6 md:p-7"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-accent">
                0{i + 1}
              </p>
              <h3 className="mt-3 text-lg md:text-xl font-semibold text-brand-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}