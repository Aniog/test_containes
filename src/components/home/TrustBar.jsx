const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-ivory-soft border-y border-hairline">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <ul className="flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-4 md:gap-2 py-5 md:py-4 overflow-x-auto no-scrollbar">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[10px] tracking-eyebrow uppercase text-ink/75 whitespace-nowrap"
            >
              <span className="hidden md:inline-flex h-1 w-1 rounded-full bg-champagne" />
              <span className="md:hidden inline-flex h-1 w-1 rounded-full bg-champagne" />
              <span>{item}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block h-3 w-px bg-hairline ml-2" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
