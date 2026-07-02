import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-ivory">
            <img
              src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-lg">
            <span className="text-xs uppercase tracking-[0.15em] text-stone">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-foreground">
              Jewelry That
              <br />
              <span className="italic">Outshines</span> Trends
            </h2>
            <div className="w-12 h-px bg-accent my-6" />
            <p className="text-stone leading-relaxed text-sm md:text-base">
              At Velmora, we believe fine jewelry shouldn&apos;t require a life milestone. 
              Every piece is crafted with 18K gold plating and genuine materials — designed 
              to be worn daily, layered effortlessly, and passed down with stories.
            </p>
            <p className="text-stone leading-relaxed text-sm md:text-base mt-4">
              From our studio to your doorstep, we keep quality high and prices accessible. 
              Because you deserve jewelry that feels as good as it looks — every single day.
            </p>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="outline" size="md">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}