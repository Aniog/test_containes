import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-soft">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-surface overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-velmora-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: jewelry should be more than an accessory—it should be a cherished part of your story.
              </p>
              <p>
                Founded in 2020, we set out to create pieces that bridge the gap between fine jewelry and everyday luxury. Each piece in our collection is thoughtfully designed with premium materials, crafted to last and meant to be worn every day.
              </p>
              <p>
                Our commitment to quality means using only the finest 18K gold plating, ensuring your jewelry maintains its beautiful glow for years to come. We believe in sustainable luxury—pieces that don't cost the earth, either literally or figuratively.
              </p>
            </div>
            <Link to="#" className="inline-block mt-8">
              <Button variant="secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}