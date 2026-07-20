import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-surface px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 aspect-[4/5] bg-background relative overflow-hidden group">
          <img
            data-strk-img-id="brand-story-img-v1"
            data-strk-img="jewelry artisan crafting gold necklace workshop soft lighting"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Artisan at work"
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 md:pr-12 space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted font-bold">Our Philosophy</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.1]">
            Jewelry with <br /> <span className="italic">Soul & Purpose</span>
          </h2>
          <div className="space-y-6 text-muted leading-relaxed font-sans text-lg">
            <p>
              Founded on the belief that beauty should be intentional, Velmora crafts timeless adornments that celebrate the modern individual's journey.
            </p>
            <p>
              Our pieces are more than just accessories; they are legacy-seekers, crafted from ethically sourced materials and designed to be treasured for a lifetime.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block border-b border-foreground pb-2 text-xs uppercase tracking-[0.3em] font-bold hover:text-accent hover:border-accent transition-all duration-300"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
