import React from 'react';

const GeneratorCard = ({ name, description, category, slug }) => {
  return (
    <a
      href={`/generators/${slug}`}
      className="block p-4 border border-gray-200 rounded-lg hover:border-[#8159BB] hover:shadow-sm transition-all bg-white"
    >
      <div className="text-xs uppercase tracking-wide text-[#8159BB] mb-1">{category}</div>
      <h3 className="font-semibold text-[#2E2E2F] mb-1">{name}</h3>
      <p className="text-sm text-[#636972]">{description}</p>
    </a>
  );
};

export default GeneratorCard;
