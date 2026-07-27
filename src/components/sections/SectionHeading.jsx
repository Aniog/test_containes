export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  )
}
