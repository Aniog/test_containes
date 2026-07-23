import { Toaster as SonnerToaster } from 'sonner';

export function Toaster(props) {
  return (
    <SonnerToaster
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground group-[.toaster]:border-[#E8E4DF] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[#6B6560]',
          actionButton:
            'group-[.toast]:bg-accent group-[.toast]:text-white',
          cancelButton:
            'group-[.toast]:bg-[#FAF8F5] group-[.toast]:text-[#6B6560]',
        },
      }}
      {...props}
    />
  );
}
