import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';

export default function BrandStory() {
  return (
    <section className="border-y border-linen bg-sand/40">
      <ImageScope className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <div className="relative order-1 overflow-hidden">
          <StrkImg
            imgId="story-atelier"
            query="jeweler's hands crafting delicate gold jewelry at an atelier workbench, warm window light, editorial photography"
            ratio="4x3"
            width={1000}
            alt="The Velmora atelier"
            className="aspect-[4/5] w-full object-cover md:aspect-[4/4.6]"
          />
          <div className="absolute bottom-4 left-4 bg-ivory/95 px-4 py-3">
            <p className="text-[10px] font-medium uppercase tracking-luxe text-bronze">Est. 2019</p>
            <p className="font-serif text-sm italic text-espresso">Handcrafted in small batches</p>
          </div>
        </div>

        <div className="order-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-espresso md:text-5xl">
            Jewelry that feels like it was always yours
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-umber">
            <p>
              Velmora began at a single workbench with a simple belief: beautiful, honest
              jewelry should not require a special occasion — or a special budget. Each piece
              starts as a hand sketch, is cast in recycled brass, and finished in a generous
              layer of 18K gold.
            </p>
            <p>
              We make demi-fine jewelry for the way women actually live: huggies that survive
              school runs and soirées, necklaces that layer without tangling, and gift sets
              that arrive ready to make someone's week.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-espresso pb-1 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-colors duration-300 hover:border-bronze hover:text-bronze"
          >
            Read Our Story
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </ImageScope>
    </section>
  );
}
