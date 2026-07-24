const TrustBar = ({ items }) => {
  return (
    <section className="border-y border-velvet/10 bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-4 text-center text-[11px] uppercase tracking-eyebrow text-velvet/65 md:px-10 xl:px-16">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            <span>{item}</span>
            {index < items.length - 1 ? <span className="hidden h-3 w-px bg-velvet/15 md:block" /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
