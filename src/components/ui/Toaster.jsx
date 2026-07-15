import { Toaster as Sonner } from 'sonner'

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#1a120c',
          color: '#f7f2e8',
          border: '1px solid #3d2e1e',
          fontFamily: 'Inter, sans-serif',
        },
      }}
    />
  )
}