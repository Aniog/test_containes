import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

export const Toaster = () => {
  return (
    <SonnerToaster 
      position="top-center"
      toastOptions={{
        style: {
          background: '#2C2522',
          color: '#F8F5F1',
          border: 'none',
          fontSize: '14px',
        },
      }}
    />
  );
};