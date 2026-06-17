import React from 'react';
import { strings } from '../../strings';
import { featuredGenerators } from '../../data';

const s = strings.en.featured;

export default function FeaturedGenerators() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-2xl md:text-3xl mb-2">{s.heading}</h2>
        <p className="text-body-text text-sm mb-8">{s.subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card block no-underline text-body-text hover:text-body-text"
            >
              <strong className="font-heading font-bold text-heading text-sm mb-2 block" style={{ textTransform: 'uppercase' }}>
                {gen.name}
              </strong>
              <p className="text-body-text text-sm mb-3 leading-relaxed">{gen.description}</p>
              <span className="tag">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
