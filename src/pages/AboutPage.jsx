import React from "react";
import Container from "@/components/ui/Container.jsx";
import Button from "@/components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { homeImagery } from "@/data/products.js";

const AboutPage = () => (
  <>
    <section className="bg-ink text-cream pt-32 pb-20">
      <Container>
        <p className="eyebrow text-champagne">Our story</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
          Made by hand,
          <br />
          <span className="italic font-light">worn by heart.</span>
        </h1>
        <p className="mt-6 font-sans text-[1rem] text-cream/80 max-w-xl leading-relaxed">
          Velmora is a small jewelry house making demi-fine gold pieces
          in limited runs. Every piece is hand-finished at our atelier
          and packaged to feel like a gift.
        </p>
      </Container>
    </section>

    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            {homeImagery.brandStory}
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
              Quiet luxury,
              <br />
              <span className="italic font-light">made for every day.</span>
            </h2>
            <p className="mt-6 font-sans text-[0.98rem] text-mute leading-relaxed max-w-lg">
              We started in 2019 with a single sketchbook and a small workbench.
              We wanted jewelry that felt like fine — the weight, the finish,
              the quiet detail — without the fine-jewelry price tag. So we
              built it ourselves, piece by piece.
            </p>
            <p className="mt-4 font-sans text-[0.98rem] text-mute leading-relaxed max-w-lg">
              Today, our pieces are sold in 24 countries. We still make them
              in small batches. We still hand-finish every clasp. And we
              still believe the best jewelry is the kind you never take off.
            </p>
            <Button as={Link} to="/shop" variant="primary" size="md" className="mt-8">
              Shop the collection
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default AboutPage;
