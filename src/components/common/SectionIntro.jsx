export default function SectionIntro({ eyebrow, title, children, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-refined text-velmora-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-medium leading-tight text-velmora-espresso md:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-base leading-7 text-velmora-taupe md:text-lg">{children}</div>}
    </div>
  )
}
