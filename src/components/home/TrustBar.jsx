const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-velmora-ink py-3.5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map((item) => (
            <li
              key={item}
              className="font-sans text-[10px] md:text-xs uppercase tracking-[0.16em] text-white/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
