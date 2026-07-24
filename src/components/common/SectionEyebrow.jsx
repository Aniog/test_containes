const SectionEyebrow = ({ children, light = false }) => {
  const textColor = light ? 'text-ivory-deep/90' : 'text-velvet/60'

  return (
    <p className={`text-xs uppercase tracking-[0.35em] ${textColor}`}>
      {children}
    </p>
  )
}

export default SectionEyebrow
