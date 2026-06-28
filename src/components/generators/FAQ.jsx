import { useState } from "react";
import { faqItems, strings } from "../../data/generatorsData.js";

const s = strings.en;

function FaqItem({ item, isOpen, onToggle }) {
  const paragraphs = item.answer.split("\n\n");

  return (
    <div
      style={{
        borderBottom: "1px solid #E2E4E7",
      }}
    >
      <button
        id={`${item.id}-btn`}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          cursor: "pointer",
          textAlign: "start",
        }}
      >
        <span
          className="font-heading"
          style={{
            color: "#2E2E2F",
            fontSize: "14px",
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {item.question.toUpperCase()}
        </span>
        <svg
          aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M4 6l5 5 5-5"
            stroke="#8159BB"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={`${item.id}-panel`}
        role="region"
        aria-labelledby={`${item.id}-btn`}
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "600px" : "0",
          transition: "max-height 0.28s ease",
        }}
      >
        <div style={{ paddingBottom: "18px" }}>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                color: "#636972",
                fontSize: "14px",
                lineHeight: 1.7,
                margin: i === 0 ? "0 0 12px" : "0",
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0].id);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      style={{ background: "#ffffff", paddingBlock: "60px" }}
      aria-labelledby="faq-heading"
    >
      <div className="content-wrap">
        <h2
          id="faq-heading"
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            margin: "0 0 30px",
          }}
        >
          {s.faqHeading}
        </h2>

        <div
          style={{
            maxWidth: "760px",
            borderTop: "1px solid #E2E4E7",
          }}
        >
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
