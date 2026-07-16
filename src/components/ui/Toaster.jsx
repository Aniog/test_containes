import React from 'react';
import { Toaster as Sonner } from 'sonner';

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        style: {
          background: '#FFFFFF',
          color: '#2C2824',
          border: '1px solid #D4CFC4',
          fontFamily: 'Inter, system-ui, sans-serif',
        },
      }}
    />
  );
}
