import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

const COLLECTIONS = [
  {
    id: "everyday-gold",
    title: "Everyday Gold",
    blurb: "The pieces that go everywhere with you.",
    imgId: "collection-everyday-1a2b",
    count: 5,
  },
  {
    id: "heirloom-edit",
    title: "The Heirloom Edit",
    blurb: "Statement pieces designed to be passed down.",
    imgId: "collection-heirloom-3c4d",
    count: 1,
  },
  {
    id: "new-arrivals",
    title: "New Arrivals",
    blurb: "Fresh from the bench — just landed.",
    imgId: "collection-new-5e6f",
    count: 1,
  },
];

export default function Collections() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-bone-100 pt-24 sm:pt-28 pb-24 min-h-screen">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55">
            The Velmora Edit
          </p>
          <h1 className="display-serif mt-3 text-4xl sm:text-5xl">
            Collections
          </h1>
          <p className="mt-4 text-sm sm:text-base text-espresso/65">
            Curated edits, themed by mood — and how you'll wear them.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COLLECTIONS.map((c, i) => (
            <li
              key={c.id}
              className={`reveal ${i === 0 ? "md:col-span-2" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Link
                to="/shop"
                className="group block relative overflow-hidden image-placeholder
                           aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]"
              >
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.id}-blurb] [${c.id}-title]`}
                  data-strk-img-ratio={i === 0 ? "21x9" : "4x3"}
                  data-strk-img-width={i === 0 ? "1800" : "900"}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 9'/%3E"
                  loading="lazy"
                  className="relative z-10 w-full h-full object-cover transition-transform duration-1000 ease-out-soft group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.10) 100%)" }}
                  aria-hidden
                />
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-7 sm:p-10">
                  <h2
                    id={`${c.id}-title`}
                    className="display-serif text-bone-50 text-3xl sm:text-4xl"
                  >
                    {c.title}
                  </h2>
                  <p
                    id={`${c.id}-blurb`}
                    className="mt-2 text-bone-100/85 text-sm sm:text-base max-w-md"
                  >
                    {c.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-bone-50">
                    Shop the {c.count}-piece edit
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
