import React from "react";
import { strings } from "../../data/strings";
import { featuredGenerators } from "../../data/generators";

export default function Featured() {
  const s = strings.en;
  return (
    <section className="featured" aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading" className="section-heading">{s.featuredHeading}</h2>
        <p className="section-subheading">{s.featuredSubheading}</p>
        <div className="featured-grid">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="featured-card"
              aria-label={gen.name}
            >
              <span className="featured-card-name">{gen.name}</span>
              <span className="featured-card-desc">{gen.description}</span>
              <span className="tag tag-ghost">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
