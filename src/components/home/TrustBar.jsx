const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-cream">
      <ul className="mx-auto flex max-w-8xl flex-col items-center divide-y divide-sand px-5 py-5 text-center md:flex-row md:divide-x md:divide-y-0 md:px-8">
        {ITEMS.map((item) => (
          <li
            key={item}
            className="flex w-full items-center justify-center py-3 text-[11px] uppercase tracking-widest2 text-ink md:w-auto md:py-0 md:px-8"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
