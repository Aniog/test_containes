import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-warm-white">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] fine jewelry craftsmanship"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex items-center">
          <div className="px-8 md:px-16 lg:px-24 py-14 md:py-0">
            <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-soft-black font-normal leading-tight mb-6"
            >
              Jewelry that moves<br />with you
            </h2>
            <p className="text-sm md:text-base text-taupe/80 leading-relaxed mb-6 max-w-md">
              Velmora was born from the belief that luxury shouldn&apos;t be locked
              behind a glass case. We craft demi-fine pieces in 18K gold plate —
              designed to be worn every day, through every chapter, and passed
              down as modern heirlooms.
            </p>
            <p className="text-sm md:text-base text-taupe/80 leading-relaxed mb-8 max-w-md">
              Each piece is ethically crafted, hypoallergenic, and finished by
              hand. Because fine jewelry shouldn&apos;t just look good — it should
              feel good, too.
            </p>
            <Link
              to="/shop"
              className="btn-outline text-xs"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
