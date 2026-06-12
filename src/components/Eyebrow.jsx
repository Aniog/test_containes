const Eyebrow = ({ children, className = '', tone = 'dark' }) => {
  const accent = tone === 'light' ? 'bg-brass-soft' : 'bg-brass'
  const text = tone === 'light' ? 'text-brass-soft' : 'text-brass'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-10 ${accent}`} />
      <span className={`text-xs tracking-[0.25em] uppercase ${text}`}>
        {children}
      </span>
    </div>
  )
}

export default Eyebrow
