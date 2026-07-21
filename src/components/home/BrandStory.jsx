import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400 rounded-full hidden lg:block" />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="section-title mb-6">
              Where Elegance<br />Meets Artistry
            </h2>
            
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Founded in 2019, Velmora began with a simple belief: everyone deserves to wear beautiful jewelry without the extraordinary price tag.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our Los Angeles studio and crafted by skilled artisans using premium materials — 18K gold plating over sterling silver, cubic zirconia, and hypoallergenic metals.
              </p>
              <p>
                We believe jewelry should tell a story, mark a moment, and become a treasured part of your personal narrative.
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">
                  Discover Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
