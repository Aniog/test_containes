export default function SectionLabel({ children, className = '' }) {
  return (
    <span className={`inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 ${className}`}>
      {children}
    </span>
  )
}
