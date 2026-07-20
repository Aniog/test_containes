import useInView from '../hooks/useInView'

export default function AnimateIn({ children, className = '', delay = 0, ...props }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const delayClass = delay > 0 ? `visible-delay-${Math.min(delay, 3)}` : ''

  return (
    <div
      ref={ref}
      className={`animate-in ${inView ? `visible ${delayClass}` : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}