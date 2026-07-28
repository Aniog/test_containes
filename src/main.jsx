import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

const Root = () => {
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, document.getElementById('root'))
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
