import React from 'react';
import { strings, featuredGenerators } from '../../constants/strings';

const FeaturedGrid = () => {
  const { featured } = strings.en;

  return (
    <section className="container-custom py-10">
      <div className="mb-[30px]">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-[5px]">{featured.title}</h2>
        <p className="text-[#636972] m-0">{featured.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen, idx) => (
          <article key={idx}>
            <a
              href={`/generators/${gen.slug}`}
              className="group block p-5 bg-white border border-[#C6C9CD] rounded-[3px] card-hover h-full"
            >
              <div className="flex flex-col gap-2">
                <span className="inline-block self-start text-[11px] font-bold text-[#8159BB] border border-[#8159BB] px-[6px] py-[2px] rounded-[3px] uppercase">
                  {gen.category}
                </span>
                <h3 className="text-lg font-bold text-[#4B5056] m-0 group-hover:text-[#8159BB] transition-colors uppercase">
                  {gen.name}
                </h3>
                <p className="text-[#636972] text-[13px] line-clamp-1 italic">
                  {gen.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGrid;
