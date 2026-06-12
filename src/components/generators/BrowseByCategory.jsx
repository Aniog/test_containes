import { categories } from '../../data/generators.js';
import { categoryIcons } from './CategoryIcons.jsx';
import s from '../../data/strings.js';

function CategoryCard({ id, name, description, anchor }) {
  const Icon = categoryIcons[id];
  return (
    <a
      href={anchor}
      className="generator-card flex flex-col gap-4"
      aria-label={`Browse ${name} generators`}
    >
      <div className="flex items-start justify-between">
        {Icon && <Icon size={40} />}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-1 flex-shrink-0">
          <path d="M7 4l6 6-6 6" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#4B5056',
            marginBottom: 6,
          }}
        >
          {name}
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
      </div>
    </a>
  );
}

export default function BrowseByCategory() {
  return (
    <section className="bg-light-bg" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="content-container">
        <div className="mb-8">
          <h2
            className="section-heading m-0 mb-2"
            style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
          >
            {s.browseHeading}
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: '#636972', margin: 0 }}>
            {s.browseSubheading}
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
