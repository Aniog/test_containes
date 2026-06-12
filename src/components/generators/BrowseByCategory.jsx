import strings from '../../data/strings';
import { browseCategories } from '../../data/generators';
import { getCategoryIcon } from './CategoryIcons';

const s = strings.en.browseByCategory;

function CategoryCard({ id, name, description, href }) {
  return (
    <a
      href={href}
      className="gen-card flex flex-col"
      style={{ minHeight: 140 }}
    >
      <div style={{ marginBottom: 12 }}>
        {getCategoryIcon(id, 36)}
      </div>
      <span
        className="font-heading"
        style={{ fontSize: 13, color: '#4B5056', marginBottom: 6, display: 'block' }}
      >
        {name}
      </span>
      <p style={{ color: '#636972', fontSize: 13, lineHeight: 1.5, margin: 0, flex: 1 }}>
        {description}
      </p>
      <div
        style={{
          marginTop: 14,
          color: '#8159BB',
          fontSize: 18,
          lineHeight: 1,
          alignSelf: 'flex-end',
        }}
        aria-hidden="true"
      >
        →
      </div>
    </a>
  );
}

export default function BrowseByCategory() {
  return (
    <section
      aria-labelledby="browse-heading"
      style={{ background: '#ffffff', paddingBlock: 60 }}
    >
      <hr className="section-divider" />
      <div className="content-wrap" style={{ paddingTop: 60 }}>
        <h2
          id="browse-heading"
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {browseCategories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
