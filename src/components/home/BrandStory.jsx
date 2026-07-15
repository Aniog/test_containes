import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan hands crafting gold jewelry warm lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="section-title text-3xl md:text-4xl mb-6" id="brand-story-heading">
              Where Craft Meets Heart
            </h2>
            <p id="brand-story-text" className="text-warm-gray leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves to wear jewelry that feels
              as special as she is. Our pieces are crafted from 18K gold-plated sterling silver,
              designed to be worn every day and treasured for years to come.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Each design is thoughtfully created in our studio, drawing inspiration from art,
              architecture, and the women who wear our pieces. We believe in accessible luxury
              — premium quality without the premium price tag.
            </p>
            <Link to="/about" className="btn-text">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
