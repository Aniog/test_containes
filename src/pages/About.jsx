import { useRef } from "react";
import { StrkImage } from "@/components/ui/StrkImage";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function About() {
  const ref = useRef(null);
  useImageLoader(ref, []);

  return (
    <div ref={ref} className="bg-velmora-cream">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          About Velmora
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-wide md:text-5xl">
          Quiet Luxury, Made Real
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-velmora-charcoal/80">
          We believe the best jewelry is the kind you reach for every morning —
          pieces that feel special without being precious, crafted to be worn,
          layered, loved, and eventually passed on.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <StrkImage
              id="about-image"
              query="[about-title] gold jewelry craftsmanship editorial"
              ratio="3x4"
              width={800}
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2
                id="about-title"
                className="font-serif text-2xl tracking-wide"
              >
                Designed for Everyday Elegance
              </h2>
              <p className="mt-3 leading-relaxed text-velmora-charcoal/80">
                Every Velmora piece begins with a sketch inspired by art,
                architecture, and the quiet details of daily life. We use 18k
                gold-plated finishes and nickel-free materials so you can wear
                them comfortably from morning meetings to late dinners.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl tracking-wide">
                Small Batches, Considered Details
              </h2>
              <p className="mt-3 leading-relaxed text-velmora-charcoal/80">
                We produce in limited runs to minimize waste and maintain
                quality. From the weight of a huggie hinge to the length of a
                pendant chain, every detail is considered.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl tracking-wide">
                Gift-Ready, Always
              </h2>
              <p className="mt-3 leading-relaxed text-velmora-charcoal/80">
                Whether you are treating yourself or someone else, each order
                arrives in a soft-touch Velmora box with a care card — no extra
                wrapping required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
