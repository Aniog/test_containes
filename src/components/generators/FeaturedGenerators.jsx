import React from 'react';
import { catTagMap, strings, generatorData, featuredSlugs } from '@/lib/generators-data';

const GeneratorCard = ({ generator, showCategory = false }) => {
  const catLabel = catTagMap[generator.catSlug] || generator.category;
  
  // Use exact samples from Section 4 if applicable
  const sampleDescriptions = {
    "ai-website-generator": "Describe your business, get a full site",
    "free-portfolio-generator": "For creatives, in minutes, no fee",
    "ai-landing-page-maker": "One-page sites built to convert",
    "online-store-builder": "Start selling without writing code",
    "link-in-bio-generator": "One link for all your places. Made for creators.",
    "one-page-website-builder": "Simple sites, single scroll",
    "wedding-website-generator": "Share your day with guests",
    "restaurant-website-builder": "Menu, hours, reservations, done",
    "blog-generator-for-beginners": "Publish-ready blogs with built-in SEO basics."
  };
  
  const description = sampleDescriptions[generator.slug] || generator.description;

  return (
    <a 
      href={`/generators/${generator.slug}`}
      className="group block bg-white border border-card-border rounded-[3px] p-5 hover:border-brand-purple hover:shadow-sm transition-all"
    >
      <div className="flex flex-col h-full">
        {showCategory && (
          <span className="inline-block text-[11px] font-heading font-bold uppercase px-[6px] py-[2px] rounded-[3px] border border-brand-purple text-brand-purple mb-[20px] self-start">
            {catLabel}
          </span>
        )}
        <h3 className="text-heading-dark font-heading font-bold text-[18px] mb-[10px] uppercase">
          {generator.name}
        </h3>
        <p className="text-body-gray text-[14px] leading-snug">
          {description}
        </p>
      </div>
    </a>
  );
};

const FeaturedGenerators = () => {
  const t = strings.en.featured;
  const featuredItems = generatorData.filter(g => featuredSlugs.includes(g.slug));

  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-heading-gray font-heading font-bold text-[26px] md:text-[32px] mb-2 uppercase text-center">
          {t.title}
        </h2>
        <p className="text-body-gray text-center mb-10">
          {t.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredSlugs.map(slug => {
            const item = generatorData.find(g => g.slug === slug);
            return item ? <GeneratorCard key={item.slug} generator={item} showCategory={true} /> : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
