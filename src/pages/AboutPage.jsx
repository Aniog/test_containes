import { Link } from "react-router-dom";
import ImageFrame from "@/components/ui/ImageFrame";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <section className="bg-charcoal py-20 text-ivory md:py-28">
        <div className="container-editorial">
          <p className="eyebrow !text-ivory/60">Our story</p>
          <h1
            id="about-title"
            className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl"
          >
            Quiet, considered jewelry for everyday and for keeps.
          </h1>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <ImageFrame
              id="about-portrait"
              query="[about-body] [about-title]"
              ratio="4x5"
              width={900}
              tone="warm"
              alt="Founder of Velmora at the bench"
            />
          </div>
          <div className="md:col-span-6">
            <p
              id="about-body"
              className="font-sans text-[16px] leading-relaxed text-mocha"
            >
              Velmora began at a small bench in California with a simple idea —
              that the pieces you wear every day should feel as considered as
              the ones you save for moments. We work in 18K gold-plated brass
              and sterling silver, hand-finished in small batches, designed to
              be worn daily and kept for years.
            </p>
            <p className="mt-6 font-sans text-[16px] leading-relaxed text-mocha">
              Our designs begin with a question: <em>what would a piece of
              jewelry look like if it had to last a decade?</em> The answer is
              always restrained, always warm, and always a little more quiet
              than you might expect.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { v: "12k+", l: "Pieces kept" },
                { v: "4.9", l: "Avg rating" },
                { v: "30+", l: "Countries" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl text-charcoal">{s.v}</p>
                  <p className="font-sans text-[12px] uppercase tracking-product text-mocha">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/shop" className="btn-primary mt-10">
              Shop the collection
              <ArrowRight size={14} strokeWidth={1.5} className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
