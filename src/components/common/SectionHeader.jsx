export default function SectionHeader({ eyebrow, title, description, align = 'left', id }) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
