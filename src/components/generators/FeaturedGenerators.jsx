import React from 'react';
import { strings, generatorData, featuredGenerators } from '../../data/generators';
import GeneratorCard from '../GeneratorCard';

const FeaturedGenerators = () => {
  const { featured } = strings.en;
  
  const featuredItems = featuredGenerators.map(id => {
    return generatorData.find(item => item.id === id);
  }).filter(Boolean);

  return (
    <section className="bg-bg-light py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading mb-2">
            {featured.title}
          </h2>
          <p className="text-body-text">
            {featured.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredItems.map(item => (
            <GeneratorCard 
              key={item.id}
              {...item}
              showCategoryTag={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
