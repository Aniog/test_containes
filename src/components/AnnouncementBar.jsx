// Slim trust/announcement bar shown under the hero.
const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function AnnouncementBar({ light = false }) {
  return (
    <div
      className={`w-full border-y ${
        light
          ? "border-ivory-200/15 bg-espresso-800/95 text-ivory-200/85"
          : "border-line bg-ivory-200/60 text-espresso-700"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <ul className="flex items-center justify-center gap-3 sm:gap-8 py-3 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium overflow-x-auto no-scrollbar">
          {items.map((label, idx) => (
            <li key={label} className="flex items-center gap-3 sm:gap-8 whitespace-nowrap">
              <span>{label}</span>
              {idx < items.length - 1 && (
                <span
                  className={`w-1 h-1 rounded-full ${
                    light ? "bg-ivory-200/30" : "bg-taupe-400/40"
                  }`}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
