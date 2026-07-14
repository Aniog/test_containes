export default function SectionHeader({ eyebrow, title, description, invert = false }) {
  return (
    <div className="max-w-2xl space-y-4">
      {eyebrow ? (
        <p
          className={`text-xs uppercase tracking-[0.32em] ${
            invert ? 'text-amber-200' : 'text-stone-500'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-4">
        <h2
          className={`font-serif text-4xl leading-none md:text-5xl ${
            invert ? 'text-stone-50' : 'text-stone-950'
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`max-w-xl text-base leading-7 md:text-lg ${
              invert ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
