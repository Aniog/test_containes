import React from 'react';
import { strings } from '@/lib/strings.en';
import { FEATURED_GENERATORS } from '@/lib/generators.data';

const FeaturedGenerators = () => {
  const { en } = strings;
  return (
    <section className="bg-light-bg py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-2">{en.featured.heading}</h2>
          <p className="text-[#636972]">{en.featured.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_GENERATORS.map((gen) => (
            <a 
              key={gen.slug} 
              href={`/generators/${gen.slug}`} 
              className="card flex flex-col items-start"
            >
              <div className="tag mb-4">{gen.category}</div>
              <h3 className="text-lg text-heading-text mb-2 font-heading">{gen.name}</h3>
              <p className="text-[#636972] text-sm">{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
