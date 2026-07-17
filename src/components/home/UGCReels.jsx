import { useRef } from "react";
import { Heart } from "lucide-react";

const reels = [
  {
    id: "ugc-amber-lace",
    handle: "@sienna.r",
    caption: "Wedding-ready",
    likes: "12.4k",
    imgId: "ugc-amber-lace-901a",
    textId: "ugc-amber-lace-cap",
  },
  {
    id: "ugc-vivid-aura",
    handle: "@noor.m",
    caption: "Quiet sparkle",
    likes: "8.7k",
    imgId: "ugc-vivid-aura-2bcd",
    textId: "ugc-vivid-aura-cap",
  },
  {
    id: "ugc-sphere-huggies",
    handle: "@aria.k",
    caption: "Everyday heirloom",
    likes: "21.1k",
    imgId: "ugc-sphere-huggies-3ef0",
    textId: "ugc-sphere-huggies-cap",
  },
  {
    id: "ugc-flora-nectar",
    handle: "@maya.l",
    caption: "Golden hour",
    likes: "6.2k",
    imgId: "ugc-flora-nectar-4a12",
    textId: "ugc-flora-nectar-cap",
  },
  {
    id: "ugc-heirloom-set",
    handle: "@elena.v",
    caption: "The gift edit",
    likes: "15.9k",
    imgId: "ugc-heirloom-set-5b34",
    textId: "ugc-heirloom-set-cap",
  },
  {
    id: "ugc-amber-stack",
    handle: "@tessa.j",
    caption: "Layered light",
    likes: "9.3k",
    imgId: "ugc-amber-stack-6c56",
    textId: "ugc-amber-stack-cap",
  },
];

export default function UGCReels() {
  const scrollerRef = useRef(null);

  return (
    <section className="bg-cream-200 py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow-gold">Worn by you</span>
            <h2
              id="ugc-section-title"
              className="font-serif text-ink mt-3 text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05]"
            >
              From the community
            </h2>
          </div>
          <p
            id="ugc-section-subtitle"
            className="text-muted text-[14px] max-w-sm"
          >
            Real customers, real stories. Tag{" "}
            <span className="text-ink">@velmora</span> for a chance to be
            featured.
          </p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <ul className="flex gap-4 sm:gap-5 px-6 lg:px-10 pb-4 snap-x snap-mandatory">
          {reels.map((r) => (
            <li
              key={r.id}
              className="relative flex-shrink-0 w-[200px] sm:w-[230px] lg:w-[260px] aspect-[9/16] bg-ink snap-start overflow-hidden"
            >
              <img
                alt={`${r.caption} by ${r.handle}`}
                data-strk-img-id={r.imgId}
                data-strk-img={`[${r.textId}] [ugc-section-subtitle] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink/85" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={r.textId}
                  className="font-serif text-cream text-[24px] sm:text-[26px] leading-tight italic"
                >
                  {r.caption}
                </p>
                <div className="mt-3 flex items-center justify-between text-cream/80">
                  <span className="text-[11px] tracking-[0.18em] uppercase">
                    {r.handle}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Heart
                      className="w-3 h-3"
                      strokeWidth={1.6}
                      fill="currentColor"
                    />
                    {r.likes}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
