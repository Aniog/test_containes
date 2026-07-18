import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <div
          className="min-h-[350px] md:min-h-full"
          data-strk-bg-id="brand-story-bg-e9f0a1"
          data-strk-bg="[brand-story-text] [brand-story-heading]"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="900"
        >
          <div className="w-full h-full min-h-[350px]" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <span className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">Our Story</span>
          <h2
            id="brand-story-heading"
            className="font-serif text-3xl md:text-4xl text-espresso mb-6 leading-snug"
          >
            Where Craft<br />Meets Modern Beauty
          </h2>
          <p
            id="brand-story-text"
            className="text-mocha/80 leading-relaxed mb-8 max-w-md"
          >
            Velmora was born from a simple belief: that every woman deserves jewelry that makes her feel extraordinary, every single day. We work with master artisans to create demi-fine pieces that blend timeless craftsmanship with a modern, wearable sensibility.
          </p>
          <Link to="/shop" className="btn-outline">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
