import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-sourcing-blue text-white hover:bg-sourcing-navy shadow-sm',
  secondary: 'bg-white text-sourcing-navy border border-sourcing-line hover:border-sourcing-blue hover:text-sourcing-blue',
  light: 'bg-white text-sourcing-navy hover:bg-sourcing-sky shadow-sm',
  ghost: 'bg-transparent text-sourcing-navy hover:bg-sourcing-sky',
}

export default function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-sourcing-blue/20',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
