import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-500 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-300">Journal</span>
        </nav>

        <div className="text-center max-w-xl mx-auto pt-10">
          <p className="text-xs uppercase tracking-mega-wide text-gold mb-4">The Velmora Journal</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-brand-50 mb-6">
            Stories & Style
          </h1>
          <p className="text-brand-400 text-sm leading-relaxed mb-10">
            Inspiration, styling tips, and the stories behind our collections.
            Coming soon.
          </p>
          <Link to="/shop" className="btn-outline">
            Browse the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
