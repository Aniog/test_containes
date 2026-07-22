const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="border-y border-hairline bg-ivory">
      <ul className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3.5 text-[10px] tracking-[0.32em] uppercase text-charcoal md:gap-x-14 md:px-10 md:text-[11px]">
        {ITEMS.map((item, i) => (
          <li key={item} className="flex items-center gap-8 md:gap-14">
            <span>{item}</span>
            {i < ITEMS.length - 1 && (
              <span aria-hidden="true" className="hidden h-3 w-px bg-hairline md:inline-block" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
