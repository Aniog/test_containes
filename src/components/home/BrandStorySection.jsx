import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-subtitle] [brand-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8 lg:pl-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Philosophy</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <p id="brand-story-subtitle" className="text-muted-foreground leading-relaxed mb-4">
              At Velmora, we believe luxury shouldn't come with a luxury price tag. Each piece is thoughtfully designed 
              and crafted with 18K gold plating over a hypoallergenic base — because beautiful jewelry should be 
              accessible, comfortable, and made to last.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From our studio to your doorstep, every detail is considered. The weight of a huggie, the drape of a chain, 
              the sparkle of a crystal — these are the moments we craft.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
