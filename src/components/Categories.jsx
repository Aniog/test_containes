import React from "react";
import { strings } from "../strings";
import {
  CatWebsitesIcon,
  CatLandingIcon,
  CatPortfolioIcon,
  CatBlogIcon,
  CatStoreIcon,
  CatLinkIcon,
  ArrowRightIcon,
} from "../icons";

const ICONS = {
  websites: CatWebsitesIcon,
  "landing-pages": CatLandingIcon,
  portfolios: CatPortfolioIcon,
  blogs: CatBlogIcon,
  stores: CatStoreIcon,
  "link-in-bio": CatLinkIcon,
};

export default function Categories() {
  const s = strings.en.categories;
  return (
    <section className="section section--alt" aria-labelledby="categories-h2">
      <div className="container">
        <header className="section-heading">
          <h2 id="categories-h2" className="section-heading__h">{s.heading}</h2>
          <p className="section-heading__sub">{s.sub}</p>
        </header>
        <ul className="category-grid" role="list">
          {s.items.map((cat) => {
            const Icon = ICONS[cat.slug] || CatWebsitesIcon;
            return (
              <li key={cat.slug}>
                <a className="card card-link category-card" href={`/generators#${cat.slug}`}>
                  <span className="category-card__art" aria-hidden="true">
                    <Icon size={28} />
                  </span>
                  <h3 className="category-card__name">{cat.name}</h3>
                  <p className="category-card__desc">{cat.desc}</p>
                  <span className="category-card__arrow" aria-hidden="true">
                    <ArrowRightIcon size={22} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}