export default function SectionHeader({ eyebrow, title, description, centered = false, dark = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? 'text-sourcing-sky' : 'text-sourcing-blue'}`}>{eyebrow}</p>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-5xl ${dark ? 'text-white' : 'text-sourcing-navy'}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 md:text-lg ${dark ? 'text-white/75' : 'text-sourcing-muted'}`}>{description}</p>}
    </div>
  )
}
