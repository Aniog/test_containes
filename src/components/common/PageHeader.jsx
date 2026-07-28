import React from 'react';

const PageHeader = ({ title, subtitle, imageId, searchTerms }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        data-strk-bg-id={imageId}
        data-strk-bg={searchTerms}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-wider">{title}</h1>
        {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
