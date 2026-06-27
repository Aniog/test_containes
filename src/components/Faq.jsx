import React, { useState } from "react";
import { strings } from "../strings";
import { ChevronIcon } from "../icons";

export default function Faq() {
  const s = strings.en.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section--alt" aria-labelledby="faq-h2">
      <div className="container">
        <header className="section-heading">
          <h2 id="faq-h2" className="section-heading__h">{s.heading}</h2>
          <p className="section-heading__sub">{s.sub}</p>
        </header>
        <div className="faq">
          {s.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div className="faq__item" key={item.q}>
                <h3 style={{ all: "unset", display: "block" }}>
                  <button
                    id={btnId}
                    type="button"
                    className="faq__btn"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__chev" aria-hidden="true">
                      <ChevronIcon size={20} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`faq__panel${isOpen ? " is-open" : ""}`}
                >
                  <div className="faq__panel-inner">
                    {item.a.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}