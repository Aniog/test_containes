const TrustBar = ({ items }) => {
  return (
    <section className="border-y border-velmora-line bg-velmora-sand">
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 py-4 text-center text-[11px] uppercase tracking-luxury text-velmora-ink sm:px-6 lg:px-10">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            <span>{item}</span>
            {index !== items.length - 1 ? (
              <span className="hidden h-px w-8 bg-velmora-line sm:block" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
