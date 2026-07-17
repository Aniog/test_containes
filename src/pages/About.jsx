import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto section-padding text-center">
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-gold mb-4">Our Story</p>
        <h1 className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide">
          Where Craft Meets Intention
        </h1>
        <p className="mt-8 font-sans text-sm text-brand-muted leading-relaxed">
          Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible
          to everyone. We design demi-fine pieces that bridge the gap between everyday wear and heirloom
          quality — 18K gold plated, hypoallergenic, and crafted to be treasured for years to come.
        </p>
        <p className="mt-4 font-sans text-sm text-brand-muted leading-relaxed">
          Every piece begins with a sketch and ends with a story. Our artisans bring decades of expertise
          to each creation, ensuring that every detail — from the clasp to the finish — meets the standard
          we set for ourselves, and the one you deserve.
        </p>
        <p className="mt-4 font-sans text-sm text-brand-muted leading-relaxed">
          We believe in quiet luxury — jewelry that speaks softly but carries presence. No logos, no
          excess, just thoughtful design and enduring quality.
        </p>
        <Link to="/shop" className="inline-block mt-10 btn-outline text-xs">
          Explore the Collection
        </Link>
      </div>
    </div>
  );
}
