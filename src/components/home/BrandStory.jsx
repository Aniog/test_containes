import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-velmora-gold/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-velmora-gold text-xs uppercase tracking-widest">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
              Crafted with Intention
            </h2>
            <div className="hairline max-w-24 mb-6" style={{ marginLeft: 0 }} />
            <p className="text-velmora-charcoal/70 leading-relaxed mb-6">
              Founded in 2018, Velmora was born from a simple belief: jewelry should feel like an extension of you—not an accessory you put on, but a part of who you are. We create pieces that balance timeless elegance with modern sensibility.
            </p>
            <p className="text-velmora-charcoal/70 leading-relaxed mb-8">
              Each piece is designed in our studio and crafted by skilled artisans using ethically sourced materials. Our commitment to quality means your jewelry will remain beautiful for years to come—becoming a treasured part of your personal story.
            </p>
            <Link 
              to="/about"
              className="inline-block btn-outline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}