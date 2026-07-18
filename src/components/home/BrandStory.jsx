import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-w2x3y4"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
              Our Story
            </h2>
            <p id="brand-story-desc" className="font-sans text-sm text-muted-fg mt-6 leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are designed in-house, crafted with 18K gold plating over hypoallergenic metals, and made to last through every chapter of your life.
            </p>
            <p className="font-sans text-sm text-muted-fg mt-4 leading-relaxed">
              From our studio to your jewelry box, each piece is thoughtfully created to bring a quiet confidence to your everyday moments.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-gold text-gold px-6 py-3 font-sans text-xs tracking-wide-btn uppercase hover:bg-gold hover:text-cream transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
