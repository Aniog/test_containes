import React from 'react';

const ProcessStep = ({ number, title, description, imgId, titleId, descId, sectionTitleId }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center text-2xl font-extrabold">
        {number}
      </div>
      <div className="flex-1">
        <div className="mb-4 overflow-hidden rounded-xl border border-border bg-white">
          <img
            data-strk-img-id={imgId}
            data-strk-img={`[${descId}] [${titleId}] [${sectionTitleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
        <h3 id={titleId} className="text-xl font-semibold text-navy mb-2">
          {title}
        </h3>
        <p id={descId} className="text-slate-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;
