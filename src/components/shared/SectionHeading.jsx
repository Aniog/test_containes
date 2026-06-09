export default function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto mb-12' : 'mb-10'}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
