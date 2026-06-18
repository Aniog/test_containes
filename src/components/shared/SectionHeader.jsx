import { Link } from 'react-router-dom'

export default function SectionHeader({ label, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-[#C0392B] text-xs font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-[#1A1A2E]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-[#CBD5E0]' : 'text-[#4A5568]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
