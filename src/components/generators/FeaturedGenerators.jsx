import React from 'react';

const FeaturedGenerators = ({ heading, subheading, generators }) => (
  <section className="w-full bg-white py-10 md:py-[40px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] font-bold text-center mb-2 text-[#4B5056] uppercase">{heading}</h2>
      <p className="text-[14px] text-[#636972] text-center mb-8">{subheading}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {generators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover no-underline"
          >
            <h3 className="font-heading font-bold text-[15px] text-[#4B5056] uppercase mb-1">{gen.name}</h3>
            <p className="text-[13px] text-[#636972] mb-3">{gen.description}</p>
            <span className="inline-block font-heading text-[11px] font-bold uppercase text-[#8159BB] border border-[#8159BB] rounded-[3px] px-[6px] py-[2px]">
              {gen.category}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGenerators;
