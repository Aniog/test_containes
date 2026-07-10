import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { storySVG } from "@/data/placeholders";
import TrustBar from "@/components/home/TrustBar";

export default function About() {
  return (
    <div className="bg-cream pt-24 md:pt-28">
      <section className="max-w-editorial mx-auto px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <p className="eyebrow mb-5">Our story</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.04] mb-7">
            Quietly considered. <br />Worn often.
          </h1>
          <div className="space-y-5 text-sand-600 leading-relaxed font-sans text-[15.5px] max-w-md">
            <p>
              Velmora is named after a grandmother who never left the house without a small pair
              of gold earrings — the kind of piece that becomes part of you, not part of an
              occasion.
            </p>
            <p>
              We design demi-fine gold jewelry with the same intention. Each piece is hand-finished
              in 18K gold plating over hypoallergenic brass, made in small batches, and priced so
              you can wear it without thinking twice.
            </p>
            <p>
              We don't believe in seasonal drops or scarcity theater. We believe in pieces that
              look beautiful with a white tee, a wedding dress, or a Sunday at home.
            </p>
          </div>
          <Link to="/shop" className="btn-primary mt-9">
            Shop the collection
            <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-cream-200 order-first md:order-last">
          <img
            src={storySVG()}
            alt="Velmora craft"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <TrustBar />

      <section className="max-w-editorial mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12">
          <Pillar
            title="Made in small batches"
            body="Each piece is produced in runs of 200 or fewer. When it's gone, it's gone — until we make it again, slowly."
          />
          <Pillar
            title="Hypoallergenic, always"
            body="Lead-, nickel-, and cadmium-free brass cores. Skin-safe, even for the most sensitive ears."
          />
          <Pillar
            title="Honest pricing"
            body="No markups for marketing or celebrity endorsements. We price what the piece is worth to make — not what a logo can charge."
          />
        </div>
      </section>
    </div>
  );
}

function Pillar({ title, body }) {
  return (
    <div>
      <div className="w-10 h-px bg-gold-400 mb-5" />
      <h3 className="font-serif text-2xl mb-3">{title}</h3>
      <p className="text-sand-600 leading-relaxed text-[15px] font-sans">{body}</p>
    </div>
  );
}
