function TrustBar({ items }) {
  return (
    <section className="border-y border-pearl bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-luxe text-smoke md:px-8 lg:justify-between lg:px-10">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-5">
            <span>{item}</span>
            <span className="hidden h-px w-8 bg-pearl last:hidden lg:block" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
