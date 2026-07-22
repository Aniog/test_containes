const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream">
      <div className="container-editorial">
        <ul className="flex items-center justify-center gap-4 md:gap-10 py-3 overflow-x-auto no-scrollbar">
          {items.map((it, idx) => (
            <li
              key={it}
              className="flex items-center gap-4 md:gap-10 text-[10px] md:text-[11px] uppercase tracking-widest-2 text-cream/85 shrink-0"
            >
              {idx > 0 && (
                <span className="text-cream/30" aria-hidden="true">
                  ·
                </span>
              )}
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
