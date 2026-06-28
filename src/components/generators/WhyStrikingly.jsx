import { whyStrikinglyItems, strings } from "../../data/generatorsData.js";

const s = strings.en;

// Simple line icons for each benefit
const icons = [
  // Lightning bolt — Live in seconds
  <svg key="lightning" aria-hidden="true" focusable="false" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M20 4L10 20h8l-2 12 14-18h-9l3-10H20z" stroke="#8159BB" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
  </svg>,
  // Mobile phone — Mobile by default
  <svg key="mobile" aria-hidden="true" focusable="false" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="10" y="4" width="16" height="28" rx="4" stroke="#8159BB" strokeWidth="1.8" fill="none" />
    <circle cx="18" cy="28" r="1.5" fill="#8159BB" opacity="0.6" />
    <rect x="14" y="8" width="8" height="1.5" rx="0.75" fill="#8159BB" opacity="0.4" />
  </svg>,
  // Tag / price — Free to start
  <svg key="tag" aria-hidden="true" focusable="false" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M6 6h12l12 12-12 12L6 18V6z" stroke="#8159BB" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <circle cx="13" cy="13" r="2" fill="#8159BB" opacity="0.5" />
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section
      style={{ background: "#F4F6F8", paddingBlock: "60px" }}
      aria-labelledby="why-heading"
    >
      <div className="content-wrap">
        <h2
          id="why-heading"
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            margin: "0 0 40px",
            textAlign: "center",
          }}
        >
          {s.whyStrikinglyHeading}
        </h2>

        <div className="grid-3">
          {whyStrikinglyItems.map((item, idx) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                border: "1px solid #C6C9CD",
                borderRadius: "3px",
                padding: "30px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "14px",
              }}
            >
              <div>{icons[idx]}</div>
              <strong
                className="font-heading"
                style={{ color: "#2E2E2F", fontSize: "14px", display: "block" }}
              >
                {item.title}
              </strong>
              <p style={{ color: "#636972", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
