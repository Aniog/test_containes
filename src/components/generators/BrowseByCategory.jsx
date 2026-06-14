import React from 'react';
import { getCategoryIcon } from './Illustrations';
import { categories } from '@/data/generators';

const descriptions = {
  websites: 'AI-built business and personal sites for any goal.',
  'landing-pages': 'Single-page sites built to convert visitors fast.',
  portfolios: 'Showcase your work with a clean, focused site.',
  blogs: 'Publish-ready blogs with built-in SEO basics.',
  stores: 'Sell products online with payments built in.',
  'link-in-bio': 'One link, all your places. Made for creators.',
};

const names = {
  websites: 'Websites',
  'landing-pages': 'Landing Pages',
  portfolios: 'Portfolios',
  blogs: 'Blogs',
  stores: 'Online Stores',
  'link-in-bio': 'Link-in-Bio',
};

export default function BrowseByCategory({ s }) {
  return (
    <section className="strk-section" aria-labelledby="browse-heading">
      <div className="strk-container">
        <header className="strk-section-head">
          <h2 id="browse-heading" className="strk-h2">
            {s.browseByCategory.heading}
          </h2>
          <p className="strk-section-sub">{s.browseByCategory.sub}</p>
        </header>
        <ul className="strk-category-grid" role="list">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <li key={cat.id}>
                <a
                  className="strk-category-card"
                  href={`/generators#${cat.id}`}
                  aria-label={`Jump to ${names[cat.id]} generators`}
                >
                  <span className="strk-category-icon" aria-hidden="true">
                    <Icon size={36} />
                  </span>
                  <span className="strk-category-name">{names[cat.id]}</span>
                  <span className="strk-category-desc">{descriptions[cat.id]}</span>
                  <span className="strk-category-arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
