import strings from '../../data/strings';
import { featuredGenerators } from '../../data/generators';

const s = strings.en.featured;

function FeaturedCard({ name, description, category, slug }) {
  return (
    <a
      href={`/generators/${slug}`}
      className="gen-card flex flex-col"
      style={{ minHeight: 120 }}
    >
      <div className="flex items-start justify-between gap-2" style={{ marginBottom: 8 }}>
        <span
          className="font-heading"
          style={{ fontSize: 14, color: '#4B5056', lineHeight: 1.3, flex: 1 }}
        >
          {name}
        </span>
        <span className="cat-tag flex-shrink-0">{category}</span>
      </div>
      <p style={{ color: '#636972', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
        {description}
      </p>
    </a>
  );
}

export default function FeaturedGenerators() {
  return (
    <section
      aria-labelledby="featured-heading"
      style={{ background: '#F4F6F8', paddingBlock: 60 }}
    >
      <div className="content-wrap">
        <h2
          id="featured-heading"
          className="font-heading"
          style={{ color: '#4B5056', fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 8 }}
        >
          {s.heading}
        </h2>
        <p style={{ color: '#636972', fontSize: 15, marginBottom: 30, marginTop: 0 }}>
          {s.subheading}
        </p>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {featuredGenerators.map((gen) => (
            <FeaturedCard key={gen.slug} {...gen} />
          ))}
        </div>
      </div>
    </section>
  );
}
