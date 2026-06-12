import { strings } from '../../data/strings'
import { featuredWithSlugs } from '../../data/generators'

const t = strings.en.featured

export default function FeaturedGenerators() {
  return (
    <section className="py-10 bg-bg-light">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl text-center">
          {t.heading}
        </h2>
        <p className="mt-2.5 text-body-text font-body text-center">
          {t.sub}
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredWithSlugs.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-card p-5 transition-all hover:shadow-md hover:border-brand-purple focus-ring"
            >
              <span className="block font-heading font-bold uppercase text-heading-dark text-sm">
                {gen.name}
              </span>
              <span className="block mt-1.5 text-body-text font-body text-sm">
                {gen.desc}
              </span>
              <span className="inline-block mt-2.5 text-[11px] font-heading font-bold uppercase px-1.5 py-0.5 rounded-card border border-brand-purple text-brand-purple">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
