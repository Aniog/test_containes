const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export default function TrustBar() {
  return (
    <div className="border-b border-espresso-200 bg-cream">
      <div className="mx-auto flex max-w-8xl flex-col items-center divide-y divide-espresso-200 px-5 py-0 text-center sm:flex-row sm:divide-x sm:divide-y-0 sm:px-10">
        {items.map((item) => (
          <div
            key={item}
            className="flex-1 py-3 font-sans text-[10px] uppercase tracking-widest text-espresso-600 sm:py-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
