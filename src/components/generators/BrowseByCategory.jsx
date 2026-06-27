import strings from '@/strings/strings.en.js'
import { categories } from '@/data/generators.js'
import { CategoryIcon, ArrowRightIcon } from './Icons.jsx'

export default function BrowseByCategory() {
  const keys = Object.keys(strings.categories.items)

  return (
    <section className="gen-section gen-section-muted" aria-labelledby="categories-heading">
      <div className="gen-container">
        <div className="gen-section-header">
          <h2 id="categories-heading" className="gen-h2">{strings.categories.heading}</h2>
        </div>
        <div className="gen-categories-grid">
          {categories.map((cat, index) => {
            const key = keys[index]
            const s = strings.categories.items[key]
            return (
              <a
                key={cat.id}
                href={`/generators#${cat.slug}`}
                className="gen-card gen-card-link gen-category-card"
              >
                <CategoryIcon className="gen-category-icon" width={48} height={48} />
                <span className="gen-category-name">{s?.name ?? cat.name}</span>
                <span className="gen-card-desc">{s?.description ?? cat.description}</span>
                <span className="gen-category-arrow">
                  <ArrowRightIcon />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
