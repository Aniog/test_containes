/* Individual generator card — used inside subsections (no category tag) */
export default function GeneratorCard({ name, description, slug, hidden }) {
  return (
    <a
      href={`/generators/${slug}`}
      className={`gen-card flex flex-col${hidden ? ' card-search-hidden' : ''}`}
      aria-hidden={hidden ? 'true' : undefined}
      tabIndex={hidden ? -1 : undefined}
      style={{ minHeight: 100 }}
    >
      <span
        className="font-heading"
        style={{ fontSize: 13, color: '#4B5056', marginBottom: 6, display: 'block', lineHeight: 1.3 }}
      >
        {name}
      </span>
      <p style={{ color: '#636972', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
        {description}
      </p>
    </a>
  );
}
