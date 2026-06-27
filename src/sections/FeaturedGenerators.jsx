import React from "react";
import { strings } from "../strings";
import { FEATURED, getCategoryById } from "../generators-data";
import { CategoryIllustration } from "../icons.jsx";

export default function FeaturedGenerators() {
  return (
    <section className="strk-section" aria-labelledby="featured-heading">
      <div className="strk-container">
        <div className="strk-section-heading">
          <h2 id="featured-heading">{strings.en.featuredEyebrow}</h2>
          <p>{strings.en.featuredSub}</p>
        </div>

        <div className="strk-grid strk-grid--3">
          {FEATURED.map((item) => {
            const category = getCategoryById(item.category);
            return (
              <a
                key={item.slug}
                href={`/generators/${item.slug}`}
                className="strk-card strk-featured-card"
                aria-label={item.name}
              >
                <div className="strk-card-thumb">
                  <CategoryIllustration iconKey={category?.iconKey || "website"} />
                </div>
                <h3 className="strk-card-title">{item.name}</h3>
                <p className="strk-card-desc">{item.desc}</p>
                <div className="strk-card-foot">
                  <span className="strk-tag">{strings.en[item.tag] || item.tag}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}