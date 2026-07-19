import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-32">
      <div className="container-x">
        <div className="text-center pb-12 md:pb-20 max-w-2xl mx-auto">
          <span className="eyebrow mb-4 block">Our Story</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Jewelry, <em className="italic">democratized</em>.
          </h1>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-espresso mb-16 md:mb-24">
          <img
            alt="The Velmora atelier"
            data-strk-img-id="about-hero-img"
            data-strk-img="[about-paragraph] [about-title]"
            data-strk-img-ratio="21x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 pb-16 md:pb-24">
          <div className="space-y-6 text-[15px] md:text-base leading-relaxed text-espresso/80">
            <p id="about-paragraph">
              Velmora began in 2021 with a single question: why does fine
              jewelry still feel out of reach? We grew up admiring the pieces
              our mothers and grandmothers kept in velvet boxes — but couldn't
              afford to wear them ourselves.
            </p>
            <p>
              So we set out to make them. Each Velmora piece is cast in small
              batches, plated in 18K gold over a brass core, and finished by
              hand in our atelier. The result: jewelry that feels like an
              heirloom, priced like a gift you'd actually give.
            </p>
            <p>
              We believe in slow making, quiet design, and the kind of pieces
              that live in your everyday — not behind glass.
            </p>
            <p id="about-title" className="font-serif italic text-2xl pt-6 text-espresso">
              — The Velmora Studio
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[3/4] bg-cream overflow-hidden">
              <img
                alt="Polishing gold pieces by hand"
                data-strk-img-id="about-img-1"
                data-strk-img="[about-paragraph] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] bg-cream overflow-hidden mt-8">
              <img
                alt="Gold chain detail"
                data-strk-img-id="about-img-2"
                data-strk-img="[about-paragraph] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center py-12 border-t border-taupe">
          <h3 className="font-serif text-3xl md:text-4xl mb-4">Find your forever piece.</h3>
          <Link to="/shop" className="btn-primary">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
}
