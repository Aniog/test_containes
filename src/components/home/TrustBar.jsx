const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-ivory border-y border-ink-soft">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <ul className="flex flex-col md:flex-row items-center justify-center divide-y divide-ivory/10 md:divide-y-0 md:divide-x md:divide-ivory/10">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex-1 py-4 md:py-5 text-center text-[11px] md:text-xs uppercase tracking-widest3 text-ivory/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
