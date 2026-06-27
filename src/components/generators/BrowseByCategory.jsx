import React from 'react';
import { Monitor, Layout, Briefcase, PenTool, ShoppingBag, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { strings } from '../../data/generators';

const icons = {
  websites: <Monitor size={24} />,
  landingPages: <Layout size={24} />,
  portfolios: <Briefcase size={24} />,
  blogs: <PenTool size={24} />,
  stores: <ShoppingBag size={24} />,
  linkInBio: <LinkIcon size={24} />
};

const CategoryCard = ({ title, description, slug, iconKey }) => {
  return (
    <a 
      href={`/generators#${slug}`}
      className="card card-hover flex flex-col gap-4 group"
    >
      <div className="text-brand-purple" aria-hidden="true">
        {icons[iconKey]}
      </div>
      <div>
        <h3 className="text-base font-heading font-bold text-hero-line1 mb-1">
          {title}
        </h3>
        <p className="text-sm text-body-text line-clamp-2">
          {description}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-end">
        <ArrowRight size={18} className="text-brand-purple group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

const BrowseByCategory = () => {
  const { browseByCategory } = strings.en;
  
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-10">
          {browseByCategory.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(browseByCategory.categories).map(([key, category]) => (
            <CategoryCard 
              key={key}
              iconKey={key}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
