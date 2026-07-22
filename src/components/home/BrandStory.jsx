import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="container-shell">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="md:col-span-6 relative aspect-[4/5] bg-blush overflow-hidden order-1">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-img-velmora"
              data-strk-bg="founder working with gold jewelry tools atelier warm light editorial"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1000"
            />
            <div className="absolute bottom-6 left-6 right-6 border border-bone/40 p-5 bg-espresso/35 backdrop-blur-sm hidden md:block">
              <p className="font-display text-xl text-bone leading-snug">
                "Made by hand, in small batches, for the everyday."
              </p>
              <p className="mt-2 text-[10px] tracking-wider-3 uppercase text-bone-soft">
                — M. Vasquez, Founder
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-6 order-2">
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-ink leading-[1.05]">
              Quiet luxury, made to be
              <br />
              <span className="italic text-champagne-deep">worn daily</span>.
            </h2>
            <div className="mt-8 space-y-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Velmora began as a small atelier in 2019, with one idea: that
                demi-fine jewelry should feel as considered as fine, without the
                ceremony of the safe deposit box.
              </p>
              <p>
                Each piece is hand-finished in our studio — drawn in wax, cast
                in recycled brass, plated in 18K gold, and polished until it
                feels like it has always been yours. We design for the
                everyday rituals worth remembering.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium tracking-wider-3 uppercase text-ink hover:text-champagne-deep transition-colors duration-300"
            >
              Read Our Story
              <span className="w-10 h-px bg-current" />
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>

            {/* Three small stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md border-t border-ink/10 pt-8">
              <div>
                <p className="font-display text-3xl text-ink">18K</p>
                <p className="mt-1 text-[10px] tracking-wider-3 uppercase text-mute">Gold Plated</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">2024</p>
                <p className="mt-1 text-[10px] tracking-wider-3 uppercase text-mute">Carbon Neutral</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">100%</p>
                <p className="mt-1 text-[10px] tracking-wider-3 uppercase text-mute">Recycled Brass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
