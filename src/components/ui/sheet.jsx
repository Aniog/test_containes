import React, { createContext, useContext, useState, useCallback } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const SheetContext = createContext(null);

const Sheet = ({ open, onOpenChange, children }) => {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetTrigger = ({ children, asChild = false, ...props }) => {
  const { onOpenChange } = useContext(SheetContext);
  const child = React.Children.only(children);
  return React.cloneElement(child, {
    onClick: () => onOpenChange?.(true),
    ...props,
  });
};

const SheetContent = ({ side = 'right', className, children }) => {
  const { open, onOpenChange } = useContext(SheetContext);
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    if (open) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!visible && !open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={cn(
          'absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          'absolute top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300',
          side === 'right' && 'right-0',
          side === 'left' && 'left-0',
          open ? 'translate-x-0' : side === 'right' ? 'translate-x-full' : '-translate-x-full'
        )}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-[#5c5650] hover:text-[#1c1917]"
        >
          <X className="h-5 w-5" />
        </button>
        <div className={cn('h-full overflow-y-auto px-6 py-10', className)}>{children}</div>
      </div>
    </div>
  );
};

const SheetHeader = ({ className, ...props }) => (
  <div className={cn('mb-6', className)} {...props} />
);

const SheetTitle = ({ className, ...props }) => (
  <h3 className={cn('font-serif text-2xl', className)} {...props} />
);

const SheetFooter = ({ className, ...props }) => (
  <div className={cn('mt-8', className)} {...props} />
);

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter };
