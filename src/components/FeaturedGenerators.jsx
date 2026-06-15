import React from 'react';
import { strings } from '@/lib/strings';
import { generatorsData } from '@/lib/data';

export const FeaturedGenerators = () => {
  const t = strings.en.featured;
  const items = generatorsData.featured;

  return (
    <section className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">{t.title}</h2>
        <p className="section-subtitle text-center mb-[40px]">{t.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {items.map((item, idx) => (
            <a 
              key={idx} 
              href={`/generators/${item.slug}`} 
              className="card flex flex-col gap-[10px]"
            >
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-[18px] font-bold text-[var(--hero-h1-dark)] normal-case flex-1">
                  {item.name}
                </h3>
                <span className="tag whitespace-nowrap">{item.category}</span>
              </div>
              <p className="text-[14px] text-[var(--body-text)]">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
