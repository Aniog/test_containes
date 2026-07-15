import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useStrkImages from "@/hooks/useStrkImages.js";

export default function StorySection() {
  const sectionRef = useRef(null);
  useStrkImages(sectionRef);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-cream-dark">
            <img
              data-strk-img-id="story-image-velmora"
              data-strk-img="[story-headline] [story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width={800}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craft"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-4">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            >
              Designed for the Women Who Wear It
            </h2>
            <p
              id="story-body"
              className="text-ink-muted leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine-feeling jewelry should
              be part of your everyday, not saved for someday. Each piece is
              designed in-house, plated in 18k gold, and finished by hand —
              so it feels special from the first wear to the hundredth.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              We create small-batch collections that balance trend with
              timelessness, and always put quality, comfort, and conscious
              craftsmanship first.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
