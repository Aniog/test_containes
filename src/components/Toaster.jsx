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
          background: '#FFFFFF',
          color: '#2A2522',
          border: '1px solid #E5DDD3',
        },
      }}
    />
  );
};

export default Toaster;
