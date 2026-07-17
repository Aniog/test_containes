import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const pillars = [
  {
    title: "Crafted with care",
    body: "Every Velmora piece is hand-finished in our California studio by a small team of jewelers who care about the details you can see and the ones you can't.",
  },
  {
    title: "Made to be worn",
    body: "We design for the everyday. Our 18K gold plating and hypoallergenic bases are tested to live in your daily rotation — not stored in a drawer.",
  },
  {
    title: "Honest pricing",
    body: "By working directly with our workshops and selling only to you, we keep our demi-fine pieces in the $30–$120 range without compromising craft.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream-100">
      <header className="pt-32 lg:pt-40 pb-14 lg:pb-20 text-center max-w-editorial mx-auto px-6 lg:px-10">
        <span className="eyebrow-gold">Our Story</span>
        <h1
          id="about-heading"
          className="font-serif text-ink mt-4 text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.04]"
        >
          Quiet luxury,
          <br />
          <span className="italic">made for the everyday.</span>
        </h1>
        <p
          id="about-sub"
          className="mt-6 text-muted text-[15px] sm:text-[16px] max-w-xl mx-auto leading-relaxed"
        >
          Velmora began with a single question: why should beautiful, well-made
          jewelry be reserved for special occasions? We started in 2021 with a
          studio in California and a stubborn belief in demi-fine craftsmanship
          that lasts.
        </p>
      </header>

      <section className="max-w-editorial mx-auto px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-cream-200 order-1 lg:order-1">
            <img
              alt="Velmora studio workspace with demi-fine jewelry pieces"
              data-strk-img-id="about-studio-9911"
              data-strk-img="[about-heading] [about-sub]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-2 lg:order-2">
            <span className="eyebrow-gold">The Studio</span>
            <h2 className="font-serif text-ink mt-3 text-[28px] sm:text-[34px] lg:text-[44px] leading-[1.1]">
              From California,
              <br />
              <span className="italic">to the world.</span>
            </h2>
            <div className="mt-7 space-y-5 text-muted text-[15px] leading-relaxed">
              <p>
                We work in small batches out of a sunlit studio in Ojai,
                California. Our jewelers are paid fairly, our metals are
                sourced responsibly, and every piece is hand-finished.
              </p>
              <p>
                When you wear Velmora, you're wearing the work of a small team
                who genuinely care about how it looks in ten years — not just
                in the unboxing video.
              </p>
            </div>
            <Link to="/shop" className="btn-gold mt-9">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-200 py-20 lg:py-28">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow-gold">What we stand for</span>
            <h2 className="font-serif text-ink mt-3 text-[32px] sm:text-[40px] lg:text-[48px]">
              Our three promises
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className="bg-cream-100 p-8 lg:p-10 flex flex-col"
              >
                <span className="font-serif text-gold text-[44px] leading-none">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-ink text-[24px] mt-5">
                  {p.title}
                </h3>
                <p className="mt-4 text-muted text-[14px] leading-relaxed flex-1">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
