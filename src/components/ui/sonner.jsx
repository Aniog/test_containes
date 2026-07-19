import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = ({ ...props }) => {
  return (
    <SonnerToaster
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-brand-ink group-[.toaster]:border-brand-border group-[.toaster]:shadow-soft',
          description: 'group-[.toast]:text-brand-muted',
          actionButton:
            'group-[.toast]:bg-brand-accent group-[.toast]:text-white',
          cancelButton:
            'group-[.toast]:bg-brand-bg group-[.toast]:text-brand-ink',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
