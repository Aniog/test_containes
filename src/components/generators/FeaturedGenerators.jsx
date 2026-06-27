import strings from '@/strings/strings.en.js'
import { getFeaturedGenerators } from '@/data/generators.js'

export default function FeaturedGenerators() {
  const items = getFeaturedGenerators()

  return (
    <section className="gen-section" aria-labelledby="featured-heading">
      <div className="gen-container">
        <div className="gen-section-header">
          <h2 id="featured-heading" className="gen-h2">{strings.featured.heading}</h2>
          <p className="gen-section-sub">{strings.featured.subheading}</p>
        </div>
        <div className="gen-featured-grid">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`/generators/${item.slug}`}
              className="gen-card gen-card-link gen-featured-card"
            >
              <span className="gen-card-title">{item.name}</span>
              <span className="gen-card-desc">{item.description}</span>
              <span className="gen-tag">{item.categoryName}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

