const ITEMS = [
  { label: 'Free Worldwide Shipping', sub: 'on orders over $80' },
  { label: '30-Day Returns', sub: 'on unworn pieces' },
  { label: '18K Gold Plated', sub: 'recycled brass core' },
  { label: 'Hypoallergenic', sub: 'nickel & lead free' },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="bg-cream-2 border-y border-line"
    >
      <div className="container-x py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 md:gap-x-8 text-center md:text-left">
          {ITEMS.map((item, i) => (
            <li
              key={item.label}
              className={`flex flex-col items-center md:items-start ${
                i < ITEMS.length - 1 ? 'md:border-r md:border-line md:pr-8' : ''
              }`}
            >
              <span className="font-serif text-sm md:text-base text-espresso">
                {item.label}
              </span>
              <span className="text-[11px] text-muted mt-0.5">
                {item.sub}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
