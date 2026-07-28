import React from 'react';

const ProductCard = ({ title, description, imgId, titleId, descId, sectionTitleId }) => {
  return (
    <div className="group bg-white rounded-xl border border-border overflow-hidden shadow-card hover:shadow-lg transition-all">
      <div className="aspect-[4/3] overflow-hidden bg-cloud">
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${titleId}] [${descId}] [${sectionTitleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 id={titleId} className="text-lg font-semibold text-navy mb-2">
          {title}
        </h3>
        <p id={descId} className="text-sm text-slate-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
