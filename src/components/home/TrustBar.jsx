const TRUST = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

const TrustBar = () => (
  <section className="bg-velmora-cream border-b border-velmora-line">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-5">
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-velmora-ink/80">
        {TRUST.map((t, i) => (
          <li
            key={t}
            className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.28em]"
          >
            {i > 0 && (
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-velmora-gold mr-7" />
            )}
            {t}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBar;
