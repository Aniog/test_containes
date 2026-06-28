import { strings, BUILDER_URL } from "../../data/generatorsData.js";

const s = strings.en;

export default function ClosingCTA() {
  return (
    <section
      style={{
        background: "#ffffff",
        paddingBlock: "70px",
        textAlign: "center",
        borderTop: "1px solid #E2E4E7",
      }}
      aria-labelledby="closing-heading"
    >
      <div className="content-wrap">
        <h2
          id="closing-heading"
          className="font-heading"
          style={{
            color: "#2E2E2F",
            fontSize: "clamp(26px, 3vw, 38px)",
            margin: "0 0 14px",
          }}
        >
          {s.closingHeading}
        </h2>
        <p
          style={{
            color: "#636972",
            fontSize: "16px",
            margin: "0 0 30px",
            lineHeight: 1.6,
          }}
        >
          {s.closingSub}
        </p>
        <a
          href={BUILDER_URL}
          className="ai-gradient-btn font-heading"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "44px",
            padding: "0 28px",
            borderRadius: "4px",
            fontSize: "13px",
            letterSpacing: "0.5px",
            textDecoration: "none",
          }}
        >
          {s.closingCTA}
        </a>
      </div>
    </section>
  );
}
