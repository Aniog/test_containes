import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block font-sans text-sm tracking-widest text-gold uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-charcoal/70 font-sans leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel adorned. 
                Our journey began with a simple vision: to create accessible 
                luxury that doesn't compromise on quality or conscience.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our 
                studio and crafted by skilled artisans using ethically sourced 
                materials. We use 18K gold plating over hypoallergenic metals, 
                ensuring beauty that lasts.
              </p>
              <p>
                More than accessories, our jewelry becomes part of your 
                personal narrative — worn on ordinary Tuesdays and celebrated 
                milestones, gifted with love and worn with confidence.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
