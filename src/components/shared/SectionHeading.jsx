const SectionHeading = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
