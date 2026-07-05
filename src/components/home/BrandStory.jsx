import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              data-strk-img-id="brand-story-8f2a"
              data-strk-img="[story-heading] [story-text] artisan gold jewelry workshop elegant hands crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full bg-brand-sand"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="section-subheading mb-4">Our Story</p>
            <h2 id="story-heading" className="section-heading mb-6">
              Jewelry with Intention
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-8" />
            <p id="story-text" className="font-sans text-base md:text-lg text-brand-warm-gray leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry shouldn't cost a fortune, and affordable jewelry shouldn't look cheap. We create demi-fine pieces in 18K gold plating that feel luxurious, last beautifully, and sit at a price point that invites you to collect, not just buy.
            </p>
            <p className="font-sans text-base md:text-lg text-brand-warm-gray leading-relaxed mb-8">
              Every piece is designed in our studio, crafted with care, and made for women who appreciate quality without pretense. Whether you're gifting someone special or treating yourself — you deserve jewelry that feels like it was made just for you.
            </p>
            <Link to="/shop" className="btn-outline">
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
