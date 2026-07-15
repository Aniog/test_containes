import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StrkImage } from "@/components/ui/StrkImage";
import { useImageLoader } from "@/hooks/useImageLoader";

export function StorySection() {
  const ref = useRef(null);
  useImageLoader(ref, []);

  return (
    <section ref={ref} className="bg-velmora-sand/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <StrkImage
              id="story-image"
              query="[story-title] [story-text] gold jewelry craftsmanship editorial"
              ratio="1x1"
              width={800}
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 md:px-16 md:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-3xl leading-tight tracking-wide md:text-4xl"
            >
              Jewelry Made to Live In
            </h2>
            <p
              id="story-text"
              className="mt-6 leading-relaxed text-velmora-charcoal/80"
            >
              Velmora was born from a simple belief: fine-feeling jewelry should
              be worn every day, not saved for someday. Each piece is designed in
              small batches, plated in 18k gold, and finished by hand so it feels
              as good as it looks.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-velmora-gold transition-colors"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
