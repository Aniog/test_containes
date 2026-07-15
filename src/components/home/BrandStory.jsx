import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="gold jewelry craftmanship workshop warm editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 md:py-0">
          <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal leading-tight">
            Jewelry that becomes part of your story
          </h2>
          <p className="font-sans text-sm text-velmora-stone mt-6 leading-relaxed max-w-md">
            At Velmora, we believe demi-fine jewelry should feel as precious as the moments it marks. 
            Each piece is crafted in 18K gold plating with meticulous attention to detail — designed 
            to be worn every day, treasured for a lifetime.
          </p>
          <p className="font-sans text-sm text-velmora-stone mt-4 leading-relaxed max-w-md">
            From our atelier to your jewelry box, every Velmora piece carries a promise of quality, 
            sustainability, and timeless elegance.
          </p>
          <Link to="/shop" className="btn-ghost mt-8 inline-block">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}