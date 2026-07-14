import { Toaster as Sonner } from 'sonner'

const Toaster = () => {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        style: {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '13px',
          background: '#1C1917',
          color: '#FAF7F2',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      }}
    />
  )
}

export { Toaster }
