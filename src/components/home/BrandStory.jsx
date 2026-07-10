import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="md:col-span-7 order-1">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-hairline/40">
              <img
                src="https://picsum.photos/seed/velmora-story-artisan/1200/1500"
                alt="A hand-finishing the surface of a Velmora gold piece"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "sepia(0.2) saturate(1.1) brightness(0.96) contrast(1.02)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,26,20,0) 50%, rgba(31,26,20,0.25) 100%)",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-5 order-2 md:pl-4">
            <div className="eyebrow mb-5">Our story</div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
              A studio of two.
              <br />
              <em className="not-italic text-gold-600">A lifetime of detail.</em>
            </h2>
            <p className="text-sm md:text-base text-taupe leading-relaxed mt-6">
              Velmora began in a small studio with a single bench, a polishing cloth, and a
              belief that demi-fine jewelry should be made with the same care as fine. Each
              piece is sketched, finished and set by hand — designed to be worn, and to be
              passed on.
            </p>
            <p className="text-sm md:text-base text-taupe leading-relaxed mt-4">
              We work in 18K gold plate over a hypoallergenic base, with hand-set crystals
              and considered clasps. The result is jewelry that feels quiet, considered, and
              completely yours.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-widest2 font-medium text-ink hover:text-gold-600 transition-colors group"
            >
              Read our story
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
