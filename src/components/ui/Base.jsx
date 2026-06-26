import React from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-slate-700',
    secondary: 'bg-brand-secondary text-white hover:bg-slate-600',
    accent: 'bg-brand-accent text-white hover:bg-amber-600',
    outline: 'border border-brand-primary text-brand-primary hover:bg-slate-50',
  };

  return (
    <button
      className={cn(
        'px-6 py-2 rounded-sm font-medium transition-colors duration-200 disabled:opacity-50 cursor-pointer',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full px-4 py-2 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all',
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'w-full px-4 py-2 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all min-h-[120px]',
        className
      )}
      {...props}
    />
  );
}
