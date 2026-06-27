import React from "react";
import { strings } from "../strings";

export default function ClosingCTA() {
  return (
    <section className="strk-closing" aria-labelledby="closing-heading">
      <div className="strk-container">
        <h2 id="closing-heading">{strings.en.closingHeadline}</h2>
        <p>{strings.en.closingSub}</p>
        <a
          href="/s/ai_site_builder"
          className="strk-btn strk-btn--primary strk-btn--big"
          data-strk-cta="closing"
        >
          {strings.en.closingCta}
        </a>
      </div>
    </section>
  );
}