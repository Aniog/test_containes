const SectionIntro = ({ eyebrow, title, description, align = 'left', light = false }) => {
  const centered = align === 'center'

  return (
    <div
      className={[
        'flex flex-col gap-4',
        centered ? 'mx-auto max-w-3xl text-center items-center' : 'max-w-3xl',
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex w-fit rounded-full px-4 py-2 text-sm font-medium',
          light ? 'bg-white/10 text-blue-100' : 'bg-blue-50 text-blue-700',
        ].join(' ')}
      >
        {eyebrow}
      </span>
      <h2 className={light ? 'text-3xl font-semibold tracking-tight text-white md:text-4xl' : 'text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'}>
        {title}
      </h2>
      <p className={light ? 'max-w-3xl text-base leading-7 text-slate-200 md:text-lg' : 'max-w-3xl text-base leading-7 text-slate-600 md:text-lg'}>
        {description}
      </p>
    </div>
  )
}

export default SectionIntro
