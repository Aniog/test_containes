import React from 'react';

export default function PageHeader({ title, description, bgImageId, bgImageUrl }) {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: `url('${bgImageUrl}')` }}
            data-strk-bg-id={bgImageId}
            data-strk-bg={`[page-title] [page-desc]`}
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-8">
        <h1 id="page-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          {title}
        </h1>
        {description && (
          <p id="page-desc" className="text-lg text-slate-300 sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
