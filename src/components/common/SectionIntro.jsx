import SectionEyebrow from './SectionEyebrow'

const SectionIntro = ({ eyebrow, title, description, align = 'left', light = false }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const titleColor = light ? 'text-ivory' : 'text-velvet'
  const descriptionColor = light ? 'text-ivory-deep/85' : 'text-velvet/70'

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      {eyebrow ? <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow> : null}
      <div className="space-y-3">
        <h2 className={`font-serif text-4xl leading-none md:text-5xl ${titleColor}`}>
          {title}
        </h2>
        {description ? (
          <p className={`text-sm leading-7 md:text-base ${descriptionColor}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionIntro
