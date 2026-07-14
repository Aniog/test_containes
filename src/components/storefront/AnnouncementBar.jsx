function AnnouncementBar({ items }) {
  return (
    <div className="border-y border-stone-200/10 bg-stone-950/90 px-5 py-3 text-center text-[0.68rem] uppercase tracking-[0.34em] text-stone-300 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-7">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            <span>{item}</span>
            {index < items.length - 1 ? <span className="text-stone-500">·</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementBar
