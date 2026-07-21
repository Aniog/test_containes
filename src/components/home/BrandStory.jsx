import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-light-accent overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=85&auto=format&fit=crop"
              alt="Gold jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary leading-tight">
              Designed with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="w-10 h-[1px] bg-accent my-6" />
            <p className="text-secondary text-sm md:text-base leading-relaxed">
              At Velmora, we believe fine jewelry shouldn't come with a fine
              print. Every piece is crafted with 18K gold plating and
              hypoallergenic materials, designed to transition seamlessly from
              desk to dinner.
            </p>
            <p className="text-secondary text-sm md:text-base leading-relaxed mt-4">
              We work directly with artisans who share our commitment to
              ethical production, allowing us to deliver exceptional quality at
              an accessible price point. No middlemen, no markup — just
              beautiful jewelry, thoughtfully made.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.12em] font-medium text-accent hover:text-accent-hover transition-colors group"
            >
              Our Story
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}