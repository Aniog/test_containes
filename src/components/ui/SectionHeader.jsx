const SectionHeader = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`section-heading ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subheading ${light ? 'text-neutral-300' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
