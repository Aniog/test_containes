import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Drop, stud, cuff",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-tile",
    query:
      "gold drop earrings and studs editorial flat lay on linen warm light",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendants, chains",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-tile",
    query:
      "gold pendant necklaces and chains flat lay editorial warm tones",
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "The everyday hoop",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-tile",
    query:
      "gold huggie hoop earrings flat lay on dark background editorial",
  },
];

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="container-x py-20 md:py-28">
      <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Shop by category</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05] max-w-xl">
            Find your signature.
          </h2>
        </div>
        <Link
          to="/shop"
          className="label-cap text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1 self-start md:self-end"
        >
          All Jewelry
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {tiles.map((t) => (
          <Link
            key={t.id}
            to={t.to}
            className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
          >
            <StrkImage
              imgId={t.imgId}
              query={`[${t.id}-tile-label] ${t.label} ${t.sub} editorial`}
              ratio="3x4"
              width={900}
              alt={`${t.label} — ${t.sub}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/0 to-espresso/0 transition-opacity duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
              <div>
                <h3
                  id={`${t.id}-tile-label`}
                  className="font-serif text-bg text-3xl md:text-4xl"
                >
                  {t.label}
                </h3>
                <p className="mt-1 label-cap text-bg/70">{t.sub}</p>
              </div>
              <span className="inline-flex items-center justify-center w-10 h-10 border border-bg/40 text-bg transition-all duration-300 group-hover:bg-bg group-hover:text-ink group-hover:border-bg">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
