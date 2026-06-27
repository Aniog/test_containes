import { featuredGenerators, strings } from '../../data/generators-data';

const s = strings.en;

function FeaturedCard({ name, slug, description, category }) {
  return (
    <a
      href={`/generators/${slug}`}
      className="strk-card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="feat-card-name">{name}</div>
      <p className="feat-card-desc">{description}</p>
      <span className="strk-tag">{category}</span>
    </a>
  );
}

export default function FeaturedGenerators() {
  return (
    <section className="strk-section strk-section--light">
      <div className="strk-container">
        <h2 className="strk-section-heading">{s.featuredHeading}</h2>
        <p className="strk-section-sub">{s.featuredSub}</p>
        <div className="strk-grid-3">
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <FeaturedCard {...gen} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
