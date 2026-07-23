const TrustBar = ({ items }) => {
  return (
    <section className="border-b border-t border-velmora-sand/70 bg-velmora-rose/45">
      <div className="page-shell overflow-hidden py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-velmora-mocha sm:gap-x-6">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-4 sm:gap-6">
              {index > 0 ? <span className="hidden h-3 w-px bg-velmora-sand sm:block" /> : null}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
