import React from "react";
import { strings } from "../strings";

export default function ClosingCta() {
  const s = strings.en.closing;
  return (
    <section className="closing" aria-labelledby="closing-h2">
      <div className="container">
        <h2 id="closing-h2" className="closing__h">{s.heading}</h2>
        <p className="closing__sub">{s.sub}</p>
        <a className="btn btn--primary" href="/s/ai_site_builder">
          {s.cta}
        </a>
      </div>
    </section>
  );
}