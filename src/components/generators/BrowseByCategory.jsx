import { categories, strings } from '../../data/generators-data';
import { categoryIconMap } from './CategoryIcons';

const s = strings.en;

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-arrow">
      <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CategoryCard({ name, slug, description }) {
  const Icon = categoryIconMap[slug];
  return (
    <a
      href={`/generators#${slug}`}
      className="strk-card cat-card"
      aria-label={`Browse ${name} generators`}
    >
      {Icon && <Icon />}
      <div className="cat-card-name">{name}</div>
      <p className="cat-card-desc">{description}</p>
      <ArrowRight />
    </a>
  );
}

export default function BrowseByCategory() {
  return (
    <section className="strk-section">
      <div className="strk-container">
        <h2 className="strk-section-heading">{s.browseHeading}</h2>
        <div className="strk-grid-3" style={{ marginBlockStart: '30px' }}>
          {categories.map((cat) => (
            <article key={cat.slug}>
              <CategoryCard {...cat} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
