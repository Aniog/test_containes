import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-cream-100 pt-28 md:pt-32">
      <header className="mx-auto max-w-editorial px-5 pb-10 md:px-10 md:pb-14 lg:px-14">
        <p className="eyebrow eyebrow-gold">Our Story</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl text-ink-300 md:text-6xl">
          Made slowly,
          <br />
          <em className="font-light">worn for years.</em>
        </h1>
        <p className="mt-6 max-w-xl text-base text-ink-50 md:text-lg">
          Velmora began with a single idea: that demi-fine jewelry could feel
          as considered as fine jewelry, at a price you could choose often.
        </p>
      </header>

      <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[16/7]">
        <img
          alt="The Velmora workshop — natural light, brass findings, and hand tools laid out on a wooden bench"
          data-strk-img-id="about-hero-img"
          data-strk-img="[about-headline] [about-body] jewelry artisan workshop workbench"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-14">
        <div className="md:col-span-7">
          <h2
            id="about-headline"
            className="font-serif text-2xl text-ink-300 md:text-3xl"
          >
            The studio
          </h2>
          <p id="about-body" className="mt-5 text-base leading-relaxed text-ink-100 md:text-[17px]">
            We are a small studio of seven. Our workshop sits in a converted
            print house in Copenhagen, with tall windows and quiet light. Every
            piece is finished by hand — polished, set, checked, and packed by
            one of us, often with a cup of coffee going cold beside us.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-100 md:text-[17px]">
            We chose brass as our base for its warmth and its lower
            environmental cost versus many other alloys. We plate it in a
            generous 2 microns of 18K gold — heavier than most in our price
            range — and finish every piece with a tarnish-resistant coating.
          </p>
          <Link to="/shop" className="btn-outline mt-9">
            Shop the Collection
          </Link>
        </div>
        <div className="md:col-span-5">
          <figure className="aspect-[4/5] overflow-hidden bg-cream-200">
            <img
              alt="A close-up of a hand finishing a gold ring with a polishing cloth"
              data-strk-img-id="about-detail-img"
              data-strk-img="[about-headline] [about-body] close up polishing gold ring by hand"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
