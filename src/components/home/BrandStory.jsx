import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-creamLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-h2 mb-6">Our Story</h2>
            <div className="space-y-4 text-warmGray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                We craft demi-fine pieces that bridge the gap between fine jewelry and fashion accessories—using genuine 18K gold plating, precious stones, and meticulous craftsmanship.
              </p>
              <p>
                Each piece in our collection is designed to be treasured for a lifetime, whether it's a gift for someone special or a quiet indulgence for yourself.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">Read Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}