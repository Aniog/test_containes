export default function SectionHeader({ eyebrow, title, children, align = 'left', id }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl text-velmora-espresso`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="font-serif text-4xl font-medium leading-tight text-velmora-espresso sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-8 text-velmora-umber">{children}</p>}
    </div>
  )
}
