import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <section className="border-b border-hairline pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="eyebrow">Our Story</p>
          <h1 className="display-xl mt-4 text-ink">
            A small studio. <em className="text-gold italic">A quiet obsession.</em>
          </h1>
          <p className="mt-6 font-serif text-[18px] italic leading-relaxed text-charcoal">
            Velmora began at a kitchen table in Lisbon, in 2019, with a single flask
            of plating solution, a notebook of sketches, and a wish to make
            demi-fine jewelry that could be worn every day — without compromise.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10 lg:px-16">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
              <img
                alt="Founders of Velmora"
                data-strk-img-id="about-img-1-d4e2a8"
                data-strk-img="[about-eyebrow] [about-title] two women working with gold jewelry on a linen-covered table warm natural light"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">Atelier</p>
            <h2 className="display-lg mt-4 text-ink">Made by hand, in small batches.</h2>
            <p className="mt-6 max-w-md font-sans text-[15px] leading-relaxed text-charcoal/85">
              We work with a small atelier of craftspeople in Portugal, where each
              piece is cast, plated, set, and polished by hand. Nothing is mass
              produced. Every batch is signed and numbered. Every piece arrives
              in a keepsake suede pouch, made to be kept.
            </p>
            <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-charcoal/85">
              We use 18K gold plating over hypoallergenic metals, with a thickness
              we&rsquo;re proud of. We&rsquo;d rather make fewer, better things.
            </p>
            <Link to="/shop" className="link-underline mt-10 inline-flex items-center gap-3">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
