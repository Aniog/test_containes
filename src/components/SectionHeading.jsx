export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="mb-3 text-xs uppercase tracking-widest text-accent">{subtitle}</p>
      )}
      <h2 className="font-serif text-3xl font-normal uppercase tracking-widest-custom text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
