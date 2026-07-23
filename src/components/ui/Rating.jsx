import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Rating({ 
  value = 0, 
  max = 5, 
  showCount = false, 
  count = 0,
  size = 'md',
  className 
}) {
  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, index) => {
        const filled = index < Math.floor(value);
        const partial = !filled && index < value;
        
        return (
          <div key={index} className="relative">
            <Star
              className={cn(
                sizes[size],
                filled ? 'fill-gold text-gold' : 'text-sand'
              )}
            />
            {partial && (
              <div className="absolute inset-0 overflow-hidden w-[50%]">
                <Star className={cn(sizes[size], 'fill-gold text-gold')} />
              </div>
            )}
          </div>
        );
      })}
      {showCount && count > 0 && (
        <span className="ml-1.5 text-sm text-taupe">({count})</span>
      )}
    </div>
  );
}
