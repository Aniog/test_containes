import { Link } from 'react-router-dom';
import ImageLoader from '@/components/ImageLoader';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const values = [
  {
    title: 'Quiet Luxury',
    body: 'No logos, no noise. Each piece is designed to speak softly and wear beautifully.',
  },
  {
    title: 'Everyday Quality',
    body: '18k gold-plated finishes and hypoallergenic bases mean your jewelry keeps up with real life.',
  },
  {
    title: 'Mindful Pricing',
    body: 'Premium materials and considered design, without the traditional markup.',
  },
];

export default function About() {
  return (
    <ImageLoader>
      <section className="pt-28 pb-16 lg:pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">Our Story</p>
            <h1 className="font-serif text-5xl lg:text-6xl text-espresso leading-[0.95]">
              Jewelry for the Moments That Matter
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                data-strk-img-id="about-story-image"
                data-strk-img="[about-title] [about-body-1]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                alt="Velmora fine jewelry craftsmanship"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 id="about-title" className="font-serif text-3xl lg:text-4xl text-espresso mb-6">
                Crafted to be Treasured
              </h2>
              <p id="about-body-1" className="text-taupe leading-relaxed mb-6">
                Velmora Fine Jewelry was founded on a simple belief: luxury should feel personal, not performative. We create demi-fine pieces for women who value quality, restraint, and a little everyday glow.
              </p>
              <p className="text-taupe leading-relaxed mb-6">
                From hand-polished huggies to crystal-touched ear cuffs and layered necklaces, every design is meant to move with you — from morning coffee to evening plans, from self-purchase rituals to thoughtful gifts.
              </p>
              <p className="text-taupe leading-relaxed mb-8">
                Our collections are small, intentional, and made to last. We skip the trends and focus on silhouettes you will want to wear for years.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-gold text-cream px-8 py-4 text-xs uppercase tracking-extra-wide font-medium hover:bg-gold-hover transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">What We Stand For</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-espresso">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-linen border border-hairline p-8 text-center">
                <h3 className="font-serif text-xl text-espresso mb-4">{v.title}</h3>
                <p className="text-taupe leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ImageLoader>
  );
}
