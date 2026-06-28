const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
  "Hand-Finished in Small Batches",
];

export default function TrustBar() {
  return (
    <section className="bg-[#EFE7DA] border-y border-[#1A1410]/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#3D332A]">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center gap-8 md:gap-12">
              <span>{item}</span>
              {i < ITEMS.length - 1 && (
                <span aria-hidden className="hidden md:inline text-[#B8924A]">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
