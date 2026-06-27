import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-velmora-accent font-medium mb-4">
          About Us
        </p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-text leading-tight">
          Designed in London,<br />Worn Worldwide
        </h1>
        <p className="mt-8 text-sm md:text-base text-velmora-text-muted leading-relaxed">
          Velmora was born from a simple idea: that beautiful jewelry should not be confined to special occasions. Founded in 2019 by a small team of designers and goldsmiths in East London, we set out to create demi-fine pieces that feel luxurious enough for celebrations, yet durable and refined enough for daily wear.
        </p>
        <p className="mt-4 text-sm md:text-base text-velmora-text-muted leading-relaxed">
          Every piece begins as a hand-drawn sketch. We source our materials responsibly, working with family-run ateliers who have perfected their craft over generations. Our 18K gold plating process is three layers deep — ensuring a rich, warm finish that lasts.
        </p>
        <p className="mt-4 text-sm md:text-base text-velmora-text-muted leading-relaxed">
          We believe in slow fashion. Rather than chasing trends, we design timeless silhouettes that you will reach for again and again. Because the best jewelry is not the loudest — it is the piece you never want to take off.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 bg-velmora-base text-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-velmora-base-light transition-colors"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  );
}
