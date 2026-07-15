import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = () => {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          error: 'bg-red-500 text-white',
          success: 'bg-brand-gold text-brand-black',
        },
      }}
    />
  );
};

export { Toaster };
