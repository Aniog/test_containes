import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";

const reels = [
  {
    id: "reel-1",
    handle: "@maya.rose",
    caption: "stacking the huggies for our saturday brunch",
    query:
      "woman portrait wearing gold huggie hoop earrings stacked on ear editorial warm light",
    imgId: "reel-1-img",
    captionId: "reel-1-caption",
  },
  {
    id: "reel-2",
    handle: "@elena.ldn",
    caption: "the only necklace i reach for, on repeat",
    query:
      "woman wearing delicate gold crystal necklace close up editorial warm tones",
    imgId: "reel-2-img",
    captionId: "reel-2-caption",
  },
  {
    id: "reel-3",
    handle: "@sofia.k",
    caption: "gift set for my sister's milestone birthday",
    query:
      "woman opening gold jewelry gift box velvet surprised portrait",
    imgId: "reel-3-img",
    captionId: "reel-3-caption",
  },
  {
    id: "reel-4",
    handle: "@june.studio",
    caption: "filigree drops for the slow sundown",
    query:
      "woman wearing gold filigree drop earrings portrait warm sunset light",
    imgId: "reel-4-img",
    captionId: "reel-4-caption",
  },
  {
    id: "reel-5",
    handle: "@aria.monae",
    caption: "ear cuff for the days i skip the piercing",
    query:
      "woman portrait gold ear cuff with crystal close up on ear",
    imgId: "reel-5-img",
    captionId: "reel-5-caption",
  },
  {
    id: "reel-6",
    handle: "@nina.mood",
    caption: "minimal layer, maximum mood",
    query:
      "woman portrait delicate gold layered necklaces minimal editorial",
    imgId: "reel-6-img",
    captionId: "reel-6-caption",
  },
];

export default function ReelStrip() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-espresso text-bg py-20 md:py-28">
      <div className="container-x mb-10">
        <p className="eyebrow text-bg/60 mb-3">As worn by you</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05] max-w-xl">
            In the wild. <em className="italic text-gold-soft">On you.</em>
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="label-cap text-bg/75 hover:text-bg border-b border-bg/40 hover:border-bg pb-1 self-start md:self-end"
          >
            Tag #velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroller */}
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 md:gap-5 px-5 md:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
          {reels.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] bg-cream/10 overflow-hidden snap-start"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[${reel.captionId}] ${reel.handle} ${reel.caption} gold jewelry editorial portrait`}
                ratio="9x16"
                width={600}
                alt={`${reel.handle} — ${reel.caption}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/85" />
              <div className="absolute top-3 right-3 inline-flex items-center justify-center w-7 h-7 bg-bg/15 backdrop-blur-sm border border-bg/25">
                <Play
                  className="w-3 h-3 text-bg fill-bg"
                  strokeWidth={0}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p
                  id={reel.captionId}
                  className="font-serif italic text-bg text-[15px] md:text-base leading-snug"
                >
                  {reel.caption}
                </p>
                <p className="mt-2 label-cap text-bg/65">{reel.handle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
