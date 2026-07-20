const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-t border-ivory/10">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-2 text-[0.7rem] md:text-[0.72rem] uppercase tracking-[0.28em]">
          {items.map((it, i) => (
            <li key={it} className="flex items-center gap-3 md:gap-4">
              <span className="w-1 h-1 rounded-full bg-brass hidden md:inline-block" />
              {i === 0 && (
                <span className="w-1 h-1 rounded-full bg-brass md:hidden" />
              )}
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
