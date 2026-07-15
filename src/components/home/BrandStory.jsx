import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1067&fit=crop&q=80"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gold accent corner */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-velmora-gold/40" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-velmora-gold/40" />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-heading-xl md:text-[3rem] text-velmora-charcoal mb-6"
            >
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold mb-6" />
            <p
              id="brand-story-text"
              className="text-body md:text-body-lg text-velmora-slate leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels as 
              special as the moments it marks. We create demi-fine pieces in 18K gold that bridge 
              the gap between costume and fine jewelry — accessible luxury that doesn't compromise 
              on quality or design.
            </p>
            <p className="text-body md:text-body-lg text-velmora-slate leading-relaxed mb-8">
              Each piece is thoughtfully designed, responsibly sourced, and crafted to become 
              part of your everyday story. Because the best jewelry isn't saved for special 
              occasions — it makes every day feel like one.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
