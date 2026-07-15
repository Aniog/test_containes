const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-y border-hairline bg-canvas">
      <div className="container-content">
        <ul className="flex flex-col items-stretch divide-y divide-hairline sm:flex-row sm:divide-x sm:divide-y-0">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex flex-1 items-center justify-center py-3 text-center sm:py-4"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-inkSoft">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
