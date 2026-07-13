import { Link } from 'react-router-dom';
import JewelryPlaceholder from '../ui/JewelryPlaceholder';

export default function BrandStory() {
  return (
    <section id="about" className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <JewelryPlaceholder
              bg="#2C2825"
              label="Velmora jewelry atelier craftsmanship gold editorial"
              ratio="4x3"
              className="w-full"
            />
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Made for the<br />
              <em className="italic">moments that matter</em>
            </h2>
            <div className="w-12 h-px bg-gold" />
            <p className="font-sans text-base text-ink-muted leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine gold pieces that are crafted to last, priced to be accessible, and made to be worn every single day.
            </p>
            <p className="font-sans text-base text-ink-muted leading-relaxed">
              Every piece is 18K gold plated, hypoallergenic, and designed with the modern woman in mind — whether she's gifting herself or someone she loves.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors duration-200"
            >
              Read Our Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
