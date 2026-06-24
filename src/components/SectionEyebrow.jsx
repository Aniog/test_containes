export default function SectionEyebrow({ index, label, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && (
        <span className="font-mono text-[11px] tracking-[0.3em] text-graphite">{index}</span>
      )}
      <span aria-hidden className="block w-10 h-px bg-ink/40" />
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink">
        {label}
      </span>
    </div>
  )
}
