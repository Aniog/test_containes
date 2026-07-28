import { Badge } from '@/components/ui/badge'

export default function SectionHeading({ badge, title, description, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`${alignment} ${className}`}>
      {badge && (
        <Badge className="mb-3" variant={badge.variant || 'default'}>
          {badge.text}
        </Badge>
      )}
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 lg:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
