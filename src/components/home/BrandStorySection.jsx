import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const storyImage =
  'https://placehold.co/900x1100/F7F4F0/6D6460?text=Atelier+Detail';

export function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream">
            <img
              src={storyImage}
              alt="Velmora atelier craftsmanship detail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-widest text-velmora-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-velmora-ink leading-tight">
              Jewelry made for the way you actually live.
            </h2>
            <p className="mt-6 text-velmora-taupe leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel
              attainable, wearable, and deeply personal. Each piece is designed in
              our studio and finished in 18K gold plate — made to keep its warmth
              through mornings, meetings, and midnight toasts.
            </p>
            <p className="mt-4 text-velmora-taupe leading-relaxed">
              We create for women who buy themselves flowers, who celebrate small
              wins, and who know the best gifts are the ones chosen with intention.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-widest text-velmora-ink hover:text-velmora-accent transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
