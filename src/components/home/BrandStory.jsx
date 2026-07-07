import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-ivory">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-80 lg:h-auto min-h-[450px]">
          <div
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="[brand-story-title] gold jewelry artisan craft warm editorial"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
            className="absolute inset-0 bg-cover bg-center"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-md">
            <p className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl lg:text-4xl tracking-wide text-velmora-deep mb-6 leading-snug"
            >
              Jewelry that lives<br />in the everyday
            </h2>
            <p className="text-velmora-stone leading-relaxed mb-6 text-sm lg:text-base">
              Velmora was born from the belief that fine jewelry should be lived in — not locked away. 
              Each piece is crafted with 18K gold plating over brass, designed to become a cherished 
              part of your daily ritual. We work directly with artisans to bring you demi-fine jewelry 
              that balances quality with accessibility.
            </p>
            <Link to="/about" className="btn-outline inline-block text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
