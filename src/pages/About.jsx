import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-headline] hands shaping gold jewelry small atelier warm light"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="relative h-full max-w-4xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
          <p className="text-[11px] uppercase tracking-eyebrow text-ivory/70 font-medium">
            Our Story
          </p>
          <h1
            id="about-hero-headline"
            className="mt-4 font-serif text-5xl md:text-7xl font-light text-ivory leading-[1.05] max-w-3xl"
          >
            Made small. Made well. Made to last.
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 space-y-7 text-charcoal text-lg leading-relaxed">
        <p>
          Velmora began in a small studio in Brooklyn with a single intention: to make jewelry that doesn't ask for attention, but earns it. We were tired of a world that treated gold as a trend. We wanted pieces that quietly belonged.
        </p>
        <p>
          Every Velmora piece is finished by hand in 18K gold plate over recycled brass. We work in small batches with jewelers we know — by name, by craft, by the way they hold their tools. Nothing is mass produced. Nothing is rushed.
        </p>
        <p>
          We believe in the heirloom of the everyday: the earrings you reach for at sunrise, the necklace that becomes part of your morning. Slow, considered, warm. Crafted to be treasured.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-4 bg-espresso text-ivory px-9 py-4 text-xs uppercase tracking-eyebrow hover:bg-charcoal transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
