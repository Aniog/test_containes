export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl font-medium text-velmora-base md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}
