import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const COLLECTIONS = [
  {
    id: "col-everyday",
    name: "The Everyday Edit",
    description:
      "Soft, weightless pieces designed to live on you — through showers, salads, and the long Tuesday afternoons.",
    imgId: "col-everyday-img",
    titleId: "col-everyday-title",
    descId: "col-everyday-desc",
    query:
      "flat lay of gold everyday jewelry pieces on warm cream linen background editorial product photography",
    count: 12,
  },
  {
    id: "col-bridal",
    name: "The Bridal Edit",
    description:
      "Quiet heirlooms for the morning of — pearl drops, soft gold cuffs, and a necklace for the photograph.",
    imgId: "col-bridal-img",
    titleId: "col-bridal-title",
    descId: "col-bridal-desc",
    query:
      "bridal gold jewelry set on cream silk with soft florals editorial still life warm light",
    count: 8,
  },
  {
    id: "col-gifting",
    name: "The Gifting Edit",
    description:
      "Pieces that arrive in a cream box tied with a velvet ribbon — for the people you cannot stop thinking about.",
    imgId: "col-gifting-img",
    titleId: "col-gifting-title",
    descId: "col-gifting-desc",
    query:
      "gold jewelry gift box with cream ribbon and small white flowers editorial still life warm soft light",
    count: 6,
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-ivory">
        <div className="container-x max-w-2xl text-center">
          <p className="eyebrow mb-5">Collections</p>
          <h1 className="font-serif text-h1 md:text-[64px] leading-[1.05]">
            Three <em className="italic font-normal text-champagne-deep">small</em> edits,
            <br className="hidden md:block" /> made with care.
          </h1>
          <p className="mt-5 text-body text-espresso">
            Curated groupings of our pieces — gathered around a mood, a moment,
            or a person you love.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="bg-ivory pb-24 md:pb-32">
        <div className="container-x space-y-16 md:space-y-24">
          {COLLECTIONS.map((c, i) => (
            <div
              key={c.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              <div
                className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Link to="/shop" className="block group">
                  <div className="relative aspect-[3/2] overflow-hidden bg-blush">
                    <StrkImage
                      imgId={c.imgId}
                      query={`[${c.descId}] [${c.titleId}] ${c.query}`}
                      ratio="3x2"
                      width={1200}
                      alt={c.name}

                      className="h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </div>
              <div className={`md:col-span-5 max-w-md ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="eyebrow mb-4">Volume 04 · {c.count} pieces</p>
                <h2
                  id={c.titleId}
                  className="font-serif text-h2 leading-[1.05] mb-5"
                >
                  {c.name}
                </h2>
                <p id={c.descId} className="text-body text-espresso leading-relaxed">
                  {c.description}
                </p>
                <Link
                  to="/shop"
                  className="mt-7 btn-ghost"
                >
                  Shop the Edit
                  <ArrowUpRight className="w-3.5 h-3.5 ml-3" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
