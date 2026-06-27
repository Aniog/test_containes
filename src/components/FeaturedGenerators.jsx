import React from 'react';
import { strings } from '../lib/strings';
import { generatorsData } from '../lib/data';

const FeaturedGenerators = () => {
  const s = strings.en.featured;
  const featured = generatorsData.slice(0, 9);

  return (
    <section className="bg-bg-light py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl text-heading-dark mb-2 tracking-tight">
            {s.title}
          </h2>
          <p className="text-body-text">{s.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((gen) => (
            <a 
              key={gen.id} 
              href={`/generators/${gen.slug}`}
              className="group bg-white border border-card-border p-5 rounded-[3px] flex flex-col gap-4 hover:border-brand-purple hover:shadow-sm transition-all"
            >
              <div className="flex flex-col gap-2">
                <span className="inline-block self-start text-[11px] font-heading font-bold text-brand-purple border border-brand-purple px-[6px] py-[2px] rounded-[3px] uppercase tracking-wider">
                  {gen.category}
                </span>
                <h3 className="text-lg font-bold text-heading-dark group-hover:text-brand-purple transition-colors capitalize">
                  {gen.name}
                </h3>
              </div>
              <p className="text-sm line-clamp-2">
                {gen.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
