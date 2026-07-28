import { cn } from '@/lib/utils'

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'mx-auto max-w-3xl text-center',
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SectionHeading
