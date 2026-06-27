import React from "react";
import { strings } from "../strings";
import { CATEGORIES } from "../generators-data";
import { CategoryIllustration, ArrowRightIcon } from "../icons.jsx";

export default function BrowseByCategory() {
  return (
    <section className="strk-section" aria-labelledby="categories-heading">
      <div className="strk-container">
        <div className="strk-section-heading">
          <h2 id="categories-heading">{strings.en.categoriesEyebrow}</h2>
          <p>{strings.en.categoriesSub}</p>
        </div>

        <div className="strk-grid strk-grid--3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="strk-card strk-cat-card"
              aria-label={`${strings.en[cat.labelKey]} – jump to section`}
            >
              <div className="strk-card-illustration">
                <CategoryIllustration iconKey={cat.iconKey} />
              </div>
              <h3 className="strk-card-title">{strings.en[cat.labelKey]}</h3>
              <p className="strk-card-desc">{strings.en[cat.descKey]}</p>
              <span className="strk-cat-card-arrow" aria-hidden="true">
                <ArrowRightIcon size={20} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}