import { Link } from 'react-router-dom';
import JewelryImage from '@/components/JewelryImage';

export default function BrandStory() {
  return (
    <section className="bg-velmora-ivory">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px]">
          <JewelryImage
            id="story-img"
            query="[story-title] [story-body]"
            ratio="4x5"
            width={800}
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center section-padding py-14 md:py-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-stone mb-4">
            Our Philosophy
          </p>
          <h2
            id="story-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
          >
            Designed for the Modern Woman
          </h2>
          <p
            id="story-body"
            className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed max-w-md mb-8"
          >
            Velmora was born from a belief that fine jewelry should not be reserved for special occasions.
            Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over
            hypoallergenic bases — so you can wear them every day, effortlessly.
          </p>
          <div>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
