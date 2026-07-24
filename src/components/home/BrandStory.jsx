import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image left */}
          <div className="md:col-span-6 order-1">
            <img
              alt="A close-up of a hand holding a piece of Velmora jewelry, lit by warm afternoon light."
              className="relative aspect-[4/5] w-full overflow-hidden bg-champagne/30 object-cover"
              data-strk-img-id="brand-story-img-4a7c9d"
              data-strk-img="[brand-story-body] [brand-story-eyebrow]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Text right */}
          <div className="md:col-span-6 order-2">
            <p id="brand-story-eyebrow" className="eyebrow">Our story</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-ink-soft leading-[1.05]">
              A studio for the <em className="italic">everyday</em> kind of fine.
            </h2>
            <p
              id="brand-story-body"
              className="mt-7 text-base md:text-lg text-ink/80 leading-relaxed max-w-xl"
            >
              Velmora began at a kitchen table, with a single pair of gold huggies made for a friend. We design demi-fine jewelry for the moments between moments — coffee runs, late dinners, the first day of a new job. Pieces that feel like you have always owned them.
            </p>
            <p className="mt-5 text-base text-ink/70 leading-relaxed max-w-xl">
              Every piece is made in small batches, plated in 18K gold over a hypoallergenic core, and finished by hand. Quiet luxury, made to last.
            </p>

            <div className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center text-[11px] uppercase tracking-widest-2 text-ink-soft hover:text-gold transition-colors duration-300 ease-editorial"
              >
                Read our story
                <ArrowRight
                  className="ml-3 w-3.5 h-3.5 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
