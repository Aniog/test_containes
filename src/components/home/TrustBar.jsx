const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ul className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-ivory/15">
          {items.map((item) => (
            <li
              key={item}
              className="flex-1 text-center py-3 md:py-4 text-[11px] md:text-xs uppercase tracking-[0.2em] text-ivory/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
