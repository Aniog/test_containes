import { Link } from 'react-router-dom';
import { StockImage } from '@/components/ui/StockImage';

export default function BrandStorySection() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto bg-[#2a2520]">
          <StockImage
            imgId="brand-story-img-s1t2u3"
            query="[brand-story-headline] [brand-story-text]"
            ratio="4x5"
            width="800"
            alt="Velmora jewelry craftsmanship"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-20">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">Our Story</p>
            <h2
              id="brand-story-headline"
              className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
            >
              Where Craft Meets Consciousness
            </h2>
            <p
              id="brand-story-text"
              className="text-sm text-muted-foreground leading-relaxed mb-8"
            >
              Every Velmora piece begins as a sketch, shaped by hands that understand the weight of a meaningful gift. We believe luxury shouldn't cost the earth — which is why our demi-fine collection uses responsibly sourced materials, finished with the care of a maison and priced for real life.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
