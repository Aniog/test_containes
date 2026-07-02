import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p id="brand-story-subtitle" className="section-subtitle mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-heading mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="space-y-4 text-sm md:text-base text-obsidian-300 leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry should be
                accessible, not aspirational. Every piece is crafted with 18K
                gold plating over surgical-grade materials — designed to be worn
                every day, not locked away.
              </p>
              <p>
                Our artisans combine traditional techniques with modern
                sensibility, creating pieces that feel both timeless and
                contemporary. We source responsibly, produce ethically, and
                package beautifully — because the experience should match the
                jewelry.
              </p>
            </div>
            <Link to="/about" className="btn-outline mt-8 inline-block text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
