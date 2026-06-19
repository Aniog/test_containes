import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { STORY_IMAGE } from "@/data/products";
import { sceneDataUri } from "@/lib/placeholders";

const VALUES = [
  {
    title: "Designed slowly",
    body: "Every Velmora piece begins as a hand-carved original, refined over weeks before it ever touches a mold.",
  },
  {
    title: "Finished by hand",
    body: "Each piece is plated, polished, and inspected by a person — not a checkpoint on a conveyor.",
  },
  {
    title: "Made to last",
    body: "18K gold plating over a hypoallergenic brass core. The finish you can wear in the shower (though we don't recommend it).",
  },
];

export default function About() {
  return (
    <>
      {/* Editorial hero */}
      <section className="relative h-[80svh] min-h-[520px] overflow-hidden bg-ink">
        <img
          src={STORY_IMAGE}
          alt="Velmora founder styling a piece in the studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="relative h-full container-velmora flex items-center">
          <div className="max-w-xl text-bone">
            <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-bone/85 mb-6">
              Our Story
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.02]">
              A studio
              <br />
              <span className="italic">obsessed with finish.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bone">
        <div className="container-velmora">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow mb-4">The Beginning</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
                Made to be worn.
                <br />
                <span className="italic"> Not saved for someday.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-5 text-base text-ink-soft leading-relaxed">
              <p>
                Velmora started in a one-room studio with a single brass cuff
                and the conviction that fine jewelry shouldn't live behind
                glass. We grew slowly — adding earrings, necklaces, and the
                huggies our community now reaches for first — and we never
                stopped finishing by hand.
              </p>
              <p>
                We design for the woman who already has everything and still
                reaches for one more piece. The pieces that get softer with
                wear, never louder with time. The pieces you forget you're
                wearing until someone says, <em>"where did you get that?"</em>
              </p>
              <p>
                Every Velmora piece arrives in packaging we obsessed over for
                six months — because the moment of opening should feel like the
                piece itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="container-velmora">
          <div className="text-center mb-14 md:mb-20">
            <p className="eyebrow mb-4">Our Values</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink max-w-2xl mx-auto">
              Three promises,
              <span className="italic"> kept quietly.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {VALUES.map((v, idx) => (
              <div
                key={v.title}
                className="bg-bone border border-line p-8 md:p-10"
              >
                <span className="text-[11px] uppercase tracking-eyebrow text-gold-deep">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl font-light text-ink">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio / sustainability imagery */}
      <section className="bg-bone">
        <div className="container-velmora py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                src={sceneDataUri({ scene: "neck", palette: "amber", width: 900, height: 1125, id: "about-1" })}
                alt="Hand finishing a piece in the Velmora studio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="relative overflow-hidden bg-cream">
                <img
                  src={sceneDataUri({ scene: "modelEar", palette: "taupe", width: 800, height: 600, id: "about-2" })}
                  alt="A close-up of a finished Velmora earring"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden bg-cream">
                <img
                  src={sceneDataUri({ scene: "earStack", palette: "umber", width: 800, height: 600, id: "about-3" })}
                  alt="Velmora packaging"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink text-bone text-center">
        <div className="container-velmora">
          <p className="text-[11px] uppercase tracking-eyebrow text-bone/70 mb-6">
            Find your piece
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] max-w-2xl mx-auto">
            Ready to wear
            <span className="italic"> something timeless?</span>
          </h2>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 bg-bone text-ink px-9 py-4 text-[11px] md:text-xs font-medium uppercase tracking-product hover:bg-cream transition-colors duration-300"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
          </Link>
        </div>
      </section>
    </>
  );
}