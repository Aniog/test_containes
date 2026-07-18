import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velvet-100/30">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div
          className="aspect-[4/5] md:aspect-auto bg-velvet-200"
          data-strk-bg-id="brand-story-bg"
          data-strk-bg="[brand-story-subtitle] [brand-story-title] gold jewelry craft"
          data-strk-bg-ratio="4x5"
          data-strk-bg-width="1000"
        />

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0">
          <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">
            Our Story
          </span>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-3xl md:text-4xl font-light text-velvet-900 tracking-wide leading-tight"
          >
            Jewelry That Lives With You
          </h2>
          <p
            id="brand-story-subtitle"
            className="mt-6 text-velvet-600 leading-relaxed text-sm md:text-base max-w-md"
          >
            Velmora was born from a simple belief: that fine jewelry should be an everyday luxury, not a locked-away treasure. We craft each piece in 18K gold plate over brass, using ethically sourced crystals and hypoallergenic posts — because the pieces you wear every day deserve the same care as the ones you keep for special occasions.
          </p>
          <p className="mt-4 text-velvet-600 leading-relaxed text-sm md:text-base max-w-md">
            Designed in our London atelier, every Velmora piece is a quiet statement — meant to be layered, stacked, and lived in.
          </p>
          <div className="mt-8">
            <Link to="/" className="btn-outline text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}