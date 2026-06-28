import { howItWorksSteps, strings } from "../../data/generatorsData.js";

const s = strings.en;

export default function HowItWorks() {
  return (
    <section
      style={{ background: "#ffffff", paddingBlock: "60px" }}
      aria-labelledby="how-heading"
    >
      <div className="content-wrap">
        <h2
          id="how-heading"
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            margin: "0 0 40px",
            textAlign: "center",
          }}
        >
          {s.howItWorksHeading}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
          className="how-grid"
        >
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <div className="step-circle" aria-hidden="true">
                {step.number}
              </div>
              <strong
                className="font-heading"
                style={{ color: "#2E2E2F", fontSize: "14px", display: "block" }}
              >
                {step.title}
              </strong>
              <p style={{ color: "#636972", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .how-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
