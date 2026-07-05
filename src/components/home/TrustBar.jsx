const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between divide-y divide-cream/10 md:divide-y-0 md:divide-x md:divide-cream/10">
          {items.map((item) => (
            <li
              key={item}
              className="flex-1 w-full md:w-auto text-center py-3 md:py-4 text-[11px] uppercase tracking-[0.25em] text-cream/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
