const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-ivory border-y border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ul className="flex flex-col md:flex-row items-center justify-between divide-y divide-ivory/10 md:divide-y-0 md:divide-x md:divide-ivory/10">
          {items.map((item) => (
            <li
              key={item}
              className="flex-1 py-4 text-center font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ivory/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
