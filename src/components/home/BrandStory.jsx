import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-sand/20 rounded-sm overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepbrown leading-tight mb-6">
              Jewelry That Lives With You
            </h2>
            <div className="space-y-4 text-mocha/80 font-sans text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury should feel personal, not precious. We craft demi-fine pieces
                in 18K gold plate — designed to be worn through life, not locked away.
              </p>
              <p>
                Every curve, every stone, every clasp is considered. Our atelier works with ethically sourced materials
                and small-batch production, because the best things are made with intention, not at scale.
              </p>
              <p>
                We believe jewelry is the most intimate form of self-expression. It rests against your skin. It catches the light
                when you laugh. It becomes part of your story.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/shop" className="btn-outline text-xs">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
