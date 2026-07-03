const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section
      aria-label="Trust and shipping information"
      className="bg-ivory-100 border-y border-ink-900/10"
    >
      <div className="container-x">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink-900/10">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className={`py-3.5 lg:py-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-ink-700 ${
                i < 2 ? 'border-b lg:border-b-0 border-ink-900/10' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
