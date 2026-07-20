import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory text-espresso">
      <section className="max-w-8xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Quietly considered.
            <br />
            <span className="italic text-brass">Quietly worn.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-espresso/70 leading-relaxed">
            Velmora is a small studio making demi-fine jewelry in Brooklyn.
            Every piece is finished by hand, plated in 18K gold, and designed
            to be layered, gifted, and quietly treasured.
          </p>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7 aspect-[4/5] bg-sand overflow-hidden">
            <img
              data-strk-img-id="about-img"
              data-strk-img="atelier founder working with gold jewelry bench"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              alt="Inside the Velmora atelier"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
              Made slowly. Made to last.
            </h2>
            <p className="text-sm md:text-base text-espresso/75 leading-relaxed mb-4">
              We use recycled brass and sterling silver, thick layers of 18K
              gold plating, and hypoallergenic posts. Each crystal is
              handset. Each chain is hand-finished.
            </p>
            <p className="text-sm md:text-base text-espresso/75 leading-relaxed mb-4">
              We don't do fast fashion. We don't do markup. We do small
              batches, considered design, and packaging you'll want to keep.
            </p>
            <p className="text-sm md:text-base text-espresso/75 leading-relaxed">
              Thank you for supporting a small, independent studio. Every
              order keeps our atelier — and our team — quietly at work.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] link-underline"
            >
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
