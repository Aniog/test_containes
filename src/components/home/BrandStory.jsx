import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-[5/6] bg-warm-100 rounded-sm overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-14 lg:pl-20 mt-10 md:mt-0">
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900 leading-tight"
            >
              Jewelry That<br />Lives With You
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-warm-600 leading-relaxed max-w-md"
            >
              Velmora was born from a simple belief: that the jewelry you wear every day should feel as special as the pieces you save for occasions. We craft demi-fine jewelry in 18K gold plate — designed to move with you, layer effortlessly, and become a part of your story. No compromises on quality, no intimidating price tags. Just beautiful, enduring pieces made for real life.
            </p>
            <Link to="/about" className="btn-ghost mt-8 !px-0 group">
              <span className="border-b border-warm-400 group-hover:border-warm-800 transition-colors">
                Read Our Story
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}