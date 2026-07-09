import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-velmora-ivory">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded">
            <div
              data-strk-img-id="brand-story-main"
              data-strk-img="artisan jewelry workshop gold pieces craftsmanship warm lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-gradient-to-br from-velmora-linen to-velmora-sand flex items-center justify-center">
                <span className="font-serif text-4xl text-velmora-gold-muted/40 tracking-widest-2xl">VM</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:py-10">
            <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-heading-1 text-velmora-charcoal mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-body-lg text-velmora-stone mb-4 leading-relaxed">
              Velmora was born from a simple belief: every woman deserves to feel adorned without compromise. 
              We craft demi-fine jewelry that bridges the gap between luxury and accessibility.
            </p>
            <p className="text-body-lg text-velmora-stone mb-8 leading-relaxed">
              Each piece is meticulously designed with 18K gold plating over premium brass, 
              creating jewelry that's as enduring as the moments it marks. From everyday essentials 
              to statement pieces, Velmora is crafted to be treasured.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
