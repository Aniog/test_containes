const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <section className="border-b border-stoneborder bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-4 sm:flex-row sm:flex-wrap md:gap-10 lg:gap-16">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-medium uppercase tracking-widest text-warmstone"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}