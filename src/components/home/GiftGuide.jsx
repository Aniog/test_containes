import { Link } from "react-router-dom";
import { useImageLoader } from "@/hooks/useImageLoader";

export function GiftGuide() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-espresso py-14 text-cream md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
              The Gift Edit
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl">
              Treasures for Someone Special
            </h2>
            <p className="mt-6 leading-relaxed text-cream/80">
              Whether it is a birthday, anniversary, or just because, our
              curated gift sets and best-selling pieces arrive beautifully
              packaged and ready to delight.
            </p>
            <Link
              to="/shop?category=sets"
              className="mt-8 inline-block bg-cream px-8 py-3 text-xs uppercase tracking-widest text-espresso transition-colors hover:bg-gold"
            >
              Shop Gift Sets
            </Link>
          </div>

          <div className="relative order-1 aspect-[4/5] overflow-hidden bg-linen md:order-2 md:aspect-square">
            <img
              data-strk-img-id="gift-guide-img"
              data-strk-img="[gift-guide-title] [gift-guide-body] gold jewelry gift box"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora gift box with gold jewelry"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <span id="gift-guide-title" className="sr-only">
        Treasures for Someone Special
      </span>
      <span id="gift-guide-body" className="sr-only">
        Gold jewelry gift box curated gift set
      </span>
    </section>
  );
}
