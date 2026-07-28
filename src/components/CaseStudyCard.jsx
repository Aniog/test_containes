import React from 'react';

const CaseStudyCard = ({ client, industry, outcome, description, imgId, titleId, descId }) => {
  return (
    <article className="bg-white rounded-xl border border-border overflow-hidden shadow-card hover:shadow-lg transition-all">
      <div className="aspect-[16/9] overflow-hidden bg-cloud">
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={client}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full bg-cloud text-xs font-semibold text-navy">
            {industry}
          </span>
        </div>
        <h3 id={titleId} className="text-lg font-semibold text-navy mb-2">
          {client}
        </h3>
        <p id={descId} className="text-sm text-slate-muted leading-relaxed mb-4">
          {description}
        </p>
        <p className="text-sm font-semibold text-success">
          {outcome}
        </p>
      </div>
    </article>
  );
};

export default CaseStudyCard;
