import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-ivory)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-48 md:h-48 border border-[var(--color-gold)] -z-10 rounded" />
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
              Our Story
            </p>
            
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-charcoal)] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Where Craftsmanship<br />
              Meets <span className="italic">Intention</span>
            </h2>
            
            <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be more than an accessory—it should be a 
                reflection of who you are and the moments you treasure.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and meticulously crafted 
                using premium materials: 18K gold plating over sterling silver and hypoallergenic 
                brass. We focus on the details that matter—durability, comfort, and that 
                unmistakable feeling of quality.
              </p>
              <p>
                Founded by women, for women, Velmora represents the modern approach to fine 
                jewelry: accessible luxury without compromise.
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary" size="md">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
