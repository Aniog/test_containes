const ContentCard = ({ children, className = '' }) => {
  return (
    <div
      className={[
        'rounded-3xl border border-surface-border bg-surface-card p-6 shadow-soft md:p-8',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export default ContentCard
