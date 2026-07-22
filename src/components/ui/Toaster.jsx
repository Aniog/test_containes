import React from 'react';
import { Toaster as Sonner } from 'sonner';

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        className: 'toast',
        style: {
          background: '#1A1816',
          color: '#F8F5F1',
          border: '1px solid #3A3632',
        },
      }}
    />
  );
}
