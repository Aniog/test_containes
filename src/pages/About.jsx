export default function About() {
  return (
    <div className="pt-24 md:pt-32 bg-surface min-h-screen">
      <div className="max-w-container mx-auto px-6 md:px-12 py-14 md:py-20">
        <p className="font-sans text-xs uppercase tracking-label text-accent mb-3">
          Our Story
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-text-primary font-normal leading-[1.1] max-w-2xl">
          Designed for the Modern Muse
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 font-sans text-base text-text-secondary leading-relaxed">
          <p>
            Velmora was born from a simple belief: fine jewelry should feel personal, not precious.
            Founded in 2023, we set out to create demi-fine pieces that bridge the gap between
            costume and fine jewelry — exceptional quality at an accessible price point.
          </p>
          <p>
            Every piece in our collection is designed in-house by a small team of women who
            understand that jewelry is more than an accessory. It is a form of self-expression,
            a daily reminder of your own worth, and a connection to the people and moments that
            matter most.
          </p>
          <p>
            We use 18K gold plating on hypoallergenic, nickel-free bases. Our pieces are made
            to be worn — through morning routines, workdays, date nights, and everything in between.
            When you wear Velmora, you wear confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
