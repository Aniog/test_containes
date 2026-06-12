import { featuredGenerators, toSlug } from '../../data/generators.js';
import s from '../../data/strings.js';

function FeaturedCard({ name, description, category }) {
  return (
    <a
      href={`/generators/${toSlug(name)}`}
      className="generator-card flex flex-col gap-3"
      aria-label={name}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          style={{
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: '#2E2E2F',
            lineHeight: 1.3,
          }}
        >
          {name}
        </span>
        <span className="category-tag flex-shrink-0">{category}</span>
      </div>
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 13,
          color: '#636972',
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </a>
  );
}

export default function FeaturedGenerators() {
  return (
    <section className="bg-white" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="content-container">
        <div className="mb-8">
          <h2
            className="section-heading m-0 mb-2"
            style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
          >
            {s.featuredHeading}
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: '#636972', margin: 0 }}>
            {s.featuredSubheading}
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuredGenerators.map((gen) => (
            <FeaturedCard key={gen.name} {...gen} />
          ))}
        </div>
      </div>
    </section>
  );
}
