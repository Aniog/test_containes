const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <section
      aria-label="Trust"
      className="bg-bone border-y border-hairline"
    >
      <div className="container-x py-4 md:py-5">
        <ul className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-4 flex-shrink-0"
            >
              <span className="label-2 text-ink whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="w-1 h-1 rounded-full bg-mist/40 flex-shrink-0"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
