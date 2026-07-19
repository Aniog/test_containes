const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section
      className="bg-bone border-y border-line"
      aria-label="Our promise"
    >
      <div className="container-page py-4 sm:py-5">
        <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink/80">
          {ITEMS.map((label, i) => (
            <li
              key={label}
              className="flex items-center"
            >
              <span className="inline-block w-1 h-1 rounded-full bg-gold mr-3" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
