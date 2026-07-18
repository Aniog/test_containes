const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-cream border-y border-cream/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ul className="flex flex-col md:flex-row items-center justify-between divide-y divide-cream/10 md:divide-y-0 md:divide-x md:divide-cream/10">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex-1 w-full md:w-auto text-center py-4 md:py-5 text-[11px] uppercase tracking-widest2 text-cream/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
