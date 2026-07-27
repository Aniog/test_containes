import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[100px] w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      className={cn(
        'text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Label.displayName = 'Label';

export { Input, Textarea, Label };
