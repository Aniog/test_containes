import { cn } from '@/lib/utils'

const Section = ({ id, children, className = '', soft = false, containerClassName = '' }) => (
  <section
    id={id}
    className={cn('section', soft && 'section-soft', className)}
  >
    <div className={cn('container-content', containerClassName)}>
      {children}
    </div>
  </section>
)

export const SectionHeader = ({ kicker, title, description, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={cn('max-w-3xl mb-12 md:mb-16', alignment, className)}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default Section
