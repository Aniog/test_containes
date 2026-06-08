import { strings } from '@/data/strings'
import { featuredGenerators } from '@/data/generators'

const t = strings.en.featured

const FeaturedGenerators = () => {
  return (
    <section className="bg-bg-light py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl text-center mb-1.5">
          {t.heading}
        </h2>
        <p className="text-body-text text-center mb-8">{t.sub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded p-5 card-hover"
            >
              <span className="font-heading text-heading-dark text-sm block mb-1.5">
                {gen.name}
              </span>
              <span className="text-body-text text-sm block mb-3">
                {gen.description}
              </span>
              <span className="inline-block text-xs font-heading text-brand-purple border border-brand-purple rounded px-1.5 py-0.5">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGenerators
