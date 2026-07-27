export default function SectionHeader({ eyebrow, title, children, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-8 text-brand-muted md:text-lg">{children}</p>}
    </div>
  )
}
