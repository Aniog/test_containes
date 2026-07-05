const items = [
  { id: 'shipping', label: 'Free Worldwide Shipping' },
  { id: 'returns', label: '30-Day Returns' },
  { id: 'plating', label: '18K Gold Plated' },
  { id: 'hypo', label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Promises"
      className="bg-cream text-espresso border-y border-hairline"
    >
      <div className="container-page">
        <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 py-4 md:py-3">
          {items.map((item, idx) => (
            <li
              key={item.id}
              className="flex items-center gap-3 text-[11px] uppercase tracking-widest2 font-medium"
            >
              <span className="hidden md:inline-block h-1 w-1 rounded-full bg-gold" aria-hidden />
              <span className="md:hidden h-1 w-1 rounded-full bg-gold" aria-hidden />
              <span>{item.label}</span>
              {idx < items.length - 1 && (
                <span
                  className="hidden md:inline-block h-3 w-px bg-hairline ml-auto"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
