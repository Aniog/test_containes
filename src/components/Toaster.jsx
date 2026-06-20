import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = () => {
  return (
    <SonnerToaster 
      position="top-center"
      richColors
      closeButton
      className="font-sans"
      toastOptions={{
        style: {
          background: '#1A1816',
          color: '#F8F5F1',
          border: '1px solid #B89778',
        },
      }}
    />
  );
};

export default Toaster;
