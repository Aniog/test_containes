import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={cn(
        'relative z-10 w-full max-w-lg mx-4 bg-white shadow-xl',
        className
      )}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#9A9590] hover:text-[#0A0806] transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
};
