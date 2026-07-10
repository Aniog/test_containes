import { Link } from "react-router-dom";
import Newsletter from "@/components/home/Newsletter";

export default function About() {
  return (
    <div className="bg-cream pt-24 md:pt-28">
      {/* Hero */}
      <section className="container-editorial pt-8 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">Our story</div>
          <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.02] text-balance">
            Quietly made.
            <br />
            <em className="not-italic text-gold-600">Considered. Kept.</em>
          </h1>
          <p className="mt-8 text-base md:text-lg text-taupe leading-relaxed max-w-2xl">
            Velmora began in a small studio with a single bench, a polishing cloth, and a
            belief that demi-fine jewelry should be made with the same care as fine. Today we
            work with the same hands, the same light, and a small group of artisans who care
            about every finish.
          </p>
        </div>
      </section>

      {/* Image + text */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
          <div className="md:col-span-7">
            <div className="relative aspect-[5/6] overflow-hidden bg-hairline/40">
              <img
                src="https://picsum.photos/seed/velmora-about-studio/1200/1500"
                alt="Inside the Velmora studio"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "sepia(0.2) saturate(1.1) brightness(0.96)" }}
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow mb-4">Materials</div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-[1.1] text-balance">
              Hypoallergenic by design.
            </h2>
            <p className="text-taupe mt-5 leading-relaxed">
              Every Velmora piece begins with a hypoallergenic base — a brass core that is
              gentle on the most sensitive ears. We plate in 18K gold and set our stones by
              hand. The result is jewelry that can be worn from morning to evening, and every
              day in between.
            </p>
            <p className="text-taupe mt-4 leading-relaxed">
              We use only nickel-free, lead-free metals, and our packaging is recyclable from
              the inner velvet pouch to the outer box.
            </p>
            <Link to="/shop" className="btn-outline mt-8">
              Browse the collection
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
