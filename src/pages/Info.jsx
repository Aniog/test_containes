import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link, useSearchParams } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const TOPICS = {
  shipping: {
    title: "Shipping & Returns",
    eyebrow: "Help",
    intro:
      "Every order ships in our signature cream box, hand-tied with a velvet ribbon — ready to gift or to keep.",
    sections: [
      {
        h: "Worldwide shipping",
        body: "Complimentary tracked shipping on orders over $75. Standard orders ship within two business days from our Brooklyn studio.",
      },
      {
        h: "Carriers & timing",
        body: "Domestic: 2–5 business days via USPS or UPS. International: 5–12 business days via DHL Express. Tracking is provided for every order.",
      },
      {
        h: "30-day returns",
        body: "We accept unworn pieces in their original packaging within 30 days of delivery. Sale items are final. Return shipping is on us.",
      },
    ],
  },
  care: {
    title: "Care Guide",
    eyebrow: "Help",
    intro:
      "A few small habits will keep your gold plate glowing for years. Demi-fine is meant to be lived in — not locked away.",
    sections: [
      {
        h: "Daily care",
        body: "Remove before showering, swimming, or applying lotion and perfume. Apply fragrance first, let it dry, then put on your jewelry.",
      },
      {
        h: "Cleaning",
        body: "Wipe gently with the soft polishing cloth included in your order. For a deeper clean, mild soap and lukewarm water — pat dry.",
      },
      {
        h: "Storage",
        body: "Store pieces separately in the velvet pouch provided to prevent tangling and surface wear.",
      },
    ],
  },
  sizing: {
    title: "Sizing",
    eyebrow: "Help",
    intro:
      "Huggies and ear cuffs are designed to fit most. Necklace lengths are measured when laid flat, clasp to end.",
    sections: [
      {
        h: "Huggies & hoops",
        body: "Inner diameter runs 8–10mm — sized to sit close to the lobe without pinching. If you've worn huggies before, our sizing will feel familiar.",
      },
      {
        h: "Ear cuffs",
        body: "Adjustable — gently squeeze to tighten, lightly open to loosen. One size fits most ears.",
      },
      {
        h: "Necklaces",
        body: "16\" sits just below the collarbone. 18\" falls at the décolletage. All extenders add 2\".",
      },
    ],
  },
  contact: {
    title: "Contact",
    eyebrow: "Help",
    intro:
      "We answer every message — usually within a few hours, always within one business day.",
    sections: [
      {
        h: "Email",
        body: "Write to us at hello@velmora.studio. For order questions, please include your order number.",
      },
      {
        h: "Studio",
        body: "Velmora Fine Jewelry — 14 Greenpoint Ave, Brooklyn NY 11222. Studio visits are by appointment.",
      },
      {
        h: "Press & partnerships",
        body: "Reach our team at press@velmora.studio for editorial requests, gifting, and collaborations.",
      },
    ],
  },
  sustainability: {
    title: "Sustainability",
    eyebrow: "Company",
    intro:
      "Demi-fine is a quieter form of luxury. We make in small batches, close to home, and use recycled metals wherever the process allows.",
    sections: [
      {
        h: "Materials",
        body: "Sterling silver base, recycled where available. 18K gold plating over a barrier layer of palladium — for longer wear and fewer reactions.",
      },
      {
        h: "Production",
        body: "Made in small batches in our Brooklyn studio and a partner workshop in Jaipur. We visit both every season.",
      },
      {
        h: "Packaging",
        body: "FSC-certified paper, cotton ribbon, soy-based ink. No plastic. The box is meant to be kept.",
      },
    ],
  },
  press: {
    title: "Press",
    eyebrow: "Company",
    intro:
      "For features, gifting, and editorial requests, please reach our team directly. We respond to every note.",
    sections: [
      {
        h: "Editorial",
        body: "press@velmora.studio — for story ideas, interviews, and trend features.",
      },
      {
        h: "Gifting",
        body: "gifting@velmora.studio — for styled shoots, celebrity placements, and seasonal gifting.",
      },
      {
        h: "Brand assets",
        body: "A press kit with high-resolution imagery and brand guidelines is available on request.",
      },
    ],
  },
};

export default function Info() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "shipping";
  const data = TOPICS[topic] || TOPICS.shipping;
  const ref = useRef(null);
  useReveal(ref);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [topic]);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" });
  }, [topic]);

  return (
    <div ref={ref}>
      <section className="bg-ivory border-b border-cream">
        <div className="mx-auto max-w-screen-md px-5 md:px-8 py-20 md:py-32 text-center">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <SectionTitle
            as="h1"
            align="center"
            className="mt-6 text-4xl md:text-6xl"
          >
            {data.title}
          </SectionTitle>
          <p className="mt-7 text-base md:text-lg text-taupe leading-relaxed max-w-xl mx-auto">
            {data.intro}
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-screen-md px-5 md:px-8 py-16 md:py-24 space-y-12">
          {data.sections.map((s) => (
            <div key={s.h} className="border-b border-espresso/10 pb-10 last:border-b-0 last:pb-0">
              <h2 className="font-serif text-2xl md:text-3xl text-espresso">
                {s.h}
              </h2>
              <p className="mt-3 text-sm md:text-base text-taupe leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory border-t border-cream">
        <div className="mx-auto max-w-screen-md px-5 md:px-8 py-16 md:py-24 text-center">
          <Eyebrow>Still curious?</Eyebrow>
          <p className="mt-5 font-serif text-2xl md:text-3xl text-espresso leading-snug">
            Anything we missed, the studio would love to hear from you.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button
              as="a"
              href="mailto:hello@velmora.studio"
              variant="solid"
            >
              Email the studio
            </Button>
            <Button as={Link} to="/shop" variant="ghost">
              Browse the collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
