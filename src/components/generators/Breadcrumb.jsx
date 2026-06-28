import { strings } from "../../data/generatorsData.js";

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        borderBottom: "1px solid #E2E4E7",
        background: "#ffffff",
      }}
    >
      <div className="content-wrap" style={{ paddingBlock: "10px" }}>
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flexWrap: "wrap",
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: "#636972",
                fontSize: "13px",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8159BB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#636972")}
            >
              {s.breadcrumbHome}
            </a>
          </li>
          <li
            aria-hidden="true"
            style={{ color: "#8159BB", fontSize: "13px", userSelect: "none" }}
          >
            &rsaquo;
          </li>
          <li>
            <span
              aria-current="page"
              style={{
                color: "#4B5056",
                fontSize: "13px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              {s.breadcrumbCurrent}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
