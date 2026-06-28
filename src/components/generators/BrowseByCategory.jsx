import { categories, strings } from "../../data/generatorsData.js";

const s = strings.en;

// Category illustrations — simple inline SVG per category
const categoryIcons = {
  websites: (
    <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="4" y="8" width="40" height="10" rx="4" fill="#8159BB" opacity="0.12" />
      <circle cx="11" cy="13" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="18" cy="13" r="2" fill="#7671FF" opacity="0.5" />
      <rect x="10" y="24" width="28" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="10" y="31" width="20" height="3" rx="1.5" fill="#C6C9CD" />
    </svg>
  ),
  "landing-pages": (
    <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="#7671FF" strokeWidth="1.8" fill="none" />
      <rect x="12" y="14" width="24" height="4" rx="2" fill="#7671FF" opacity="0.4" />
      <rect x="16" y="22" width="16" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="14" y="30" width="20" height="8" rx="3" fill="url(#lp-grad)" />
      <text x="24" y="36.5" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#fff" fontWeight="700">CTA</text>
      <defs>
        <linearGradient id="lp-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="10" width="18" height="14" rx="2" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="26" y="10" width="18" height="14" rx="2" fill="#7671FF" opacity="0.2" stroke="#7671FF" strokeWidth="1.5" />
      <rect x="4" y="28" width="18" height="10" rx="2" fill="#CB0C9F" opacity="0.15" stroke="#CB0C9F" strokeWidth="1.5" />
      <rect x="26" y="28" width="18" height="10" rx="2" fill="#8159BB" opacity="0.15" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="4" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="12" y="15" width="24" height="4" rx="2" fill="#8159BB" opacity="0.5" />
      <rect x="12" y="23" width="24" height="2.5" rx="1.25" fill="#C6C9CD" />
      <rect x="12" y="28" width="18" height="2.5" rx="1.25" fill="#C6C9CD" />
      <rect x="12" y="33" width="20" height="2.5" rx="1.25" fill="#C6C9CD" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M8 14h32l-3 14H11L8 14z" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <path d="M8 14l-2-6H4" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="34" r="3" fill="#8159BB" opacity="0.5" />
      <circle cx="32" cy="34" r="3" fill="#8159BB" opacity="0.5" />
      <rect x="18" y="20" width="12" height="2.5" rx="1.25" fill="#7671FF" opacity="0.5" />
    </svg>
  ),
  "link-in-bio": (
    <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="14" y="4" width="20" height="40" rx="5" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="18" y="14" width="12" height="5" rx="2.5" fill="#7671FF" opacity="0.4" />
      <rect x="18" y="22" width="12" height="5" rx="2.5" fill="#CB0C9F" opacity="0.3" />
      <rect x="18" y="30" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.3" />
      <circle cx="24" cy="9" r="2" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
};

// Right arrow icon
const ArrowRight = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M7 4l5 5-5 5"
      stroke="#8159BB"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BrowseByCategory() {
  return (
    <section
      style={{ paddingBlock: "60px", background: "#ffffff" }}
      aria-labelledby="category-heading"
    >
      <div className="content-wrap">
        <h2
          id="category-heading"
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            margin: "0 0 30px",
          }}
        >
          {s.categoryHeading}
        </h2>

        <div className="grid-3">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators${cat.anchor}`}
              className="gen-card"
              aria-label={`Browse ${cat.name} generators`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>{categoryIcons[cat.slug]}</div>
                <ArrowRight />
              </div>
              <strong
                className="font-heading"
                style={{
                  color: "#2E2E2F",
                  fontSize: "14px",
                  display: "block",
                }}
              >
                {cat.name.toUpperCase()}
              </strong>
              <span
                style={{
                  color: "#636972",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                {cat.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const { categoryHeading } = s;
export { categoryIcons };
