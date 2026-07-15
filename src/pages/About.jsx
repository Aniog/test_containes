const About = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="eyebrow">Velmora</p>
      <h1 className="section-heading mt-2">Our Story</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora studio"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm leading-relaxed text-[var(--color-ink-secondary)]">
            Velmora was founded on the idea that beautiful jewelry should be part of daily life, not reserved for special occasions. We design in small batches, source responsibly, and finish each piece by hand.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
            Our warm 18K gold plating is applied with care to create pieces that feel luxurious, wear beautifully, and stand the test of time.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
