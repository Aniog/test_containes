import React from "react";
import { strings } from "../strings";

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Featured() {
  const s = strings.en.featured;
  return (
    <section className="section" aria-labelledby="featured-h2">
      <div className="container">
        <header className="section-heading">
          <h2 id="featured-h2" className="section-heading__h">{s.heading}</h2>
          <p className="section-heading__sub">{s.sub}</p>
        </header>
        <ul className="featured-grid" role="list">
          {s.cards.map((card) => (
            <li key={card.name}>
              <article className="card card-link featured-card">
                <a className="featured-card__link" href={`/generators/${toSlug(card.name)}`}>
                  <h3 className="featured-card__name">{card.name}</h3>
                  <p className="featured-card__desc">{card.desc}</p>
                  <span className="tag featured-card__tag">{card.cat}</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}