export default function ProductAccordion({ items }) {
  return (
    <div className="divide-y divide-velmora-stone/20 rounded-[1.75rem] border border-velmora-stone/15 bg-velmora-ivory/80">
      {items.map((item, index) => (
        <details key={item.title} className="group px-5 py-4" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
            {item.title}
            <span className="text-xl font-normal text-velmora-stone">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="pt-4 text-sm leading-7 text-velmora-stone">{item.content}</p>
        </details>
      ))}
    </div>
  )
}
