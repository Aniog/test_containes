import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import JewelryImage from "@/components/ui/JewelryImage";

export default function About() {
  return (
    <>
      <Navbar transparent={false} />
      <CartDrawer />
      <main className="bg-cream">
        <header className="container-page pt-32 md:pt-40 pb-12 md:pb-16">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 font-serif font-light text-5xl md:text-7xl text-ink leading-[1] text-balance">
            Made to be lived in.
          </h1>
        </header>

        <section className="container-page grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-20 md:pb-28">
          <div className="md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden">
              <JewelryImage id="story" className="w-full h-full" />
            </div>
          </div>
          <div className="md:col-span-5 md:pl-4">
            <p className="font-serif text-2xl md:text-3xl text-ink leading-snug italic">
              Velmora began with a single question — why does demi-fine jewelry
              have to look like fine jewelry, or cost like it?
            </p>
            <div className="mt-8 space-y-5 font-sans text-base text-mushroom-dark leading-relaxed">
              <p>
                We started Velmora in a small studio on Bond Street in 2024, after years
                of feeling like the jewelry market had two settings: costume or fine.
                We wanted a third — pieces with the weight, finish, and quietness of
                fine jewelry, made accessible by working directly with the same ateliers
                that supply the houses four times the price.
              </p>
              <p>
                Every Velmora piece is designed in New York, then cast and hand-finished
                by a small atelier partner we have known for years. We plate in thick
                18K gold over a recycled brass core, set crystals one at a time, and pack
                each piece in a keepsake box.
              </p>
              <p>
                Thank you for being here.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="container-page py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {VALUES.map((v) => (
              <div key={v.title}>
                <p className="eyebrow">{v.label}</p>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-snug">
                  {v.title}
                </h3>
                <p className="mt-4 font-sans text-base text-mushroom-dark leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-ink text-ivory">
          <div className="container-page py-20 md:py-28 text-center max-w-2xl mx-auto">
            <p className="eyebrow-dark">Continue the story</p>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-ivory leading-[1.05] text-balance">
              Find a piece to live in.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/shop" className="btn-gold">Shop the Collection</Link>
              <Link to="/journal" className="link-underline text-ivory">
                Read the Journal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const VALUES = [
  {
    label: "01 · Design",
    title: "Considered, never loud.",
    text:
      "Every piece is sketched to be worn every day, not saved for special occasions. Forms are quiet, lines are clean, weight is intentional.",
  },
  {
    label: "02 · Make",
    title: "Hand-finished, in small batches.",
    text:
      "We work with a small atelier partner we have known for years. Each piece is cast, plated, and set by hand — never mass-produced.",
  },
  {
    label: "03 · Promise",
    title: "A piece that lasts.",
    text:
      "We plate in 18K gold far beyond industry standard, set stones one at a time, and back every piece with a 30-day promise. If it doesn't feel right, we will make it right.",
  },
];
