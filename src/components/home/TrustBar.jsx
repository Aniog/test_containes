const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="border-y border-line bg-base"
    >
      <div className="container-site">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-line">
          {ITEMS.map((item, idx) => (
            <li
              key={item}
              className={`py-4 md:py-5 text-center ${
                idx % 2 === 0 ? "border-r md:border-r-0" : ""
              } ${
                idx === 0 ? "md:border-l-0" : ""
              }`}
            >
              <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-eyebrow text-ink-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
