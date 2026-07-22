export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-medium leading-tight text-velmora-espresso md:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 text-base leading-8 text-velmora-cacao/80 md:text-lg">
          {copy}
        </p>
      )}
    </div>
  )
}
