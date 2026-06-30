import { Toaster as SonnerToaster } from 'sonner'

const Toaster = () => {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#292524',
          color: '#FAF7F2',
          border: '1px solid rgba(231,229,228,0.1)',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '13px',
        },
      }}
    />
  )
}

export default Toaster
