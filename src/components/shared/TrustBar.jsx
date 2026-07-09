export default function TrustBar({ items }) {
  return (
    <div className="border-b border-t border-velmora-line bg-velmora-ivory text-velmora-cocoa">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-3 text-center text-[0.68rem] uppercase tracking-[0.28em] text-velmora-stone sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
