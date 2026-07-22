import { Link } from "react-router-dom";
import { useStrkImages } from "@/lib/use-strk-images.js";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const collections = [
  {
    id: "the-icons",
    name: "The Icons",
    description: "Our most-loved signatures — the pieces that started it all.",
    query: "signature gold jewelry collection editorial flat lay warm",
    to: "/shop",
  },
  {
    id: "the-gift-edit",
    name: "The Gift Edit",
    description: "Heirloom-ready sets, boxed and ribboned for giving.",
    query: "luxury jewelry gift set gold box elegant presentation",
    to: "/shop?category=sets",
  },
  {
    id: "everyday-gold",
    name: "Everyday Gold",
    description: "Weightless huggies and chains made for never taking off.",
    query: "minimal gold huggie earrings and chain necklace everyday wear",
    to: "/shop?category=huggies",
  },
];

export default function Collections() {
  const containerRef = useStrkImages();

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pt-36">
      <header className="mb-12 border-b border-ink/10 pb-8">
        <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
          Collections
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
          Curated <span className="italic">Edits</span>
        </h1>
      </header>

      <div className="space-y-16">
        {collections.map((c, i) => (
          <Link
            key={c.id}
            to={c.to}
            className={`group grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden bg-cream">
              <img
                alt={c.name}
                data-strk-img-id={`collection-${c.id}`}
                data-strk-img={c.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src={SVG_PLACEHOLDER}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
            </div>
            <div className="md:px-4">
              <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
                Collection {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink transition-colors group-hover:text-gold md:text-5xl">
                {c.name}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-taupe">{c.description}</p>
              <span className="mt-6 inline-block border-b border-gold pb-1 text-xs font-semibold uppercase tracking-luxe text-espresso">
                Explore the Edit
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
