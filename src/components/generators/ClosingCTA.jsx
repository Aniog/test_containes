





import React from 'react';
import strings from '@/data/strings.en.js';

const ClosingCTA = () => {
  return (
    <section className="section closing-cta">
      <div className="section-container closing-cta-inner">
        <h2 className="closing-heading">{strings.closingHeading}</h2>
        <p className="closing-sub">{strings.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
          {strings.closingCTA}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;




