import { cn } from '@/lib/utils'

const GlassPanel = ({ children, className = '', hover = false, glow = '', ...props }) => {
  const glowClass = glow === 'cyan' ? 'glow-cyan' : glow === 'amber' ? 'glow-amber' : glow === 'danger' ? 'glow-danger' : ''

  return (
    <div
      className={cn(
        hover ? 'glass-panel-hover' : 'glass-panel',
        glowClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default GlassPanel
