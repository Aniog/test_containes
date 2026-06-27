import { featuredGenerators } from '../data/generators'
import { strings } from '../data/strings'

export default function FeaturedGenerators() {
  const t = strings.en

  return (
    <section className="featured" aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading" className="section-heading">{t.featuredHeading}</h2>
        <p className="section-subheading">{t.featuredSubheading}</p>
        <div className="featured-grid">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="featured-card"
            >
              <h3 className="featured-card-name">{gen.name}</h3>
              <p className="featured-card-desc">{gen.description}</p>
              <span className="featured-card-tag">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
