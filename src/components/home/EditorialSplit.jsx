import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";
import { ArrowUpRight } from "lucide-react";

export default function EditorialSplit() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-bg">
      <div className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="eyebrow mb-3">The Velvet Hour</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05]">
              Layered. Lit. <em className="italic">Lived in.</em>
            </h2>
            <p className="mt-6 text-[15px] text-ink/80 leading-relaxed max-w-md">
              The new season is built on quiet drama — antique-gold huggies
              with a crystal cuff, a single pendant catching the room light.
              Pieces that read from across the room and feel like home up
              close.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link
                to="/shop?category=earrings"
                className="btn-outline"
              >
                Shop Earrings
              </Link>
              <Link
                to="/shop?category=necklaces"
                className="label-cap text-ink border-b border-ink/60 hover:border-ink pb-1 inline-flex items-center gap-2"
              >
                Shop Necklaces
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-2 gap-3 md:gap-4">
            <div className="aspect-[3/4] bg-cream overflow-hidden">
              <StrkImage
                imgId="editorial-tall-1"
                query="[editorial-split-title] woman portrait gold layered jewelry velvet mood warm light editorial"
                ratio="3x4"
                width={700}
                alt="Layered gold jewelry editorial"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] bg-cream overflow-hidden mt-8 md:mt-16">
              <StrkImage
                imgId="editorial-tall-2"
                query="[editorial-split-title] woman wearing gold filigree earrings editorial warm sunset"
                ratio="3x4"
                width={700}
                alt="Gold filigree drop earrings editorial"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <span id="editorial-split-title" className="sr-only">
            The Velvet Hour
          </span>
        </div>
      </div>
    </section>
  );
}
