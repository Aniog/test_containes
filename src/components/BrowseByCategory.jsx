import React from 'react';
import { strings } from '@/lib/strings';
import { ArrowRight } from 'lucide-react';

export const BrowseByCategory = () => {
  const t = strings.en.browseByCategory;

  return (
    <section className="bg-[var(--light-bg)]">
      <div className="container-custom">
        <h2 className="section-title text-center">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[40px]">
          {t.categories.map((cat) => (
            <a 
              key={cat.id} 
              href={`/generators#${cat.slug}`} 
              className="card flex flex-col gap-[15px]"
            >
              <div className="w-[40px] h-[40px] bg-[var(--brand-purple)] bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="w-[20px] h-[20px] bg-[var(--brand-purple)] rounded-sm" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[var(--hero-h1-dark)] mb-[5px]">
                  {cat.name}
                </h3>
                <p className="text-[14px] text-[var(--body-text)]">
                  {cat.description}
                </p>
              </div>
              <div className="mt-auto flex justify-end">
                <ArrowRight className="w-5 h-5 text-[var(--brand-purple)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
