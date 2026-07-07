import { useStrkImages } from '@/hooks/useStrkImages';
import { StrkImg } from '@/components/ui/StrkImg';
import { ArrowRight } from 'lucide-react';

export function StorySection() {
  const containerRef = useStrkImages();

  return (
    <section id="story" ref={containerRef} className="bg-velmora-cream px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne md:aspect-[3/4]">
          <StrkImg
            id="story-image"
            query="[story-headline] [story-body] gold jewelry artisan hands crafting editorial"
            ratio="3x4"
            width={900}
            alt="Velmora artisan crafting gold jewelry"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-dark">
            Our Story
          </p>
          <h2
            id="story-headline"
            className="font-serif text-4xl font-light leading-tight text-velmora-espresso md:text-5xl"
          >
            Designed for the Modern Romantic
          </h2>
          <p
            id="story-body"
            className="mt-6 font-display text-base font-light leading-relaxed text-velmora-brown"
          >
            Velmora was born from a simple belief: beautiful jewelry should feel personal, wearable, and
            attainable. Each piece is thoughtfully designed in small batches using 18k gold plating and
            hypoallergenic materials, so you can wear them from morning coffee to evening celebrations.
          </p>
          <p className="mt-4 font-display text-base font-light leading-relaxed text-velmora-brown">
            We blend timeless silhouettes with contemporary details — creating demi-fine treasures that
            become part of your story.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso transition-colors hover:text-velmora-gold-dark"
          >
            Read Our Story
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
